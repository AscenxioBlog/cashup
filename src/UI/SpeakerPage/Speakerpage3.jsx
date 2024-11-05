import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/speaker (2).png'

function SpeakerPage3() {
  return (
    <div className=''>

        <div className=" h-[600px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">


            <div className=" mt-11">
  


  <div className='font-semibold pt-1 text-[1.4rem]'>ZX7</div>
  <div className='font-semibold text-[1.4rem]'>SPEAKERS</div>
  <p className='pt-4 lg:w-[77%] text-gray-500'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophiles components that represents the top of the line powered speakers for home or studio use.  </p>
<div className='mt-7'>
  <OrangeBtn
        label = 'SEE PRODUCT'
        
        />
        </div>
</div>


                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">

       <img src={img1} alt="" className='h-[250px] w-[170px] ml-36 mt-10'/>
    
                </div>


            
    
    
                  
                </div>
            </div>
        </div>
      





    
  )
}

export default SpeakerPage3
