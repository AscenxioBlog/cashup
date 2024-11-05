import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/hphone (2).png'
function Headphone2() {
  return (
    <div className=''>

        <div className=" h-[620px] lg:h-[450px] w-full bg-green-00 flex justify-center">
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
            </div>
        </div>
      





    
  )
}

export default Headphone2
