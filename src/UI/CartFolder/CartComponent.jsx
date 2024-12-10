import React, { useContext } from 'react';
import { AppContext } from '../../ContextFolder/MyContext';

function CartComponent() {
  const { viewcart, cartItems, incrementItem, decrementItem, removeFromCart,toggleCart } = useContext(AppContext);

  // Calculate total price based on the cart items
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price || 0) * (item.quantity || 0);
  }, 0);

  return (
    <div  onClick={toggleCart} style={{ display: viewcart }}>
      <div className="h-[100vh] absolute top-[100px] left-0 right-0 bottom-0 bg-[#00000045] flex justify-center md:justify-end  md:items-start md:pr-5 ">
       <div className="h-[480px]  w-[90%] md:w-[500px] lg:w-[360px]  bg-white">
       <div className=" h-[400px] w-full md:w-[500px] lg:w-[360px] bg-[]  rounded-lg  ">
        <div className="h-[400px] w-full md:w-[500px] lg:w-[360px] bg-[] md:mr-[50px] rounded-lg overflow-y-auto">
          {/* Cart Header */}
          <div className="h-[40px] w-full bg-[] flex justify-between items-center text-slate-300 pl-3 pr-3">
            <section>CART ({cartItems.length})</section>
            <button
              className="underline"
              onClick={() => cartItems.forEach(item => removeFromCart(item.id))}
            >
              Remove all
            </button>
          </div>

          {/* Cart Items */}
          <div className="min-h-[400px] w-full bg-[] pl-3 pr-3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[] min-h-[60px] grid grid-cols-[16%,49%,34%] text-black mb-2 rounded-md"
                >
                  {/* Product Image */}
                  <div className="bg-slate-300 flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[60px] w-[60px] rounded-md object-cover"
                    />
                  </div>
                  {/* Product Name and Price */}
                  <div className="flex flex-col justify-center pl-2">
                    <p>{item.name}</p>
                    {/* <p className="text-white">${(item.price * item.quantity).toFixed(2)}</p> */}
                  </div>
                  {/* Quantity Controls */}
                  <div className=" flex items-center justify-end w-full bg-[] ">
                   <div className="h-[40px] bg-slate-300 flex items-center rounded-[3px] space-x-2">
                   <button
                      aria-label="Decrease Quantity"
                      className="p-2 bg-gray-300 rounded-md"
                      onClick={() => decrementItem(item.id)}
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      aria-label="Increase Quantity"
                      className="p-2 bg-gray-300 rounded-md"
                      onClick={() => incrementItem(item.id)}
                    >
                      +
                    </button>
                    <button
                      aria-label="Remove Item"
                      className="p-2 bg-[] text-white rounded-md"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                   </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white py-10">Your cart is empty.</div>
            )}
          </div>
 
        
        </div>
         {/* Checkout Section */}
  <div className="pl-3 pr-3 h-[100px] bg-[white]  w-full md:w-[500px] lg:w-[360px]" style={{borderBottomRightRadius:'8px',borderBottomLeftRadius:'8px'}}>
            <div className="h-[40px] w-full bg-[] text-slate-300 flex justify-between items-center px-3">
              <span>TOTAL</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="h-[40px] w-full bg-btncolor text-white rounded-md">CHECKOUT</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default CartComponent;
