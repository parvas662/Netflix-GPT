/* eslint-disable no-unused-vars */
import { Navigate, useNavigate } from 'react-router-dom';
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth } from '../Utils/firebase';
import { addUser, removeUser } from '../redux-store/userSlice';
import { toggleGptSearchView } from '../redux-store/gptSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/constants';
import { changeLanguage } from '../redux-store/configSlice';


const Header = () => {
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
        dispatch(toggleGptSearchView());
        setIsDropdownClicked(false)
    }

    const handleLanguageChange = (e) => {
        // change language 
        //console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }
    const handleDropDown = () => {
        console.log(isDropdownClicked);
        setIsDropdownClicked(!isDropdownClicked);
    };
    return (
        <div className=" absolute py-2 sm:md:pr-10 sm:md:pl-5 w-[100%] bg-gradient-to-b from-black  via-black/80 to-transparent z-10 flex items-center md:flex sm:md:flex-row sm:md:justify-between ">
            <img onClick={handleGptSearchView} className='w-48 sm:md:w-44 cursor-pointer  ' src={Netflix_Logo_PMS} alt="Netflix-Logo" />
            {(user) && <div className='flex items-center gap-3 py-2 sm:md:mr-22'>

                {/* select box to chose prefered language */}
                {toggleGptSearch && <select
                    onChange={handleLanguageChange} className="top-12 bg-gray-600 px-3 py-1 text-white outline-none rounded-md">
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier} > {lang.name} </option>)}
                </select>}
                {/*GPT search Button */}
                <button className="hidden md:block cursor-pointer px-4 py-1 rounded-md bg-red-600 text-white"
                    onClick={handleGptSearchView} >
                    {toggleGptSearch ? "Home " : "GPT Search"}
                </button>

            
            {(user) &&
                <div className='absolute top-0 right-4 my-2 text-sm sm:md:text-sm py-3 flex gap-3 sm:md:mr-4 justify-center'>
                    <img className="w-12 h-13 py-1 rounded-md "
                        src={user.photoURL} alt="userIcon" />
                    <span
                        className="material-symbols-outlined font-extrabold text-3xl text-white flex self-center cursor-pointer hover:text-red-700"
                        onClick={handleDropDown}
                    >
                        ⋮
                    </span>
                    { isDropdownClicked && (
                        <div className="bg-black/80 absolute top-12 sm:md:top-16 mr-2 sm:md:mr-7 w-27 ">
                            <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-700">
                                {user.displayName}
                            </h1>
                            <button
                                className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-700"
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
