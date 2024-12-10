import React from 'react'
import { Link } from 'react-router-dom'
import Earphone3 from './Earphone3'
import Earphone4 from './Earphone4'

function Earphone2() {
  return (
    <div>
       <div className=" min-h-[120vh] w-full bg-[] grid grid-cols-1 lg:grid-cols-[27%,73%]">
        <div className="  order-2 lg:order-1  bg-[] flex flex-col items-end">
          <div className=" h-[80px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] flex justify-between items-center text-slate-300 text-[14px] ">
            <Link className=' hover:text-btncolor'>HOME</Link>
            <Link className=' hover:text-btncolor'>ACCESORIES</Link>
            <Link className=' hover:text-btncolor'>GADGETS</Link>
          </div>


          <div className=" h-[60px]  mt-3 font-bold w-[95%] md:w-[90%] lg:w-[80%] bg-[] flex justify-between items-center ">
          <p>POPULAR CATEGORIES</p>

          </div>

          <div className=" w-[95%] md:w-[90%] lg:w-[80%]">
            <Link>
            <div className="h-[60px] w-full bg-[] border-b-2 border-slate-300 hover:text-btncolor flex items-center font-bold text-[13px]">LAPTOPS & COMPUTER</div>
            </Link>

            <Link>
            <div className="h-[60px] w-full bg-[] border-b-2 border-slate-300  hover:text-btncolor flex items-center font-bold text-[13px]">LAPTOPS & COMPUTER</div>
            </Link>


            <Link>
            <div className="h-[60px] w-full bg-[] border-b-2 border-slate-300  hover:text-btncolor flex items-center font-bold text-[13px]">LAPTOPS & COMPUTER</div>
            </Link>


            <Link>
            <div className="h-[60px] w-full bg-[] border-b-2 border-slate-300  hover:text-btncolor flex items-center font-bold text-[13px]">LAPTOPS & COMPUTER</div>
            </Link>


            <Link>
            <div className="h-[60px] w-full bg-[] border-b-2 border-slate-300  hover:text-btncolor flex items-center font-bold text-[13px]">LAPTOPS & COMPUTER</div>
            </Link>

            <Link>
            <div className="h-[60px] w-full bg-[] border-b-2 border-slate-300  hover:text-btncolor flex items-center font-bold text-[13px]">LAPTOPS & COMPUTER</div>
            </Link>
          </div>


          <div className=" h-[250px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] flex flex-col justify-center space-y-3">

            <p className=' font-bold text-[20px]'>PRICE</p>
            <input type="range"  className=' text-black w-[80%]' />
            <div className="">
            <span className=' font-bold text-slate-300'>Price:</span><span className=' font-bold'> #100-#4000</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2  bg-[] md:pl-5">
            <Earphone3/>
            <Earphone4/>
        </div>
      </div>
    </div>
  )
}

export default Earphone2
