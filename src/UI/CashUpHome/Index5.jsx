import React from 'react'
import bitmaplg from '../../assets/Bitmaplg.png'
import bitmapmd from '../../assets/Bitmapmd.png'
function Index5() {
  return (
    <div className=' min-h-[500px] w-full bg-[] flex justify-center items-center'>
      <div className=" min-h-[350px] w-[95%] bg-[] md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="h-[350px] bg-purple-400 lg:hidden">
            <img src={bitmaplg} className=' md:hidden lg:inline-block' alt="" />
            <img src={bitmapmd} className='hidden md:inline-block lg:hidden' alt="" />
        </div>


        <div className="min-h-[350px] bg-[] flex items-center justify-center lg:justify-start">
            <div className=" min-h-[250px] md:w-[85%] bg-[]    text-center lg:text-start">
            <h1 className=' text-[25px]   font-semibold md:hidden'>BRINGING YOU THE <br /> <span className='text-btncolor'>BEST</span>   AUDIO GEAR</h1>
            <h1 className=' text-[20px]  md:text-[35px] font-semibold hidden md:inline-block lg:hidden'>BRINGING YOU THE <span className='text-btncolor'>BEST</span>  <br />  AUDIO GEAR</h1>
            <h1 className=' text-[20px]  md:text-[35px] font-semibold hidden lg:inline-block'>BRINGING YOU THE <br /> <span className='text-btncolor'>BEST</span>   AUDIO GEAR</h1>

            <p className=' p-3 md:p-0'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
           
            </div>
        </div>

        <div className="h-[350px] bg-purple-400 hidden lg:inline-block">
            <img src={bitmaplg} className=' md:hidden lg:inline-block' alt="" />
            <img src={bitmapmd} className='hidden md:inline-block lg:hidden' alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Index5
