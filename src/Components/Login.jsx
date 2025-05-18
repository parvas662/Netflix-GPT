/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import { ValidateData } from "../Utils/validate";
import backgroundImage from '../assets/backgroundImage.jpg';
import { createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux-store/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [toggleSignIn, settoggleSignIn] = useState(true)
    const [errorMessage, seterrorMessage] = useState('');
  //  const navigate = useNavigate(); 
    const toggleSignInForm = () => {
        settoggleSignIn(!toggleSignIn)
    }
    const fullname = useRef('');
    const email = useRef(null);
    const password = useRef(null);

    const SubmitFormData = () => { ;
        const err = ValidateData(toggleSignIn, fullname, email.current.value, password.current.value)
        seterrorMessage(err)
        if (err) return

        // >>>>> SignUp <<<<<
        if (!toggleSignIn) {
            //Sign Up logic
            // auth() is in firbase.js
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // Update user profile just after sigining up,so to show this photourl and displayname we need to update our redux-store.
                    updateProfile(auth.currentUser, {
                        displayName: fullname.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/59643791?v=4&size=64"
                    }).then(() => {
                        // Profile updated and update store. now navigate 
                        const { uid, displayName, email, photoURL } = auth.currentUser   // fetch updated values of user from auth. not from user because user has unupdated values.
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        //navigate("/browse")
                    }).catch((error) => {
                        seterrorMessage(error.message)
                    })
                    //console.log(user)
                })
                .catch((error) => {
                    //  const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorMessage)
                });
        }

        // >>>> SignIn <<<<<
        if (toggleSignIn) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //console.log(user)
                 //   navigate("/browse")
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorMessage)
                });
        }

    }

    return (
        <div >
            <img className="w-screen h-screen fixed bottom-0 object-cover " src={backgroundImage} />

            <form
                onSubmit={(e) => { e.preventDefault() }}
                className=" w-full xl:w-4/12 md:w-5/12 absolute my-36 md:my-26 mx-auto top-0 right-0 left-0 bg-black/80  text-white flex flex-col px-20  rounded-lg bg- ">

                <h1 className="font-bold text-3xl mt-6 mb-4 "> {toggleSignIn ? "Sign In" : "Sign Up"}</h1>

                {!toggleSignIn
                    &&
                    <input
                        ref={fullname}
                        className="border-1 border-amber-50 px-3 py-4  rounded-md my-3 " type="text" placeholder="Full Name" />
                }

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="border-1 border-amber-50 px-3 py-4 rounded-md my-3 " />

                <input
                    ref={password}
                    className=" border-1 border-amber-50 rounded-md px-3 py-4 mt-3 " type="password"
                    placeholder="Password"
                    autoComplete="current-password" />

                <p className="text-red-700 font-bold text-wrap py-2">{errorMessage}</p>
                {toggleSignIn && <div>
                    <p className="flex flex-col text-white/60 mb-2"> 
                        <span>Email: Testuser@gmail.com</span>
                        <span>Password: Test@123</span>
                    </p>
                </div> 
                }
                <button
                    onClick={SubmitFormData}
                    className="p-2 mx-auto  bg-red-700 hover:bg-red-800 rounded-md w-full text-bold ">
                    {toggleSignIn ? "Sign In" : "Sign Up"} </button>

                <div className="my-6 cursor-pointer text-white font-bold" onClick={toggleSignInForm}>
                    {toggleSignIn ? "New to Netflix? SignUp" : "Already a User? SignIn"}

                </div>
                
            </form>

        </div>
    )
}

export default Login;

