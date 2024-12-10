import React from 'react'
import { Link } from 'react-router-dom'
import aa from '../../assets/aa.jpg'
import bb from '../../assets/bb.jpg'
import cc from '../../assets/cc.jpg'
import dd from '../../assets/dd.jpg'
import devpics from '../../assets/devpics.jpg'


function IndexDashboard() {

    const order=[
        {
            id:1,
            name:'Star Refrigerator',
            price:'1200',
            payment:'paid',
            status:'Delivered'
        },

        {
            id:2,
            name:'Dell Laptop',
            price:'110',
            payment:'paid',
            status:'Pending'
        },

        {
            id:3,
            name:'Apple Watch',
            price:'1200',
            payment:'paid',
            status:'Delivered'
        },


        {
            id:4,
            name:'Jbl Headset',
            price:'1500',
            payment:'paid',
            status:'Pending'
        },



        {
            id:5,
            name:'Sony Headset',
            price:'2000',
            payment:'paid',
            status:'Delivered'
        },


        {
            id:6,
            name:'Jbl Headset',
            price:'1500',
            payment:'paid',
            status:'Pending'
        }
    ]

    const customer=[
        {
            id:1,
            image:aa,
            name:'Dan elliot',
            mail:'elliot@gmail.com'
        },

        {
            id:2,
            image:bb,
            name:'Gundogan',
            mail:'Gundogan@gmail.com'
        },

        {
            id:3,
            image:cc,
            name:'Ajax',
            mail:'Ajax@gmail.com'
        },

        {
            id:4,
            image:dd,
            name:'Thiago',
            mail:'Thiago@gmail.com'
        },

        {
            id:5,
            image:devpics,
            name:'Paulo',
            mail:'Paulo@gmail.com'
        }
    ]
  return (
    <div  className=' min-h-[100vh] bg-[] grid grid-cols-1 lg:grid-cols-[68%,30%] gap-2 pt-2 pl-2'>
        <div className=" bg-[] pl-1 pr-1 lg:pl-3 lg:pr-3 rounded-[10px]" style={{boxShadow:'0 0 7px black'}}>
            <div className=" h-[50px] w-full bg-[] flex justify-between items-center">
                <span className=' text-btncolor font-semibold  text-[20px]'>Recents Order</span>
                <Link><button className=' h-[30px] w-[80px] font-medium rounded-[10px] bg-btncolor text-white'>View All</button></Link>
            </div>

            <div className="">
                <div className=" h-[50px] w-full  flex pb-1 font-semibold " style={{borderBottom:'1px solid gray'}}>
                    <div className=" h-[50px] w-[40%]  flex items-end">Name</div>
                    <div className=" h-[50px] w-[20%]  flex items-end">Price</div>
                    <div className=" h-[50px] w-[20%]  flex items-end">Payment</div>
                    <div className=" h-[50px] w-[40%]  flex justify-end items-end">Status</div>
                </div>


                {
                    order.map((item)=>(
                        <div key={item.id} className=" h-[50px] w-full  flex pb-1 " style={{borderBottom:'1px solid gray'}}>
                        <div className=" h-[50px] w-[40%]  flex items-center">{item.name}</div>
                        <div className=" h-[50px] w-[20%]  flex items-center">${item.price}</div>
                        <div className=" h-[50px] w-[20%] flex items-center">{item.payment}</div>
                        <div className=" h-[50px] w-[40%]  flex justify-end items-center">{item.status}</div>
                    </div>   
                    ))
                }
               
            </div>
        </div>
        <div className=" bg-[] rounded-[10px] "  style={{boxShadow:'0 0 7px black'}}>
            <div className=" h-[50px] w-full bg-[] flex items-center text-btncolor text-[1.2rem]">
                <h1 className=' font-semibold'>Recent Customer</h1>
            </div>

            {
                customer.map((customers)=>(
                    <div key={customers.id} className=" h-[60px] w-full bg-[] flex justify-between  items-center mt-2">
                <div className=" h-[60px] w-[60px] bg-[] rounded-[50%] overflow-hidden">
                    <img src={customers.image} alt="" />
                </div>
                <div className=" h-[50px] w-[30%] bg-[] flex justify-center items-center">{customers.name}</div>
                <div className=" h-[50px] w-[50%] bg-[] flex justify-center items-center">{customers.mail}</div>
            </div>
                ))
            } 
        </div>
    </div>
  )
}

export default IndexDashboard