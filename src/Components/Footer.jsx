import { Link } from "react-router-dom";

import githubLogo from '/src/assets/github.svg';
import emailLogo from '/src/assets/email.svg';
import xLogo from '/src/assets/twitter-x.svg';

const Footer = ()=>{
    // return (
     //   <div className="w-screen  bottom-0  bg-black"> 
           
   return (
      <div className="bg-black w-full text-white flex flex-col justify-center text-center gap-12 p-20 text-sm font-normal">
      <div className="flex  justify-center gap-6">

        <a  target="_blank" href="https://x.com/m_vishusharma">
            <img src={xLogo} alt="GitHub" className="w-8 h-8 bg-amber-50  hover:scale-110 transition rounded-full" />
        </a>

        <a  target="_blank" href="mailto:vishusharma663@gmail.com">
            <img src={emailLogo} alt="GitHub" className="w-8 h-8 bg-amber-50  hover:scale-110 transition rounded-full" />
        </a>


        <a  target="_blank" href="https://github.com/parvas662">
            <img src={githubLogo} alt="GitHub" className="w-8 h-8 bg-amber-50  hover:scale-110 transition rounded-full" />
        </a>
      </div>
      <p>&#169; 2025 Vishu Sharma. All rights reserved. </p>
    </div>
  );

}

export default Footer;