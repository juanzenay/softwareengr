import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './checkout.css';

const Checkout = ({navigate, signedIn, loading}) => {
    const location = useLocation();
    const requireCredit = location.state.requireCredit;
    const info = location.state.info;
    const [guests, setGuests] = useState(location.state.guest_Number);
    const [date, setDate] = useState(location.state.date);
    const [time, setTime] = useState(location.state.time);
    const [tableids, setTableids] = useState(location.state.tableids);
    const [ccname, setCCName] = useState('');
    const [ccnum, setCCNum] = useState('');
    const [cvv, setCVV] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ccdate, setCCDate] = useState(new Date());
    const [inputCredit, setInputCredit] = useState(false);
    const [error, setError] = useState('');


    const toggleInputCredit = (e) => {
        e.preventDefault();
		e.stopPropagation();
        setInputCredit(!inputCredit);
    };

    const createAccount = (e) =>{
        e.preventDefault();
		e.stopPropagation();
        return fetch(`http://localhost:3001/accounts`, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        }).then(res => res.json())
            .then(response => {
                if(response === 'Email already exists' || response === 'Username already exists'){
                    setError(response);
                }else{
                    fetch(`http://localhost:3001/session/login`, {
                        method: 'POST',
                        cache: 'no-cache',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    }).then(res2 => res2.json())
                        .then(response2 => {
                            console.log(response2);
                            signedIn=response.userid;
                            fetch(`http://localhost:3001/users`, {
                                method: 'POST',
                                cache: 'no-cache',
                                credentials: 'include',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    userid: signedIn,
                                    name: info.name,
                                    address: info.address,
                                    phone: info.phone
                                })
                            })
                            window.location.reload();
                        })
                        .catch(error2 => {
                            console.log(error2);
                    });
                }
            })
            .catch(error => {
                console.log(error);
        });
    };

    const handleConfirm = (e) =>{
        e.preventDefault();
		e.stopPropagation();
        return fetch(`http://localhost:3001/reservations`, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userid: signedIn,
                tableid: tableids,
                guests: guests,
                date: date,
                time: time,
                credit: ccnum
            })
        }).then(res => res.json())
            .then(response => {
                navigate(`/reservation/${response.reservationid}`);
            })
            .catch(error => {
                console.log(error);
                navigate('/datetime');
            });

    };

    const handleCVV = (e) => {
        const pattern = /^[1-9]\d*(\d+)?$/i;
        if (e.target.value === '' || pattern.test(e.target.value)) {
            setCVV(e.target.value);
        }
    }

    const handleCCNum = (e) => {
        const pattern = /^[1-9]\d*(\d+)?$/i;
        if (e.target.value === '' || pattern.test(e.target.value)) {
            setCCNum(e.target.value);
        }
    }

    return (
            <div className = "bg2">
                <div className="main_rectangle2">
                    <div className="checkout-content">
                        <div className='checkout-content'>
                            <label className="checkout-title">Checkout</label>
                            <label className="checkout-label">Number of people: {guests}</label>
                            <label className="checkout-label">Date: {date}</label>
                            <label className="checkout-label">Time: {time}</label>		
                        </div>
                    </div>	
                    {!signedIn && 
                        <div className="checkout-account-content">
                            <div className='checkout-content'>
                                <label className="checkout-account-label" >Create an account to save your reservation</label>
                                    <div className="checkout-content"><label className="checkout-account-label" style={{textDecoration:'underline', color:'red'}}>{error}</label></div>
                                <div className="checkout-content">
                                    <label className="checkout-account-label">Email: </label>
                                    <input
                                        type="email"
                                        name="checkoutemail"
                                        placeholder="Email"
                                        className="checkout-textfield"
                                        required="true"
                                        onChange={event => setEmail(event.target.value)}
                                        value={email}
                                    />
                                </div>

                                <div className="checkout-content">
                                    <label className="checkout-account-label">Username: </label>
                                    <input
                                        type="text"
                                        name="checkoutusername"
                                        placeholder="Username"
                                        className="checkout-textfield"
                                        required="true"
                                        onChange={event => setUsername(event.target.value)}
                                        value={username}
                                    />
                                </div>
                                
                                <div className="checkout-content">
                                    <label className="checkout-account-label">Password: </label>
                                    <input
                                        type="password"
                                        name="checkoutpassword"
                                        placeholder="********"
                                        className="checkout-textfield"
                                        required="true"
                                        onChange={event => setPassword(event.target.value)}
                                        value={password}
                                    />
                                </div>
                                <button type="button" className="standard-button" style={{minWidth:'150px',
                                    width:'10%', fontSize:'100%', padding:'0.5rem'}} onClick={createAccount}>
                                    Create account
                                </button>
                                
                                
                            </div>	
                        </div>
                        
                    }
                    
                    </div>
                    <div className="checkout-flexrow" style={{margin: 'auto'}}>
                            <button type="button"  className="secondary-button" onClick={() => navigate('/datetime')}>
                                Back
                            </button>
                            <button type="button" className="standard-button" disabled={!signedIn} 
                            onClick={requireCredit? toggleInputCredit:handleConfirm}>
                                Confirm
                            </button>
                            {inputCredit && <div className='checkout-cc-container'><div className="checkout-cc-popup">
                                    <button className="cc-close" onClick={toggleInputCredit}>X</button>
                                        <label className="cc-popup-text">You need to have a credit card</label>
                                        <div className="checkout-popup-content">
                                            <label className="cc-popup-text">Name: </label>
                                            <input 
                                                type="text"
                                                className="cc-popup-textfield"
                                                name="ccname"
                                                value={ccname} 
                                                required={true} 
                                                onChange={e=>setCCName(e.target.value)}></input>
                                            <label className="cc-popup-text">Card number: </label>
                                            <input 
                                                type="text" 
                                                className="cc-popup-textfield" 
                                                name="ccnum"
                                                minLength="8" 
                                                maxLength="19" 
                                                value={ccnum} 
                                                required={true} 
                                                onChange={e=>handleCCNum(e)}></input>
                                            <label className="cc-popup-text" style={{flex: 'left'}}>CVV: </label>
                                            <input 
                                                type="text" 
                                                className="cc-popup-textfield" 
                                                name="cvv"
                                                minLength="3" 
                                                maxLength="4" 
                                                value={cvv} 
                                                required={true} 
                                                onChange={e=>handleCVV(e)}></input>
                                            <label className="cc-popup-text">Expiration date: </label>
                                            <input 
                                                type="month" 
                                                className="cc-popup-textfield" 
                                                name="ccdate"
                                                required={true} 
                                                value={ccdate} 
                                                onChange={e=>setCCDate(e.target.value)}></input>
                                        </div>
                                    <button className="cc-popup-confirm" onClick={handleConfirm}>Confirm</button>
                                    <button onClick={toggleInputCredit} className="cc-popup-cancel">Cancel</button>
                                </div>
                            </div>}
                        </div>
            </div>
	);
};

export default Checkout;