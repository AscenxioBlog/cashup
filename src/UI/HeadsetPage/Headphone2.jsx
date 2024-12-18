import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/hphone (2).png'
import { Link } from 'react-router-dom'
import Headphone3 from './Headphone3'
import Headphone4 from './Headphone4'
function Headphone2() {
  return (
    <div className=''>

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
          <Headphone3/>
          <Headphone4/>
        </div>
      </div>










        {/* <div className=" h-[620px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">
<img src={img1} alt="" className='h-[250px] w-[280px] ml-20 mt-7'/>
       
    
                </div>


                <div className=" mt-11">
  

      <div className='text-yellow-500 text-[0.8rem]'>NEW PRODUCT</div>
      <div className='font-semibold pt-1 text-[1.4rem]'>XX91 MARK II</div>
      <div className='font-semibold text-[1.4rem]'>HEADPHONES</div>
      <div className='pt-4 lg:w-[80%] text-gray-500'>The new XX91 Mark II headphone is the pinnacle of pristine audio. it redefines your premium experience by reproducing the balanced depth and precision of studio-quality sound </div>
<div className='mt-7'>
      <OrangeBtn
            label = 'SEE PRODUCT'
            
            />
            </div>
           
    </div>
    
    
                  
                </div>
            </div> */}
        </div>
      





    
  )
}

export default Headphone2
