import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart mt-[100px] ">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[grey] text- ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item my-[10px] text-black">
                  <img className="xl:w-14 w-12 " src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cross cursor-pointer ">
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none " />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[60px] lg:flex lg:flex-row flex flex-col-reverse  justify-between gap-[60px] ">

        {/* Total Amount */}
        <div className="cart-total flex flex-col flex-1">
            <h2 className="text-[20px] font-semibold mb-6">Cart Total</h2>
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
            <button onClick={()=>navigate('/order')} className='border-none text-white bg-[tomato] w-[260px] py-3 mt-8 rounded-md cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promocode */}
        <div className="cart-promocode xl:flex-1 lg:flex-1  justify-start lg:py-14 ">
          <p className="text-[#555]  ">If you have promo code, Enter it here</p>
          <div className="cart-promocode-input mt-3 flex justify-between items-center bg-[#eaeaea] rounded-md ">
            <input
              className="bg-transparent border-none outline-none pl-2"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[150px] py-3 px-1 bg-black border-none text-white rounded-md ">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
