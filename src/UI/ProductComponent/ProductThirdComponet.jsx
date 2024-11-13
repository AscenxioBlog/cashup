import React from 'react'

function ProductThirdComponet() {
   const HotSale = [
    {
        id: 1,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-28.jpg"
    },

    {
        id: 2,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-31.jpg"
    },

    {
        id: 3,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-34.jpg"
    },

    {
        id: 4,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-37.jpg"
    },

    {
        id: 5,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-29.jpg"
    },

    {
        id: 6,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-32.jpg"
    },

    {
        id: 7,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-35.jpg"
    },

    
    {
        id: 8,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-38.jpg"
    },

    {
        id: 9,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-30.jpg"
    },

    {
        id: 10,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-33.jpg"
    },

    {
        id: 11,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-36.jpg"
    },

    {
        id: 12,
        category: "WIRELESS HEADPHONE",
        connection: "Wireless",
        price: 121.00,
        Image: "http://unionagency.one/exzo/img/product-39.jpg"
    },

   ]

  return (
    <>
        <div className='mt-12 lg:mt-32'>
        <div className='h-[50px] mx-32 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
            <p className='font-extrabold text-[17px] flex items-end'>HOT SALE</p>
            <p className='font-extrabold text-[17px] flex items-end'>TOP RATED</p>
            <p className='font-extrabold text-[17px] flex items-end'>POPULAR</p>
            <p className='font-extrabold text-[17px] flex items-end'>BEST CHOICE</p>
        </div>

        <div className='min-h-[100px] mx-32 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
                    {HotSale.map((product) => (
                            <div  className='h-[100px] grid mt-5 grid-rows-1 md:grid md:grid-rows-3 lg:grid lg:grid-rows-3'>
                            <div className='h-[100px] grid grid-cols-[40%,60%]'>
                                <div className=''>

                                     <div className='h-[80px] w-[80px] rounded-lg border-[.2px] border-[#8080802f] hover:border-MainBg'>
                                          
                                         <img src={product.Image} width='100%' height='100%' className='object-cover rounded-lg'/>
                                  
                                     </div>
                                

                                </div>

                                <div className='leading-6'>
                                    <p className='text-[14px] font-medium text-MainBg'>{product.connection}</p>
           
                                    <b className='font-bold text-[13px] leading-0'>
                                        {product.category}
                                    </b>
           
                                    <p className='font-medium text-[11px]'>${product.price}.00</p>
                                </div>
                            </div>
                            </div>
                    ))}

        </div>
    </div>
    </>
  )
}

export default ProductThirdComponet