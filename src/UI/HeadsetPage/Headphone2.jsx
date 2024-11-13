import React from 'react'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/hphone (2).png'
function Headphone2() {
  return (
<<<<<<< HEAD
    <div className=' space-y-10 lg:space-y-20 mt-[70px]'>

        <div className=" min-h-[300px] w-full bg-[] flex justify-center ">
            <div className=" min-h-[350px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="h-[350px] bg-[#F1F1F1F1] rounded-[10px] p-5 flex justify-center items-center">
                 <div className=" h-[300px] w-[80%] ">
                 <img src={product1.image} alt="" />
                 </div>
=======
    <div className=''>

        <div className=" h-[620px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">
<img src={img1} alt="" className='h-[250px] w-[280px] ml-20 mt-7'/>
       
    
>>>>>>> 9982a317b2c6789f2b8508c612774ef4dd4dd32d
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
<<<<<<< HEAD
        </div>






        <div className=" min-h-[300px] w-full bg-[] flex justify-center">
            <div className=" min-h-[350px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 lg:grid-cols-2 gap-3">
              
             <div className=" hidden lg:inline-block">
             <div className=" h-[400px] md:h-[350px] bg-[] pl-[30px] text-center lg:text-start flex flex-col items-center space-y-7">
                  <p className=' text-btncolor'>NEW PRODUCT</p>

                  <h1 className=' text-[30px] w-[200px] uppercase font-medium'>{product2.name}</h1>

                  <p>{product2.description}</p>
                  <OrangeBtn
                  label='SEE PRODUCT'
                  />

                </div>
             </div>


                <div className="h-[350px] bg-[#F1F1F1F1] rounded-[10px] p-5 flex justify-center items-center ">
                 <div className=" h-[300px] w-[80%] ">
                 <img src={product2.image} alt="" />
                 </div>
                </div>

                <div className=" lg:hidden">
             <div className=" h-[400px] md:h-[350px] bg-[] pl-[30px] text-center lg:text-start flex flex-col items-center space-y-7">
                  <p className=' text-btncolor'>NEW PRODUCT</p>

                  <h1 className=' text-[30px] w-[200px] uppercase font-medium'>{product2.name}</h1>

                  <p>{product2.description}</p>
                  <OrangeBtn
                  label='SEE PRODUCT'
                  />

                </div>
             </div>

            </div>
        </div>









        <div className=" min-h-[300px] w-full bg-[] flex justify-center">
            <div className=" min-h-[350px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="h-[350px] bg-[#F1F1F1F1] rounded-[10px] p-5 flex justify-center items-center">
                 <div className=" h-[300px] w-[80%] ">
                 <img src={product3.image} alt="" />
                 </div>
                </div>
                <div className="h-[400px] md:h-[350px] bg-[] pl-[30px] text-center lg:text-start flex flex-col items-center space-y-7">
                  <p className=' text-btncolor'>NEW PRODUCT</p>

                  <h1 className=' text-[30px] w-[200px] uppercase font-medium'>{product3.name}</h1>

                  <p>{product3.description}</p>
                  <OrangeBtn
                  label='SEE PRODUCT'
                  />

                </div>
            </div>
        </div>

        <Index2/>
        <Index5/>
      
=======
>>>>>>> 9982a317b2c6789f2b8508c612774ef4dd4dd32d
    </div>
    
    
                  
                </div>
            </div>
        </div>
      





    
  )
}

export default Headphone2
