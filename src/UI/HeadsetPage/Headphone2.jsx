import React from 'react'
<<<<<<< HEAD
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
import img1 from '../../assets/hphone (2).png'
=======
import head2 from '../../assets/head2.png'
import head1 from '../../assets/head1.png'
import head3 from '../../assets/head3.png'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import Index2 from '../CashUpHome/Index2'
import Index5 from '../CashUpHome/Index5'

>>>>>>> 260ebe0a059ce23d1bc54d31068beb9d83e8f3be
function Headphone2() {

<<<<<<< HEAD
        <div className=" h-[620px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">
<img src={img1} alt="" className='h-[250px] w-[250px] ml-20 mt-8'/>
       
    
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
    
    
                  
=======
  const product1={
    image: head2,
    name:'XX99 Mark II Headphones',
    description:'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
  }

  const product2={
    image: head1,
    name:'XX99 Mark I Headphones',
    description:'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
  }

  const product3={
    image: head3,
    name:'XX59 Headphones',
    description:'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
  }

  return (
    <div className=' space-y-7 mt-[70px]'>

        <div className=" min-h-[300px] w-full bg-[] flex justify-center">
            <div className=" min-h-[350px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="h-[350px] bg-[#F1F1F1F1] rounded-[10px] p-5 flex justify-center items-center">
                 <div className=" h-[300px] w-[80%] ">
                 <img src={product1.image} alt="" />
                 </div>
                </div>
                <div className="h-[400px] md:h-[350px] bg-[] pl-[30px] text-center lg:text-start flex flex-col items-center space-y-7">
                  <p className=' text-btncolor'>NEW PRODUCT</p>

                  <h1 className=' text-[30px] w-[200px] uppercase font-medium'>{product1.name}</h1>

                  <p>{product1.description}</p>
                  <OrangeBtn
                  label='SEE PRODUCT'
                  />

>>>>>>> 260ebe0a059ce23d1bc54d31068beb9d83e8f3be
                </div>
            </div>
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

                <div className=" lg:inline-block">
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
      





    
  )
}

export default Headphone2
