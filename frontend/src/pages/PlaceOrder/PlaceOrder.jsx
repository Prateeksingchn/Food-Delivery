import React, {useContext} from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/StoreContext'

function PlaceOrder() {

     const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order flex items-start justify-between gap-12 mt-24' action="">
      <div className="place-order-left w-full max-w-[500px] ">
          <p className="title text-[30px] font-semibold mb-[50px] ">Delivery Information</p>
          <div className="multi-fields flex gap-3">
            <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Fisrt Name' />
            <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Last Name' />
          </div>
          <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Email address' />
          <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Street' />
          <div className="multi-fields flex gap-3">
            <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='City' />
            <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='State' />
          </div>
          <div className="multi-fields flex gap-3">
            <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Zip code' />
            <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Country' />
          </div>
          <input className='mb-[15px] w-full py-2 px-2 border-2 border-[#c5c5c5] rounded-md outline-[tomato] ' type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right w-full max-w-[500px]  ">
          <div className="cart-total flex flex-col flex-1">
                <h2 className="text-[30px] font-semibold mb-6">Cart Total</h2>
                <div>
                    <div className="cart-total-details flex justify-between text-[#555] ">
                      <p>Subtotal</p>
                      <p>${getTotalCartAmount().toFixed(2)}</p>
                    </div>
                    <hr className="my-[10px]" />
                    <div className="cart-total-details flex justify-between text-[#555] ">
                      <p>Delivery Fee</p>
                      <p>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr className="my-[10px]" />
                    <div className="cart-total-details flex justify-between text-[#555] ">
                      <b>Total</b>
                      <b>${(getTotalCartAmount()===0?0:getTotalCartAmount() + 2).toFixed(2)}</b>
                    </div>
                </div>
                <button className='border-none text-white bg-[tomato] w-[260px] py-3 mt-8 rounded-md cursor-pointer'>PROCEED TO PAYMENT</button>
            </div>
      </div>
    </form>
  )
}

export default PlaceOrder