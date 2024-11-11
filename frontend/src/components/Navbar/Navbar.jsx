import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState('Home');

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar lg:px-5 px-2 py-4 flex justify-between items-center'>
      <Link to='/'><img src={assets.logo} alt="" className='log0 lg:w-32 w-28' /></Link>
      <button className='block lg: focus:outline-none'>
        <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
          <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </button>
      {/* Menu items */}
      <ul className='navbar-menu hidden lg:flex gap-6 text-[#49557e] text-[15px] cursor-pointer '>
        <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a> 
        <a href='#footer' onClick={() => setMenu('Contact-us')} className={menu === 'Contact-us' ? 'active' : ''}>Contact us</a>
      </ul>
      {/* Right side of the navbar */}
      <div className='navbar-right relative flex items-center lg:gap-8 gap-4'>
        <img src={assets.search_icon} alt="" className='lg:w-6 lg:h-6 w-4' />
        <div className='navbar-search-icon flex items-center lg:gap-10 gap-4'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" className='lg:w-6 lg:h-6 w-4' /></Link>
          <div className={
                getTotalCartAmount() === 0
                  ? ""
                  : "dot absolute w-2 h-2 bg-red-700 border-2 border-tomato-700 rounded-full lg:-top-[1px] lg:right-[110px] top-[1px] right-[70px]"
              } >
          </div>
        </div>        
        <button onClick={() => setShowLogin(true)} className='bg-transparent border-2 border-tomato-700 lg:px-5 lg:py-2 px-3 py-2 leading-none rounded-[50px] cursor-pointer lg:text-[14px] text-[12px] text-[#49557e] transition-all duration-300 hover:bg-[#fff4f2]'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar;
