import React from 'react'
import ProductD1 from './ProductD1'
import ProductD2 from './ProductD2'

function ProductDteails() {
  return (
    <div>
      <div className=" h-[200px] w-full bg-blackcolor flex justify-center items-center text-white font-bold text-[30px] mt-[80px]">
        <h1>PRODUCT DETAILS</h1>
      </div>
        <ProductD1/>
        <ProductD2/>
    </div>
  )
}

export default ProductDteails