import React from 'react'
import bitmap from '../../assets/Bitmap.png'
import bitmap2 from '../../assets/Bitmap2.png'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'

function Index1() {
  return (
    <div className=' h-[70vh] w-full bg-blackcolor flex justify-center '>
        {/* <iframe src='https://my.spline.design/clonercubesgenerativecopy-5093a3cd14e1619e050f32913c8117eb/' frameborder='0' width='100%' height='100%'></iframe> */}
      <div className=" hidden lg:inline-block  w-full md:w-[90%] lg:w-[80%]">
      <div className=" h-[70vh] w-full bg-[] grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="h-[70vh] bg-[] hidden lg:inline-block">
            <div className="h-[70vh] flex items-center">
            <div className=" h-[300px] w-[400px] bg-[] flex flex-col items-center space-y-3 ">
            <h1 className=' text-[#F1F1F1] text-[17px]'>NEW PRODUCT</h1>

            <div className="text-[30px] md:text-[40px] text-white font-semibold">
                <h1>XX99 MARK11</h1>
                <h1>HEADPHONES</h1>
            </div>

            <div className=" md:hidden text-[16px] flex flex-col items-center text-white">
                <p>Experience natural, lifelike audio and </p>
                <span>exeptional build quality made for </span>
                <span>passionate music enthusiast</span>
            </div>
            <div className=" hidden md:inline-block">
            <div className=" md:text-[19px] flex flex-col items-center text-white">
                <p>Experience natural, lifelike audio and exeptional</p>
                <span>build quality made for passionate music</span>
                <span>enthusiast</span>
            </div>
            </div>
            <OrangeBtn
            label = 'SEE PRODUCT'
            
            />

            {/* <button className=' h-[40px] w-[140px] bg-btncolor hover:bg-btnactive text-white'>SEE PRODUCT</button> */}
        </div>
            </div>
            </div>
            <div className="h-[70vh] bg-[">
                <img src={bitmap} alt="" />
            </div>
        </div>
      </div>



      {/* PHONE DISPLAY */}
      <div className="h-[60vh] md:hidden w-full lg:hidden relative">
        <img src={bitmap2} alt="" />
        <div className=" h-[300px] w-[400px] bg-[] absolute top-[140px] md:top-[190px] md:left-[25%] flex flex-col items-center space-y-3 text-white">
            <h1 className=' text-[#F1F1F1] text-[17px]'>NEW PRODUCT</h1>

            <div className="text-[30px] md:text-[40px] font-semibold text-white">
                <h1>XX99 MARK11</h1>
                <h1>HEADPHONES</h1>
            </div>

            <div className=" md:hidden text-[16px] flex flex-col items-center text-white">
                <p>Experience natural, lifelike audio and </p>
                <span>exeptional build quality made for </span>
                <span>passionate music enthusiast</span>
            </div>
            <div className=" hidden md:inline-block">
            <div className=" md:text-[19px] flex flex-col items-center text-white">
                <p>Experience natural, lifelike audio and exeptional</p>
                <span>build quality made for passionate music</span>
                <span>enthusiast</span>
            </div>
            </div>

            <OrangeBtn
            label = 'SEE PRODUCT'
            
            />

            {/* <button className=' h-[40px] w-[140px] bg-btncolor hover:bg-btnactive text-white'>SEE PRODUCT</button> */}
        </div>
      </div>


      <div className="hidden md:inline-block md:h-[70vh] w-full lg:hidden relative bg-[url(assets/Bitmap.png)] bg-[120%,120%]">
        <img src={bitmap} alt="" />
        <div className=" h-[300px] w-[400px] bg-[] absolute top-[140px] md:top-[190px] md:left-[25%] flex flex-col items-center space-y-3 text-white">
            <h1 className=' text-[#F1F1F1] text-[17px]'>NEW PRODUCT</h1>

            <div className="text-[30px] md:text-[40px] font-semibold text-white">
                <h1>XX99 MARK11</h1>
                <h1>HEADPHONES</h1>
            </div>

            <div className=" md:hidden text-[16px] flex flex-col items-center text-white">
                <p>Experience natural, lifelike audio and </p>
                <span>exeptional build quality made for </span>
                <span>passionate music enthusiast</span>
            </div>
            <div className=" hidden md:inline-block">
            <div className=" md:text-[19px] flex flex-col items-center text-white">
                <p>Experience natural, lifelike audio and exeptional</p>
                <span>build quality made for passionate music</span>
                <span>enthusiast</span>
            </div>
            </div>
            <OrangeBtn
            label = 'SEE PRODUCT'
            
            />

            {/* <button className=' h-[40px] w-[140px] bg-btncolor hover:bg-btnactive text-white'>SEE PRODUCT</button> */}
        </div>
      </div>
    </div>
  )
}

export default Index1