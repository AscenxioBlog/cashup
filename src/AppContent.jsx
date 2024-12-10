import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './UI/CashUpHome/Homepage';
import Headeset from './UI/HeadsetPage/Headeset';
import SpeakerPage from './UI/SpeakerPage/SpeakerPage';
import EarphoneComponent from './UI/EarphonePage/EarphoneComponent';
import CheckoutComponent from './UI/CheckoutPage/CheckoutComponent';
// import ProductDetails from './UI/ProductDetails/ProductDetails';
import HeaderComponent from './ConstantComponent/HeaderComponent';
import FooterComponent from './ConstantComponent/FooterComponent';
import MyContext from './ContextFolder/MyContext';
import ProductDteails from './UI/ProductDetails/ProductDteails';

import 'antd/dist/reset.css'; // Import Ant Design's reset styles
import Dashboard from './UI/AdminSection/Dashboard';
import AdminProfile from './UI/AdminSection/AdminProfile';
import AddProduct from './UI/AdminSection/AddProduct';
import AddStaff from './UI/AdminSection/AddStaff';
import ViewOrder from './UI/AdminSection/ViewOrder';
import ViewProduct from './UI/AdminSection/ViewProduct';
import ViewUser from './UI/AdminSection/ViewUser';
import ViewStaff from './UI/AdminSection/ViewStaff';
import IndexDashboard from './UI/AdminSection/IndexDashboard';

function AppContent() {
    const location = useLocation();

    // Hide Header and Footer for the admin dashboard route
    const hideHeaderFooter = 
    location.pathname === '/dashboard' || 
    location.pathname === '/dashboard/addproduct' ||
    location.pathname === '/dashboard/addstaff' ||
    location.pathname === '/dashboard/vieworder' ||
    location.pathname === '/dashboard/viewproduct' ||
    location.pathname === '/dashboard/viewuser' ||
    location.pathname === '/dashboard/viewstaff' ||
    location.pathname === '/dashboard/adminprofile';
  return (
    <div>
       {!hideHeaderFooter && <HeaderComponent />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphone" element={<Headeset />} />
          <Route path="/speaker" element={<SpeakerPage />} />
          <Route path="/earphone" element={<EarphoneComponent />} />
          <Route path="/checkout" element={<CheckoutComponent />} />
          <Route path="/product" element={<ProductDteails />} />
          <Route path="/dashboard" element={<Dashboard />} >
                <Route index element={<IndexDashboard/>}/>
                <Route path='/dashboard/addproduct' element={<AddProduct/>}/>
                <Route path='/dashboard/addstaff' element={<AddStaff/>}/>
                <Route path='/dashboard/vieworder' element={<ViewOrder/>}/>
                <Route path='/dashboard/viewproduct' element={<ViewProduct/>}/>
                <Route path='/dashboard/viewuser' element={<ViewUser/>}/>
                <Route path='/dashboard/viewstaff' element={<ViewStaff/>}/>
                <Route path='/dashboard/adminprofile' element={<AdminProfile/>}/>
          </Route>
          <Route path="*" element={<div className=' h-[100vh] bg-blackcolor w-full text-[30px] md:text-[40px] text-white flex justify-center items-center'><h1 className=' font-extrabold'>404 Page Not Found</h1></div>} />
        </Routes>
        {!hideHeaderFooter &&  <FooterComponent />}
       
    </div>
  )
}

export default AppContent
