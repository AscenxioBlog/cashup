import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

function Index2() {
  return (
    <div className='mt-[80px] md:pt-0 min-h-[300px] pt-[50px] lg:pt-[50px] w-full bg-[] flex justify-center items-center'>
        <div className=" min-h-[200px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 md:grid-cols-3 gap-[80px] md:gap-6">
            <div className="h-[200px] bg-[#F1F1F1] rounded-[10px] flex items-end relative">
                <div className=" h-[100px] w-full bg-[] flex flex-col justify-between items-center">
                    <h1 className=' text-[20px] font-semibold'>HEADPHONES</h1>

                    <p className=' flex items-center'>SHOP<span className=' text-btncolor text-[30px]'><MdOutlineKeyboardArrowRight /></span></p>
                </div>

                <div className=" h-[150px] w-[130px] bg-[] absolute top-[-70px] left-[33%] md:left-[21%] lg:left-[30%]">
                    <img src={img1} alt="" />
                </div>
            </div>


            <div className="h-[200px] bg-[#F1F1F1] rounded-[10px] flex items-end relative">
            <div className=" h-[100px] w-full bg-[] flex flex-col justify-between items-center">
                    <h1 className=' text-[20px] font-semibold'>SPEAKERS</h1>

                    <p className=' flex items-center'>SHOP<span className=' text-btncolor text-[30px]'><MdOutlineKeyboardArrowRight /></span></p>
                </div>

                <div className=" h-[150px] w-[130px] bg-[] absolute top-[-70px] left-[33%] md:left-[21%] lg:left-[30%]">
                    <img src={img2} alt="" />
                </div>
            </div>



            <div className="h-[200px] bg-[#F1F1F1] rounded-[10px] flex items-end relative">
            <div className=" h-[100px] w-full bg-[] flex flex-col justify-between items-center">
                    <h1 className=' text-[20px] font-semibold'>EARPHONES</h1>

                    <button className=' flex items-center'>SHOP<span className=' text-btncolor text-[30px]'><MdOutlineKeyboardArrowRight /></span></button>
                </div>

                <div className=" h-[150px] w-[130px] bg-[] absolute top-[-70px] left-[33%] md:left-[21%] lg:left-[30%]">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Index2
