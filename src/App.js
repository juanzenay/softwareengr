import React from 'react'

import { Navbar } from './components'; //add in any components
import { Footer, Header } from './containers'; //adds in containers
//import { Datetime } from './pages'; //add in any pages
import Checkout from './pages/checkout/checkout.jsx';
import Datetime from './pages/datetime/Datetime.jsx';
import LoginPage from './pages/loginPage/loginPage.jsx';
import GuestInfo from './pages/guestInformation/guestInformation.jsx';
import ViewReservation from './pages/viewReservation/viewreservation.jsx';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import './App.css';

const App = () => {
  let navigate = useNavigate();

  return (
    <div classname = "App">
      <Routes>
        <Route path="/datetime" element={<Datetime navigate = {navigate}/>} />
        <Route path="/checkout" element={<Checkout navigate = {navigate}/>} />
        <Route path="/reservation" element={<ViewReservation navigate = {navigate}/>} />
        <Route path="/guestInfo" element = {<GuestInfo navigate = {navigate} />} />
        <Route path="/login" element = {<LoginPage navigate = {navigate} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  )
}

export default App