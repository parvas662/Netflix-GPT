
import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../Utils/validate";

const Login = () => { 
    const [toggleSignIn,settoggleSignIn] = useState(true)
    const [errorMessage,seterrorMessage] = useState('');
    const toggleSignInForm = () => {
        settoggleSignIn(!toggleSignIn)
    }
    const fullname = useRef('');
    const email = useRef(null);
    const password = useRef(null);
    
    const SubmitFormData = ()=>{
       // console.log(email.current.value);
       // console.log(password.current.value);
        const err = ValidateData(toggleSignIn ,fullname , email.current.value,password.current.value)
       // console.log(err)
        seterrorMessage(err)
    }
    return (
        <div >
            <Header />
            <img className="" src="src\assets\images\backGround-image.img" alt="backgroundImage" />
            
            <form
                onSubmit={(e )=>{e.preventDefault()}}
             className=" w-4/12   absolute my-26 mx-auto top-0 right-0 left-0 bg-black/80  text-white flex flex-col px-20  rounded-lg bg- ">
                
                <h1 className="font-bold text-3xl mt-8 mb-4 "> {toggleSignIn? "Sign In" : "Sign Up" }</h1>
                
                { !toggleSignIn 
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
                    className=" border-1 border-amber-50 rounded-md px-3 py-4 my-3" type="password" 
                    placeholder="Password" 
                    autoComplete = "current-password" />
                
                <p className="text-red-700 font-bold text-wrap py-2">{errorMessage}</p>

                <button 
                    onClick = {SubmitFormData}
                    className="p-2 mx-auto my-4 bg-red-700 hover:bg-red-800 rounded-md w-full text-bold "> 
                    {toggleSignIn? "Sign In" : "Sign Up" } </button>  

                <div className="my-10 cursor-pointer text-white font-bold" onClick={toggleSignInForm}> 
                    {toggleSignIn ? "New to Netflix? SignUp" : "Already a User? SignIn" }
                    
                 </div>
            </form>

        </div>
    )
}
export default Login;

