import React from 'react'
import oval from '../../assets/Oval.png'
import oval3 from '../../assets/Oval3.png'

function Headeset() {
  return (
    <div className=' min-h-[100vh] w-full bg-slate-600'>
      <div className=" h-[400px] w-[400px] bg-yellow-400 relative p-5 ">
        <img src={oval3} alt="" />
        <div className=" h-[350px] w-[360px] p-4 bg-[] absolute top-[20px] left-[5%]">
        <img src={oval3} alt="" />
      </div>

      </div>
     
    </div>
  )
}

export default Headeset
