import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/hphone (1).png'

function Headphone3() {
  return (
    <div className=''>

        <div className=" h-[600px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">


            <div className=" mt-11">
  


  <div className='font-semibold pt-1 text-[1.4rem]'>XX99 MARK I</div>
  <div className='font-semibold text-[1.4rem]'>HEADPHONES</div>
  <div className='pt-4 lg:w-[80%] text-gray-500'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionades alike in studios and on the go. </div>
<div className='mt-7'>
  <OrangeBtn
        label = 'SEE PRODUCT'
        
        />
        </div>
</div>


                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">

       <img src={img1} alt="" className='h-[250px] w-[300px] ml-20 mt-10'/>
    
                </div>


            
    
    
                  
                </div>
            </div>
        </div>
      





    
  )
}

export default Headphone3
