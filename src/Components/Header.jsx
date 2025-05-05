/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../Utils/firebase';
import { addUser, removeUser } from '../redux-store/userSlice';


const Header = () => {
    const user = useSelector((store) => store.userData)
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
        return ()=>unsubscribe();
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
    return (
        <div className="absolute py-2 px-8 w-full bg-gradient-to-b from-black  z-10 flex justify-between">
            <img className='w-44 ' src={Netflix_Logo_PMS} alt="Netflix-Logo" />
            {(user) && <div className='flex items-center gap-1'>
                <img className="w-12 h-14 py-1 rounded-2xl"
                    src={user.photoURL} alt="userIcon" />
                <button
                    onClick={handleSignOut}
                    className='text-white  cursor-pointer font-semibold'>(SignOut)</button>
            </div>}
        </div>
    )
}

export default Header;
