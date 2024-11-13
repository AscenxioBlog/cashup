import React from 'react'
import { useState } from 'react';

function CheckOut1() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: 'e-Money',
      eMoneyNumber: '',
      eMoneyPin: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  return (
    <div className='flex flex-col md:flex-row bg-gray-100 p-4 md:p-8 gap-8 w-full'>

            {/* Checkout Form Section */}
        <div className='bg-white p-6 md:p-10 rounded-lg shadow-lg w-full md:w-2/3'>
           <h2 className="text-2xl font-bold mb-6">CHECKOUT</h2>

           <div>
                 <h3 className=" font-medium text-[13px] mb-4 text-btncolor">BILLING DETAILS</h3>
                 <div className='grid gap-4 md:grid-cols-2'>
                      <div>
                           <label className='font-medium text-[15px]'>Name</label>
                           <input
                              type='text'
                              name='name'
                              placeholder='Alexei Ward'
                              value={formData.name}
                              onChange={handleChange}
                              className='border border-gray-300 font-medium text-[13px] rounded-md p-2 mt-2 h-[45px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor'
                           />
                      </div>

                      <div>
                           <label className='font-medium text-[15px]'>Email Address</label>
                           <input
                              type='email'
                              name='email'
                              placeholder='alexei@mail.com'
                              value={formData.email}
                              onChange={handleChange}
                              className='border border-gray-300 rounded-md p-2 mt-2 h-[45px] font-medium text-[13px] w-full focus:outline-none focus:ring-1 focus:border-btncolor focus:ring-btncolor'
                           />
                      </div>

                      <div>
                           <label className='font-medium text-[15px]'>Phone Number</label>
                           <input
                              type='tel'
                              name='phone'
                              placeholder='+1 202-555-0136'
                              value={formData.phone}
                              onChange={handleChange}
                              className='border border-gray-300 rounded-md font-medium text-[13px] p-2 mt-2 h-[45px] w-full col-span-2 focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor'
                           />
                      </div>
                 </div>
           </div>

             {/* Shipping Info */}
        <div className='mt-6'>
            <h1 className=" font-medium mb-4 text-[13px] text-btncolor">SHIPPING INFO</h1>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                   <div className=' md:col-span-2'>
                       <label className='font-medium text-[15px]'>Address</label>
                           <input 
                              type='text'
                              name='address'
                              placeholder='1137 Williams Avenue'
                               value={formData.address}
                              onChange={handleChange}
                              className='border border-gray-300 font-medium text-[13px] rounded-md mt-2 p-2 h-[45px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor'
                           />
                   </div>

                   <div>
                        <label className='font-medium text-[15px]'>ZIP Code</label>
                           <input
                              type='text'
                              name='zipCode'
                              placeholder='1001'
                              value={formData.zipCode}
                              onChange={handleChange}
                              className='border border-gray-300 rounded-md mt-2 p-2 h-[45px] font-medium text-[13px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor'
                           />
                   </div>

                   <div>
                         <label className='font-medium text-[15px]'>City</label>
                         <input 
                           type="text" 
                           name='city'
                           placeholder='New York'
                           value={formData.city}
                           onChange={handleChange}
                           className='border border-gray-300 rounded-md mt-2 font-medium text-[13px] p-2 h-[45px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor'
                        />
                   </div>

                   <div>
                         <label className='font-medium text-[15px]'>Country</label>
                         <input
                          type="text"
                          name='country'
                          placeholder='United States' 
                          value={formData.country}
                          onChange={handleChange}
                          className='border border-gray-300 rounded-md mt-2 p-2 font-medium text-[13px] h-[45px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor'
                        />
                   </div>
            </div>
        </div>

                {/* Payment Details */}
            <div className='mt-6'>
                <h1 className='font-medium text-[13px] mb-4 text-btncolor'>PAYMENT DETAILS</h1>

                <div className='grid gap-4'>
                  <h3 className="text-[15px] font-medium mb-4">Payment Details</h3>
                     <div className='flex justify-center pr-14'>
                     <input
                        type="radio"
                        name="paymentMethod"
                        value="e-Money"
                        checked={formData.paymentMethod === 'e-Money'}
                        onChange={handleChange}
                        className="mr-2 accent-btncolor"
                     />
                     <label className='font-medium'>e-Money</label>
                     </div>

                     <div className="flex  justify-center">
                        <input
                           type="radio"
                           name="paymentMethod"
                           value="Cash on Delivery"
                           checked={formData.paymentMethod === 'Cash on Delivery'}
                           onChange={handleChange}
                           className="mr-2 accent-btncolor"
                        />
                        <label className='font-medium'>Cash on Delivery</label>
                     </div>

               {
                   formData.paymentMethod === 'e-Money' && (
                       <div className="grid gap-4 md:grid-cols-2">
                           <input
                              type="text"
                              name="eMoneyNumber"
                              placeholder="e-Money Number"
                              value={formData.eMoneyNumber}
                              onChange={handleChange}
                              className="border border-gray-300 rounded-md p-2 font-medium text-[13px] h-[45px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor"
                           />
                           <input
                              type="text"
                              name="eMoneyPin"
                              placeholder="e-Money PIN"
                              value={formData.eMoneyPin}
                              onChange={handleChange}
                              className="border border-gray-300 rounded-md p-2 font-medium text-[13px] h-[45px] w-full focus:outline-none focus:border-btncolor focus:ring-1 focus:ring-btncolor"
                           />
                      </div>
                  )
               }
                </div>
            </div>

            <div>
                 <div></div>
                 <div>
                      
                 </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut1