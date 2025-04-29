/* eslint-disable no-unused-vars */
import {  useNavigate } from 'react-router-dom';
import Netflix_Logo_PMS from '../assets/Netflix_Logo_PMS.png'; 
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux'; 


const Header = () => {
    const user = useSelector((store)=>store.userData) 
    const navigate = useNavigate()
    const handleSignOut = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/")

        }).catch((error) => { 
             navigate("/error")
        });
    }
    //console.log("location",location.pathname)
   // console.log("user",user)
    return (
        <div className="absolute py-2 px-8 w-full bg-gradient-to-b from-black z-10 flex justify-between">
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
