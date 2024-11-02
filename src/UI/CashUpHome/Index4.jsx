import React from 'react'
import bitmap1 from '../../assets/Bitmap1.png'
import bitmap4 from '../../assets/Bitmap4.png'
import earphone1 from '../../assets/earphone1.jpg'
import BlackBtn from '../../ReusableComponent/ButtonFolder/BlackBtn'
import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'

function Index4() {
    const myvalue = {
        image1: bitmap1,
        image2: bitmap4,
        title: 'Z7X SPEAKER'

    }

    const earphone = {
        image:earphone1,
        title: 'YX1 EARPHONES'
    }
  return (
    <div className="">
        <div className=' h-[250px] w-full bg-[] mt-[50px]  flex justify-center '>
        <div className=" h-[250px] w-[95%] md:w-[90%]  lg:w-[80%] rounded-[10px] overflow-hidden  relative">
        <img src={myvalue.image1} height='100%' width='100%' alt="" className='hidden md:inline-block' />
        <img src={myvalue.image2} height='100%' width='100%' alt="" className=' md:hidden' />

        <div className=" absolute top-[100px]  w-[200px] bg-[] left-[10px] md:left-[80px] lg:left-[120px] space-y-5">
            <h1 className='font-semibold  text-[25px]'>{myvalue.title}</h1>
            <WhiteBtn
            label='SEE PRODUCT'
            />
            {/* <button className=' h-[45px] w-[150px] bg-transparent hover:bg-blackcolor hover:text-white ' style={{border:'1px solid black'}}>SEE PRODUCT</button> */}
        </div>
        </div>
        {/* <div className="bg-green-100"></div>
        <div className="bg-green-400"></div> */}
      
    </div>



    <div className=" min-h-[300px]  mt-[50px] w-full bg-[] flex justify-center">
       <div className=" min-h-[200px] md:h-[250px] w-[95%] bg-[] md:w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
       <div className="h-[250px]  bg-[]">
       <img src={earphone.image} height='100%' width='100%' alt="" />

       </div>
       <div className="h-[250px] flex flex-col justify-center gap-[40px] rounded-[10px] pl-[50px] bg-[#F1F1F1]">
        <p>{earphone.title}</p>
        <WhiteBtn
            label='SEE PRODUCT'
         />
        {/* <button className=' h-[45px] w-[150px] bg-transparent hover:bg-blackcolor hover:text-white ' style={{border:'1px solid black'}}>SEE PRODUCT</button> */}

       </div>
       </div>
    </div>
    </div>
  )
}

export default Index4
