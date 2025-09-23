/* eslint-disable no-unused-vars */
import { Navigate, useLocation, useNavigate } from 'react-router-dom'; 
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth } from '../Utils/firebase';
import { addUser, removeUser } from '../redux-store/userSlice';
import { toggleGptSearchView } from '../redux-store/gptSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/constants';
import { changeLanguage } from '../redux-store/configSlice'; 


const Header = () => {
    const location = useLocation(); // to get the path url
    const user = useSelector((store) => store.userData)
    const toggleGptSearch = useSelector(store => store.gpt.showGptSearch)
    const [isDropdownClicked, setIsDropdownClicked] = useState(false)
    // Dispatching an action to appStore when user signup/signIn or logout. we can write it anywhere but inside or redux provider.
    const dispatch = useDispatch();
    const navigate = useNavigate(); // this hook should be inside of react router provider.         
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {  // this will work only when user signIn/SignUp. it will dispatch the action to appStore.
            if (user) {
                // User is signed in, see docs for a list of available properties https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))
                navigate("/browse") // after signIn/signUp user will navigated to Brower page.
            }
            else {
                // User is signed out.
                dispatch(removeUser())
                navigate("/") // after logout user will navigated to Login page
            }
        })
        // Unsubscribe when component unMount.
        return () => unsubscribe();
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // navigate("/") this will take care by onauthstatechange function. 

        }).catch((error) => {
            // navigate("/error")
        });
    }
    //console.log("location",location.pathname)
    // console.log("user",user)

    const handleGptSearchView = () => {
        // toggling GPT Search.
        if(location.pathname !== "/browse")
            navigate("/browse") 
        dispatch(toggleGptSearchView());
        setIsDropdownClicked(false)
    }

    const handleLanguageChange = (e) => {
        // change language 
        //console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }
    const handleDropDown = () => { 
        setIsDropdownClicked(!isDropdownClicked);
    };
    const handleImageClick = ()=>{
        if (user && toggleGptSearch === true ) {
            dispatch(toggleGptSearchView())
        };
        if (user){
            navigate('/browse')}
    }
    const handleWatchList = ()=>{
        navigate('/watchlist')
    }
    return (
        <div className="absolute sm:md:pr-10 sm:md:pl-2 w-[100%] backdrop-blur-[20px] bg-[hsla(0,0%,6%,0.8)] z-10 flex items-center md:flex sm:md:flex-row sm:md:justify-between ">
            <div className='flex  md:gap-0 items-center'>
                
                <h1 onClick={handleImageClick}
                 className=' py-5 text-2xl md:xl:text-3xl font-bold px-3 cursor-pointer 
                 transition delay-150 duration-300 ease-in-out hover:-translate hover:scale-110 text-shadow-lg/20 text-shadow-red-500
bg-gradient-to-r from-purple-500 via-red-500 to-red-500 text-transparent bg-clip-text

                 '>MOVIENEST</h1>
                {user && <div
                    onClick={handleWatchList} 
                    className= " md:flex cursor-pointer -ml-2 md:ml-8 lg:ml-8  items-center  text-white hover:text-white text-lg hover:border-2  md:border-white/40 lg:border-white/40 xl:border-white/40 h-fit py-1 px-2 pr-3 rounded-xl">  
                        <svg className='hover:border-white/60 hover:border-2  hover:md:border-0 hover:lg:border-0 hover:xl:border-0 w-7 text-white/70 hover:text-white md:text-white lg:text-white stroke-amber-300 md:h-5 lg:h-5 stroke-2 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="currentStroke" strokeLinecap="round" strokeLinejoin="round">
                        </path> </svg>
                    <span className=' hidden md:block lg:block xl:block'> Watchlist </span> 
                </div>}

            </div>
            {(user) && <div className='flex items-center gap-3 py-2 sm:md:mr-18 xl:22'>

                {/* select box to chose prefered language */}
                { toggleGptSearch && <select
                    onChange={handleLanguageChange} className="top-12 bg-gray-500 px-3 py-1 text-white/70 outline-none rounded-md">
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier} > {lang.name} </option>)}
                </select> }
                
                {/*GPT search Button */}
                <button className="hidden md:block cursor-pointer px-4 py-1 rounded-md  hover:border-1  hover:text-white text-white/90"
                    onClick={handleGptSearchView} >
                    {toggleGptSearch ? "Home " : "GPT Search"}
                </button>
                

            
            {(user) &&
                <div  onClick={handleDropDown}
                className='absolute top-1 right-4 my-1 text-sm sm:md:text-sm py-3 flex gap-2 sm:md:mr-4 justify-center'>
                    
                    <img className="w-10 h-10 rounded-md "
                        src={user.photoURL} alt="userIcon" />
                    <span
                        className=" hidden md:block lg:block xl:block material-symbols-outlined font-extrabold text-3xl text-white/70  flex self-center cursor-pointer hover:text-red-700"
                       
                    >
                        ⋮
                    </span>
                    { isDropdownClicked && (
                        <div className="bg-black/80 absolute top-12 cursor-pointer sm:md:top-16  sm:md:mr-15 w-32 ">
                            <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-700">
                                {user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}
                            </h1>
                            <button
                                className="cursor-pointer text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-700"
                                onClick={handleGptSearchView}
                            >
                                {toggleGptSearch ? "Home " : "GPT Search"}
                            </button>
                            <h1
                                className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl cursor-pointer  hover:text-red-700"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </h1>
                        </div>
                    )}

                </div>
            }</div>}
        </div>
    )
}

export default Header;
