import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/hphone (3).png'
function Headphone4() {
  return (
    <div className=''>

        <div className=" h-[620px]  lg:h-[430px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">
<img src={img1} alt="" className='h-[250px] w-[300px] ml-20 mt-8'/>
       
    
                </div>


                <div className=" mt-11">
  

      <div className='font-semibold pt-1 text-[1.4rem]'>XX59</div>
      <div className='font-semibold text-[1.4rem]'>HEADPHONES</div>
      <div className='pt-4 lg:w-[81%] text-gray-500'>Enjoy your audio almost anywhere and customize it to your specific taste with the XX59 headphones. The stylish yet durable versatile is a wireless headset is a brilliant companion at home or on the move. </div>
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

export default Headphone4
