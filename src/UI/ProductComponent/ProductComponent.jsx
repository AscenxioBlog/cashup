import React from 'react'
import ProductsFirstComponet from './ProductsFirstComponet'
import ProductsSecondComponent from './ProductsSecondComponent'
import ProductThirdComponet from './ProductThirdComponet'

function ProductComponent() {
  return (
    <div>
           <ProductsFirstComponet/>  
           <ProductsSecondComponent/>
           <ProductThirdComponet/>
    </div>
  )
}

export default ProductComponent