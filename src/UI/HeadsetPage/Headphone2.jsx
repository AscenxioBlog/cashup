import React from 'react'
import head2 from '../../assets/head2.png'
import head1 from '../../assets/head1.png'
import head3 from '../../assets/head3.png'
import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
import Index2 from '../CashUpHome/Index2'
import Index5 from '../CashUpHome/Index5'

function Headphone2() {

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
      
    </div>
  )
}

export default Headphone2
