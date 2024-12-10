import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import MyContext from './ContextFolder/MyContext';

import AppContent from './AppContent';


function App() {

 
  return (
    <MyContext>
      <BrowserRouter>
       <AppContent/>
      </BrowserRouter>
    </MyContext>
  );
}

export default App;
