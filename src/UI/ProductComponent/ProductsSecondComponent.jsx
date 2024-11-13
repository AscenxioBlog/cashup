import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
// import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent';
import CustomBtn from '../../ReusableComponent/CustonBtn';

function ProductsSecondComponent() {

  const products = [     
    {
      id: 1,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 630.00,
      Image: "http://unionagency.one/exzo/img/product-40.jpg",
      details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 2,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 630.00,
      Image: "http://unionagency.one/exzo/img/product-41.jpg",
      details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 3,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 704,
      Image: "http://unionagency.one/exzo/img/product-42.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 4,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 122,
      Image: "http://unionagency.one/exzo/img/product-43.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 5,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 122,
      Image: "http://unionagency.one/exzo/img/product-44.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 6,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-45.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 7,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-46.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 8,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-47.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor ",
    },

    {
      id: 9,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-48.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    // {
    //   id: 10,
    //   name: "SMARTPHONE VIBEX",
    //   category: "SMART PHONES",
    //   price: 321.00,
    //   Image: "http://unionagency.one/exzo/img/product-48.jpg",
    //    details: "Mollis nec consequat at in feugiat  mole stie tortor",
    // },

    // {
    //   id: 11,
    //   name: "SMARTPHONE VIBEX",
    //   category: "SMART PHONES",
    //   price: 321.00,
    //   Image: "http://unionagency.one/exzo/img/product-48.jpg",
    //    details: "Mollis nec consequat at in feugiat  mole stie tortor",
    // }
  ]


  return (
    <div>

        <div className='min-h-[100vh] grid grid-cols-1 lg:grid-cols-[25%,75%]'>
                    
                 <div className='w-[250px] hidden lg:block lg:ml-[86px] md:hidden'>
                      <div className='mt-20 '>
                         <b className='font-bold text-[23px]'>PRICE</b>
                      </div>

                      <div>
                         <input type="range" className='w-[220px] mt-5'/>

                         <h1 className='text-[gray]'>Price: <span className='font-medium text-[15px] text-black lg:text-[12px]'>$36-$231</span></h1>
                      </div>
                
                      <div className='mt-20 leading-9'>
                         <b className='font-bold text-[23px]'>BRANDS</b> <br />

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;LG</h1>

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;SAMSUNG</h1>

                         <h1 className='font-medium text-[gray]  text-[13px]'> <input type="checkbox"/>&nbsp;APPLE</h1>

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;HTC</h1>

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;LENOVO</h1>
                      </div>

                      <div className='mt-20 leading-9'>
                         <b className='font-bold text-[23px]'>POPULAR TAGS</b> <br />

                        
                          <div className='font-medium text-[11px] text-[gray] mt-3 grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3'>
                               <Link className=' flex items-center hover:text-MainBg'>SMARTPHONES</Link>
                               <Link  className=' flex items-center hover:text-MainBg'>WIRELESS</Link>
                               <Link className=' flex items-center hover:text-MainBg'>CASES</Link>
                               <Link className=' flex items-center hover:text-MainBg'>PROFESSIONAL</Link>
                               <Link className='flex items-center hover:text-MainBg'>NEW</Link>
                               <Link className=' flex items-center hover:text-MainBg'>BRANDS</Link>
                               <Link className=' flex items-center hover:text-MainBg'>GADGETS</Link>
                               <Link className=' flex items-center hover:text-MainBg'>REPLACEMENT</Link>
                               <Link className=' flex items-center hover:text-MainBg'>HEADPHONES</Link>
                          </div>
                      </div>

                  </div> 

                 <div className='min-h-[80vh] w-full gap-5 grid grid-cols-1 md:grid-cols-3 md:grid  lg:grid-cols-3 lg:mt-5 lg:w-[88%] lg:gap-12'>
                  {products.map((product) => (
                    <div key={product.id} className='h-[400px] w-[350px] border-l-[.2px]  border-[#8080802f] md:w-[250px] lg:h-[430px] relative cartView'>
                        <h1 className='ml-[35px] text-[12px] font-medium text-MainBg mt-6 lg:ml-[27px]'>{product.category}</h1>

                        <h1 className='font-bold text-[14px] ml-[35px] lg:ml-[27px]'>{product.name}</h1>

                        <img
                          src={product.Image}
                          className='object-cover rounded-lg mt-10 ml-[100px] md:ml-0 lg:ml-[40px]'
                      />

                    <h1 className=' ml-[35px] font-medium text-[gray] mt-6'>${product.price}</h1>

                    <p className=' ml-[35px] mt-3 text-[14px] text-[gray]'>
                         {product.details}
                    </p>

                     
                     
                    <section className='min-h-[400px] w-[355px] flex items-center justify-center flex-col absolute right-0 top-10 md:w-[250px] Popular-Product'>
                         <CustomBtn
                            backgroundColor = 'black'
                            label = 'LEARN MORE'
                            color = 'white'
                            borderRadius = '30px'
                            className = 'h-[50px] w-[190px] text-[12px] md:h-[50px] md:w-[150px] lg:h-[50px] lg:w-[150px] learnMore'
                         />

                         <CustomBtn               
                            backgroundColor = '#478CCF'
                            label= 'ADD TO CART'
                            color = 'white'
                            borderRadius = '30px'
                            className = 'h-[50px] w-[190px] text-[12px] md:h-[50px] md:w-[150px] lg:h-[50px] lg:w-[150px] addToCart'
                        />

                         <div className='h-[90px] w-[340px] flex bg-[#FFFF] p-6 absolute md:w-[250px] lg:w-[250px] justThere'>
                             <div className='flex items-center md:ml-10 lg:ml-7 gap-2'>
                                <div className='h-[40px] w-[40px] rounded-[50%] flex justify-center items-center border-[.2px]  border-[#8080802f] hover:bg-MainBg'><FaCartPlus/></div>
                                <div className='h-[40px] w-[40px] rounded-[50%] flex justify-center items-center border-[.2px]  border-[#8080802f] hover:bg-MainBg'><MdOutlineRemoveRedEye /></div>
                                <div className='h-[40px] w-[40px] rounded-[50%] flex justify-center items-center border-[.2px]  border-[#8080802f] hover:bg-MainBg'><FaRegHeart/></div>
                             </div>
                         </div>
                    </section>

                  </div>
                  ))}


                     {/* <div className='h-[80px] md:w-[760px] lg:w-[800px]'>
                        
                      </div>  */}

                  </div>
         </div>


                  <div className='h-[520px] w-[380px] font-bold grid grid-rows-10 mt-6 p-6 text-[13px] text-[gray] md:h-[600px] md:w-[760px] lg:h-[500px] lg:w-[250px] lg:ml-[86px] lg:hidden'>
                          <div>
                              <h1 className=' font-extrabold text-[18px] text-black'>POPULAR CATEGORIES</h1>
                          </div>

                          <Link className='border-b-[1px] border-[#8080802f]  text-center flex items-center'>LAPTOPS & COMPUTER</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>VIDEO & PHOTOS CAMERAS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>SMARTPHONES</Link>

                          <Link  className='border-b-[1px] border-[#8080802f] flex items-center'>TV & AUDIO</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>GADGETS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>CAR ELECTRONICS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>VIDEO & PHOTOS CAMERAS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>VIDEO GAMES & CONSOLE</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>SOFTWARE</Link>

                </div>


                <div className='w-[250px] lg:ml-[86px] p-6 lg:hidden '>
                      <div className='lg:mt-20'>
                         <b className='font-bold text-[23px]'>PRICE</b>
                      </div>

                      <div>
                         <input type="range" className='w-[350px] mt-5 md:w-[700px] lg:w-[220px] '/>

                         <h1 className='text-[gray]'>Price: <span className='font-medium text-[12px] text-black'>$36-$231</span></h1>
                      </div>
                
                      <div className=' mt-7 leading-[50px] lg:leading-9 lg:mt-20'>
                         <b className='font-bold text-[23px]'>BRANDS</b> <br />

                         <h1 className='font-medium text-[gray] text-[17px] lg:text-[13px]'> <input type="checkbox"/>&nbsp;LG</h1>

                         <h1 className='font-medium text-[gray] text-[17px] lg:text-[13px]'> <input type="checkbox"/>&nbsp;SAMSUNG</h1>

                         <h1 className='font-medium text-[gray] text-[17px] lg:text-[13px]'> <input type="checkbox"/>&nbsp;APPLE</h1>

                         <h1 className='font-medium text-[gray] text-[17px] lg:text-[13px]'> <input type="checkbox"/>&nbsp;HTC</h1>

                         <h1 className='font-medium text-[gray] text-[17px] lg:text-[13px]'> <input type="checkbox"/>&nbsp;LENOVO</h1>
                      </div>

                      <div className='leading-9 mt-7 lg:mt-20'>
                         <b className='font-bold text-[23px]'>POPULAR TAGS</b> <br />

                        
                          <div className='font-medium text-[15px] text-[gray] mt-3 grid grid-cols-1 md:w-[380%] md:grid md:grid-cols-3 md:text-[18px] lg:grid lg:grid-cols-3 lg:text-[11px]'>
                               <Link className=' flex items-center hover:text-MainBg'>SMARTPHONES</Link>
                               <Link  className=' flex items-center hover:text-MainBg'>WIRELESS</Link>
                               <Link className=' flex items-center hover:text-MainBg'>CASES</Link>
                               <Link className=' flex items-center hover:text-MainBg'>PROFESSIONAL</Link>
                               <Link className='flex items-center hover:text-MainBg'>NEW</Link>
                               <Link className=' flex items-center hover:text-MainBg'>BRANDS</Link>
                               <Link className=' flex items-center hover:text-MainBg'>GADGETS</Link>
                               <Link className=' flex items-center hover:text-MainBg'>REPLACEMENT</Link>
                               <Link className=' flex items-center hover:text-MainBg'>HEADPHONES</Link>
                          </div>
                      </div>
                  </div> 
    </div>
  )
}

export default ProductsSecondComponent