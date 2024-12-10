import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { FcHome } from "react-icons/fc";
import { Link, Outlet } from 'react-router-dom';
import { FaProductHunt } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { GrCentos } from "react-icons/gr";
import { IoIosBasket } from "react-icons/io";
import { SiMarketo } from "react-icons/si";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaDollarSign } from "react-icons/fa";


import Slider from "react-slick";
import devpics from '../../assets/devpics.jpg'

function Dashboard() {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        navigator:false,
        cssEase: "linear"
      };

    let [firstwidth,setFirstwidth]= useState(0)
    let [secondwidth,setSecondwidth]= useState('93%')
    let [smallwidth,setSmallwidth]= useState('0px')
    let [babywidth,setBabywidth]=useState('0')

   
    
    function viewnames() {
        if (firstwidth== 0 && secondwidth =='93%') {
        setFirstwidth('200px')
        setSecondwidth('80%')
        setSmallwidth('190px')
        setBabywidth('170px')
            
        } else{
        setFirstwidth(0)
        setSecondwidth('93%')
        setSmallwidth('0px')
        setBabywidth('0')



        }
    }

    // let[dailyview,setDailyview]

    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track visibility
    const [inputType, setInputType] = useState('password'); // Track input type
  
    const handleToggle = () => {
      setIsPasswordVisible((prev) => !prev);
      setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    };





    
  return (
    <div className=' h-[100vh] md:h-[140vh] lg:h-[100vh] w-full bg-[] flex overflow-x-hidden '>
        <div className=" h-[100vh] md:h-[140vh] lg:h-[100vh] min-w-[6%]  max-w-[23%] bg-btncolor text-white hidden lg:inline-block">
            <div className=" h-[80px] min-w-[70px] max-w-[270px] bg-btncolor flex  ">

            <div className="aa h-[60px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[50px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard' className=' text-[35px] flex justify-center items-center'><GrCentos /></Link></div>
                <Link><div className=" h-[50px]  flex items-center font-semibold cc" style={{width:smallwidth,transition:'1s'}}>Dashboard</div></Link>
            </div>
          
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end mt-3">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard' className=' text-[30px]'><FcHome /></Link></div>
                <Link to='/dashboard'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Dashboard</div></Link>
            </div>



            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end ">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/addproduct' className=' text-[30px]'><FaProductHunt /></Link></div>
                <Link to='/dashboard/addproduct'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Add Product</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/addstaff' className=' text-[30px]'><RiUserAddFill /></Link></div>
                <Link  to='/dashboard/addstaff'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Add Staff</div></Link>
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link  to='/dashboard/viewuser' className=' text-[30px]'><IoIosBasket /></Link></div>
                <Link to='/dashboard/viewuser'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>View All Order</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/viewproduct' className=' text-[30px]'><SiMarketo /></Link></div>
                <Link to='/dashboard/viewproduct'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>View All product</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px] flex items-center justify-center bb"> <Link to='/dashboard/viewuser' className=' text-[30px]'><FaUsersViewfinder /></Link></div>
                <Link to='/dashboard/viewuser'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>View All User</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/viewstaff' className=' text-[30px]'><FaUsersGear /></Link></div>
                <Link to='/dashboard/viewstaff'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>View All Staff</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/adminprofile' className=' text-[30px]'><IoSettings /></Link></div>
                <Link to='/dashboard/adminprofile'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Settings</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link className=' text-[30px]'><LiaSignOutAltSolid /></Link></div>
                <Link><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Log Out</div></Link>
            </div>
           
        </div>




        <div className=" h-[100vh] md:h-[140vh] lg:h-[100vh]  bg-[]" style={{width:secondwidth, transition:'1s'}}>
            <div className=" h-[50px] w-full bg-[] flex justify-between items-center">

                {/* small screen btn */}
                <button  className=" inline-block lg:hidden text-[30px]"><LuMenu /></button>

                {/* large screen btn */}
                <button onClick={viewnames} className=" hidden lg:inline-block text-[30px]"><LuMenu /></button>

                <div className=" h-[50px] w-[500px] bg-[] hidden lg:inline-block">
                <div className="slider-container  h-[50px] flex flex-col justify-center pt-4 text-btncolor">
      <Slider {...settings}>
        <div className=" h-[30px] flex items-center font-semibold "> YOU'RE</div>
        <div className=" h-[30px] flex items-center font-semibold "> WELCOME</div>
        <div className=" h-[30px] flex items-center font-semibold "> TO</div>
        <div className=" h-[30px] flex items-center font-semibold "> CASH UP </div>
        <div className=" h-[30px] flex items-center font-semibold "> DASHBOARD</div>
      </Slider>
    </div>
                </div>
                <div className=" h-[50px] w-[50px] bg-slate-800 rounded-[50%] overflow-hidden mr-3">
                    <img src={devpics} alt="" />
                </div>
            </div>



           <div className=" mini-h-[100px] w-[98%] mb-2 ">
           <div className=" mini-h-[80px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  pl-3">
                <div className=" h-[80px] bg-[white] rounded-[15px] flex " style={{boxShadow:'0 0 8px black'}}>
                    <div className=" h-[80px] w-[70%] bg-[] flex flex-col  pl-4">
                        <input type={inputType}  value={1234} readOnly  name="" id="" className=' h-[50px] w-[80%] bg-transparent font-extrabold text-[30px] mb-2 outline-none text-btncolor' />
                        <span className=' text-slate-400 '>Daily Views</span>
                    </div>
                    <div className=" h-[80px] w-[30%] bg-[] flex justify-center items-center text-[60px]">
                       <button onClick={handleToggle} className='text-slate-400'>
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>



                <div className=" h-[80px] bg-[white] rounded-[15px] flex " style={{boxShadow:'0 0 8px black'}}>
                    <div className=" h-[80px] w-[70%] bg-[] flex flex-col  pl-4">
                        <input type='text'  value={80} readOnly  name="" id="" className=' h-[50px] w-[80%] bg-transparent font-extrabold text-[30px] mb-2 outline-none text-btncolor' />
                        <span className=' text-slate-400 '>Users</span>
                    </div>
                    <div className=" h-[80px] w-[30%] bg-[] flex justify-center items-center text-[60px]">
                       <button  className='text-slate-400'>
                       <FaUsers />
                        </button>
                    </div>
                </div>



                <div className=" h-[80px] bg-[white] rounded-[15px] flex " style={{boxShadow:'0 0 8px black'}}>
                    <div className=" h-[80px] w-[70%] bg-[] flex flex-col  pl-4">
                        <input type='text'  value={400} readOnly  name="" id="" className=' h-[50px] w-[80%] bg-transparent font-extrabold text-[30px] mb-2 outline-none text-btncolor' />
                        <span className=' text-slate-400 '>Sales</span>
                    </div>
                    <div className=" h-[80px] w-[30%] bg-[] flex justify-center items-center text-[60px]">
                       <button  className='text-slate-400'>
                       <FaCartShopping />
                        </button>
                    </div>
                </div>



                 <div className=" h-[80px] bg-[white] rounded-[15px] flex " style={{boxShadow:'0 0 8px black'}}>
                    <div className=" h-[80px] w-[70%] bg-[] flex flex-col  pl-4">
                   <div className=" font-extrabold text-[30px] outline-none text-btncolor flex items-center"> <FaDollarSign /><input type='text'  value={8000} readOnly  name="" id="" className=' h-[50px] w-[80%] bg-transparent font-extrabold text-[30px] mb-2 outline-none text-btncolor' /></div>
                        <span className=' text-slate-400 '>Earning</span>
                    </div>
                    <div className=" h-[80px] w-[30%] bg-[] flex justify-center items-center text-[60px]">
                       <button  className='text-slate-400'>
                       <FcMoneyTransfer />
                        </button>
                    </div>
                </div>
            </div>
           </div>


            <div className=" h-[450px] md:h-[900px] lg:h-[450px]  w-full bg-[] overflow-y-scroll">
                <Outlet/>
            </div>

    
        </div>



      
    </div>
  )
}

export default Dashboard
