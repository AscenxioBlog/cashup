import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function FooterComponent() {
  return (
    <div className=' min-h-[350px] w-full bg-blackcolor mt-8 pl-[40px] pr-[40px]'>
        <div className="  h-[5px] w-full bg-black flex justify-center md:justify-start mb-[30px]">
            <div className="h-[5px] w-[120px] md:w-[150px] bg-btncolor "></div>
        </div>
        <div className=" lg:hidden text-center md:text-start flex flex-col gap-6 ">
            <h1 className=' text-white font-bold'>CASHUP</h1>

            <section className=" min-h-[80px] bg-[] w-full flex flex-col items-center md:flex-row gap-[50px] text-white">
                <Link><div className=" hover:text-btncolor">HOME</div></Link>
                <Link><div className=" hover:text-btncolor">HEDPHONES</div></Link>
                <Link><div className=" hover:text-btncolor">SPEAKERS</div></Link>
                <Link><div className=" hover:text-btncolor">EARPHONES</div></Link>
            </section>

            <section className=" h-[150px] w-full bg-[] text-center md:text-start text-[#979797]">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </section>

            <section className=" h-[80px] w-full flex flex-col md:flex-row justify-between items-center ">
                <span className='text-[#979797]'>Copyright 2021. All Rights Reserved</span> <span className=' flex gap-6 text-[30px] text-white '><FaFacebookSquare  className=' hover:text-btncolor cursor-pointer'/>  <FaTwitter className=' hover:text-btncolor cursor-pointer' />  <FaInstagram className=' hover:text-btncolor cursor-pointer' /></span>
            </section>
        </div>



        <div className=" hidden lg:inline-block">
        <div className=" text-center md:text-start ">
           <div className=" h-[100px] w-full bg-[]  flex justify-between items-center">
                <h1 className=' text-white font-bold'>CASHUP</h1>

                <section className=" min-h-[80px] bg-[] flex flex-col items-center md:flex-row gap-[50px] text-white">
                    <Link><div className="hover:text-btncolor">HOME</div></Link>
                    <Link><div className="hover:text-btncolor">HEDPHONES</div></Link>
                    <Link><div className="hover:text-btncolor">SPEAKERS</div></Link>
                    <Link><div className="hover:text-btncolor">EARPHONES</div></Link>
                </section>
           </div>

            <section className=" h-[150px] w-full bg-[]   text-[#979797] flex justify-between items-end">
                <div className=" w-[40%]">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                </div>
                <span className=' flex gap-6 text-[30px] text-white '><FaFacebookSquare  className=' hover:text-btncolor cursor-pointer'/>  <FaTwitter className=' hover:text-btncolor cursor-pointer' />  <FaInstagram className=' hover:text-btncolor cursor-pointer' /></span>

            </section>

            <section className=" h-[80px] w-full  mt-8 ">
            <span className='text-[#979797]'>Copyright 2021. All Rights Reserved</span> 
            </section>
        </div>

        </div>
    </div>
  )
}

export default FooterComponent