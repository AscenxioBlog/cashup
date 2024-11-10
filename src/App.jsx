import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './UI/CashUpHome/Homepage'
import Headeset from './UI/HeadsetPage/Headeset'
import SpeakerPage from './UI/SpeakerPage/SpeakerPage'
import EarphonePage from './UI/EarphonePage.jsx/EarphonePage'
import HeaderComponent from './ConstantComponent/HeaderComponent'
import FooterComponent from './ConstantComponent/FooterComponent'
import CheckOut1 from './UI/CheckoutPage/CheckOut1'
import CheckoutComponent from './UI/CheckoutPage/CheckoutComponent'

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route  path='/' element={<Homepage/>}/>
          <Route  path='/headphone' element={<Headeset/>}/>
          <Route  path='/speaker' element={<SpeakerPage/>}/>
          <Route  path='/earphone' element={<EarphonePage/>}/>
          <Route  path='/checkout' element={<CheckoutComponent/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App