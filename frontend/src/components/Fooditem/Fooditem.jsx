import React, { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function Fooditem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item w-full m-auto rounded-2xl'>
      <div className='food-item-img-container relative'>
        <img
          className='food-item-image w-full rounded-tl-2xl rounded-tr-2xl'
          src={image}
          alt=""
        />
        {cartItems[id] > 0 ? (
          <div className='food-item-counter absolute bottom-4 right-4 flex items-center gap-2 md:gap-3 p-[4px] md:p-[6px] rounded-[50px] bg-white'>
            <img
              className='w-5 md:w-7'
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className='text-sm md:text-base'>{cartItems[id]}</p>
            <img
              className='w-5 md:w-7'
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        ) : (
          <img
            className='add w-6 md:w-9 absolute bottom-4 right-4 cursor-pointer rounded-full'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        )}
      </div>
      <div className='food-item-info px-4 md:px-5 py-3 md:py-4'>
        <div className='food-item-name-rating flex justify-between items-center mb-2'>
          <p className='text-base md:text-[20px]'>{name}</p>
          <img className='w-[50px] md:w-[70px]' src={assets.rating_stars} alt="" />
        </div>
        <p className='food-item-description text-[#676767] text-xs md:text-[15px]'>
          {description}
        </p>
        <p className='food-item-price text-[tomato] text-lg md:text-xl'>
          ${price}
        </p>
      </div>
    </div>
  );
}

export default Fooditem;