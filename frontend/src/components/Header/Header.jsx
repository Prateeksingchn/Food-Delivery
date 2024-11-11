import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header lg:h-[33.6vw] h-[38.5vw] overflow-hidden my-8 mx-auto rounded-xl bg-cover relative bg-[url("/header_img.png")] '>
        <header className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] lg:bottom-[10%] left-[6vw] bottom-[25%] ">
            <h2 className='lg:text-[4.3vw] text=[4.5vw] leading-[1.2] text-white lg:font-semibold font-bold '>Order your favourite food here</h2>
            <p className='text-white hidden md:block lg:block text-[1vw] leading-[1.2]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='border-none text-[#747474] bg-white rounded-[50px] lg:text-[12px] text-[10px] font-semibold leading-none lg:py-2 py-1 lg:px-5 px-2 '>View Menu</button>
        </header>
    </div>
  )
}

export default Header