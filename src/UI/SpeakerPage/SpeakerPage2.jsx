import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/speaker (1).png'
function SpeakerPage2() {
  return (
    <div className=''>

        <div className=" h-[620px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">
<img src={img1} alt="" className='h-[320px] w-[270px] ml-20 mt-5'/>
       
    
                </div>


                <div className=" mt-11">
  

      <div className='text-yellow-500 text-[0.8rem]'>NEW PRODUCT</div>
      <div className='font-semibold pt-1 text-[1.4rem]'>ZX9</div>
      <div className='font-semibold text-[1.4rem]'>SPEAKERS</div>
      <p className='pt-4 lg:w-[80%] text-gray-500'>Upgrade your sound system with all new ZX9 active speakers. It is a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups. </p>
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

export default SpeakerPage2
