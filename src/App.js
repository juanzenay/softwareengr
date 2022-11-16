import React from 'react'

import { Navbar } from './components'; //add in any components
import { Footer, Header } from './containers'; //adds in containers
import { Datetime } from './pages'; //add in any pages
import Checkout from './pages/checkout/checkout.jsx';
import ViewReservation from './pages/viewReservation/viewreservation.jsx';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import './App.css';

const App = () => {
  let navigate = useNavigate();

  return (
    <div classname = "App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div >
        <Footer />
				<Routes>
					<Route path="/" element={<Datetime navigate = {navigate}/>} />
					<Route path="/checkout" element={<Checkout navigate = {navigate}/>} />
					<Route path="/reservation" element={<ViewReservation navigate = {navigate}/>} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
        
    </div>
  )
}

export default App