import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import CartComponent from '../UI/CartFolder/CartComponent';
import { AppContext } from '../ContextFolder/MyContext';

function HeaderComponent() {
  const { toggleCart } = useContext(AppContext);

  return (
    <div className='  box-border h-[100px] w-full bg-blackcolor flex justify-center text-white fixed top-0 z-20'>
      <nav className=' h-[70px] w-full md:w-[90%] lg:w-[80%] bg-blackcolor grid grid-cols-[60%,40%]  md:grid-cols-[20%,80%] lg:grid-cols-2 gap-3' style={{borderBottom:'1px solid #979797'}}>
          <section className=" bg-[] flex justify-between items-center pl-3">
            <button className=' lg:hidden'><IoMdMenu /></button>
            <h1 className=' text-[20px] font-semibold'>CASHUP</h1>

            <div className="hidden lg:inline-block">
            <div className=" flex gap-3 font-semibold ">
              <Link to='/'>HOME</Link>
              <Link to='/headphone'>HEADPHONES</Link>
            </div>
            </div>
           
          </section>
          <section className=" bg-[] pr-3 flex justify-end items-center lg:justify-between">
         <div className=" hidden lg:inline-block">
         <div className="flex gap-3 font-semibold">
              <Link to='/speaker'>SPEAKERS</Link>
              <Link to='/earphone'>EARPHONES</Link>
            </div>
         </div>

            <button onClick={toggleCart} className='font-semibold text-[25px] mr-3'><IoCartOutline />
            </button>
          </section>
      </nav>
            <CartComponent/>
      
    </div>
  )
}

export default HeaderComponent
