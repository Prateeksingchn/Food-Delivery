import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

  const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup absolute z-[1] w-full h-full bg-[rgba(0,0,0,0.5)] grid '>
      <form className='login-popup-container place-self-center w-[330px] text-[808080] bg-white flex flex-col gap-6  py-6 px-8 rounded-lg text-[14px] animate-[fadeIn_0.5s] '>
        <div className='login-popup-title flex justify-between items-center text-black text-2xl font-semibold'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="Close" className='cursor-pointer w-4' />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
            {currState==="Login"?<></>:<input className='outline-none border-2 border-[#c9c9c9] p-2 rounded-md' type="text" placeholder='Your Name' required />}
            <input className='outline-none border-2 border-[#c9c9c9] p-2 rounded-md' type="email" placeholder='Your Email' required />
            <input className='outline-none border-2 border-[#c9c9c9] p-2 rounded-md' type="password" placeholder='Password' required />
        </div>
        <button className='border-none p-2 rounded-md text-white bg-[tomato] text-[15px] cursor-pointer '>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="lofin-popup-condition flex items-start gap-2 -mt-4">
            <input className='mt-[5px]' type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span className='text-[tomato] font-semibold cursor-pointer' onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span className='text-[tomato] font-semibold cursor-pointer' onClick={()=> setCurrState("Login")}>Login here</span></p>
        }
            
      </form>
    </div>
  )
}

export default LoginPopup