import React from 'react'
import bitmaplg from '../../assets/Bitmaplg.png'
import bitmapmd from '../../assets/Bitmapmd.png'
function Index5() {
  return (
    <div className=' min-h-[500px] w-full bg-green-400 flex justify-center items-center'>
      <div className=" min-h-[350px] w-[95%] bg-[orangered] md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-[350px] bg-purple-400"></div>
        <div className="h-[350px] bg-purple-400">
            <img src={bitmaplg} className=' md:hidden lg:inline-block' alt="" />
            <img src={bitmapmd} className='hidden md:inline-block lg:hidden' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Index5
