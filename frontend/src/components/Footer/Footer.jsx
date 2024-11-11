import React from 'react';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] mt-24 flex flex-col items-center gap-5 py-5 px-[8vw] pt-20' id='footer'>
      <div className='footer-content w-full grid xl:grid-cols-[2fr_1fr_1fr] gap-20 md:grid-cols-1 lg:grid-cols-[1fr_2fr_2fr] md:gap-10'>
        <div className="footer-content-left flex flex-col items-start gap-4 pt-10">
          <img className='w-[150px]' src={assets.logo} alt="" />
          <p className='text-sm  xl:w-[600px] lg:w-[350px] w-[230px]  md:w-[450px] '>Experience the future of convenience. 2024. Food Delivery. We connect you with your favorite restaurants, delivering fresh meals straight to your door. Order anything you crave, anytime. All rights reserved.</p>
          <div className='footer-social-icons flex items-center gap-4'>
            <img className='w-8 cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out' src={assets.facebook_icon} alt="" />
            <img className='w-8 cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out' src={assets.twitter_icon} alt="" />
            <img className='w-8 cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-4 md:mt-10 ">
          <h2 className='mb-3 text-[20px] font-semibold text-white'>COMPANY</h2>
          <ul>
            <li className='mb-[5px] hover:underline transition-all duration-300 ease-in-out'>Home</li>
            <li className='mb-[5px] hover:underline transition-all duration-300 ease-in-out'>About us</li>
            <li className='mb-[5px] hover:underline transition-all duration-300 ease-in-out'>Delivery</li>
            <li className='mb-[5px] hover:underline transition-all duration-300 ease-in-out'>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-4 md:mt-10 ">
          <h2 className='mb-3 text-[20px] font-semibold text-white'>GET IN TOUCH</h2>
          <ul>
            <li className='mb-[5px] hover:underline transition-all duration-300 ease-in-out'>+123 456 789</li>
            <li className='mb-[5px] hover:underline transition-all duration-300 ease-in-out'>contact@food_delivery.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] my-5 bg-[gray] border-none' />
      <p className="footer-copyright xl:w-full lg:w-[500px] w-[280px] md:w-[450px]  lg:text-start xl:text-start md:text-start text-center">Copyright © 2024. Tomato.com All rights reserved</p>
    </div>
  );
}

export default Footer;