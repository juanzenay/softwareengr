import React, {useEffect, useState} from 'react'

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

  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  function handleErr(err){
	console.log(err);
	console.trace();
	setErr(err);
	}

  useEffect(()=>{
		async function loadSigninInfo(){
			const response = await fetch(`http://localhost:3001/session`, {
        method: "GET",
        cache: 'no-cache',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }}).then(res=>res.json()).catch(handleErr);
			setSignedIn(response);
			setLoading(false);
		}
		loadSigninInfo();
	},[]);
  
  return (
    <div classname = "App">
      <Routes>
        <Route path="/datetime" element={<Datetime navigate = {navigate}/>} />
        <Route path="/checkout" element={<Checkout navigate = {navigate} signedIn = {signedIn} loading = {loading}/>} />
        <Route path="/reservation/:id" element={<ViewReservation navigate = {navigate}/>} />
        <Route path="/guestInfo" element = {<GuestInfo navigate = {navigate} />} />
        <Route path="/login" element = {<LoginPage navigate = {navigate} signedIn = {signedIn} loading = {loading}/>} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  )
}

export default App