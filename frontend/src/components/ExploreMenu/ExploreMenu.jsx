import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu({ category, setCategory }) {
  return (
    <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
      <h1 className='text-[#262626] font-semibold text-3xl md:text-4xl'>Explore our menu</h1>
      <p className='explore-menu-text lg:max-w-[60%] max-w-[90%] text-sm md:text-base'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and
        elevate your dining experience, one delicious meal at a time.
      </p>
      <div
        className='explore-menu-list flex justify-between items-center gap-3 md:gap-7 text-center my-5 overflow-x-auto'
      >
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
              key={index}
              className='explore-menu-list-item shrink-0'>
              <img
                src={item.menu_image}
                alt=""
                className={`${
                  category === item.menu_name ? 'active' : ''
                } w-[7.5vw] lg:min-w-[60px] min-w-[90px] cursor-pointer rounded-full transition-[0.2s]`} />
              <p className="mt-2 text-[#747474] text-[12px] md:text-[16px] cursor-pointer">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className='my-2 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  );
}

export default ExploreMenu;