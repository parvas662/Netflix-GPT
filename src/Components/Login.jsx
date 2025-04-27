

import { useState } from "react";
import Header from "./Header";
import Browse from "./browse";

const Login = () => {

    const [toggleSignIn,settoggleSignIn] = useState(true)
    const toggleSignInForm = () => {
        settoggleSignIn(!toggleSignIn)
    }

    return (
        <div >
            <Header />
            <img className="" src="src\assets\images\backGround-image.img" alt="backgroundImage" />

            <form className=" w-4/12  h-10/12 absolute my-26 mx-auto top-0 right-0 left-0 bg-black/80  text-white flex flex-col px-20  rounded-lg bg- ">
                <h1 className="font-bold text-3xl mt-8 mb-4 "> {toggleSignIn? "Sign In" : "Sign Up" }</h1>
                { !toggleSignIn && <input className="border-1 border-amber-50 px-3 py-4  rounded-md my-3 " type="text" placeholder="Full Name" />
                } 
                 
                <input className="border-1 border-amber-50 px-3 py-4 rounded-md my-3 " type="text" placeholder="Email Address" />
                <input className=" border-1 border-amber-50 rounded-md px-3 py-4 my-3" type="password" placeholder="Password" />
                
                <button className="p-2 mx-auto my-4 bg-red-700 hover:bg-red-800 rounded-md w-full text-bold "  
                > {toggleSignIn? "Sign In" : "Sign Up" } </button>
                <div className="my-10 text-white font-bold" onClick={toggleSignInForm}> 
                    {toggleSignIn ? "New to Netflix? SignUp" : "Already a User? SignIn" }
                    
                 </div>
            </form>

        </div>
    )
}
export default Login;

