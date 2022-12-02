import React, { useState, useEffect} from 'react';
import { redirect } from 'react-router-dom';

import './loginPage.css';

const LoginPage = ({navigate, signedIn, loading}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
		e.stopPropagation();
        return fetch(`http://localhost:3001/session/login`, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                if(response === 'Username does not exist' || response === 'Password is incorrect'){
                    setError(response);
                }else{
                    window.location.reload();
                    navigate('/datetime');
                }
            })
            .catch(error => {
                console.log(error);
        });
    };

    return(
        <div>
            {!signedIn || navigate('/datetime')}
            <div className='bg2'>
                <div className = 'main_rectangle2'>
                    <label className = "loginPage-content">
                        <label className="loginPage-title">Login or Continue as Guest</label>
                        <div className = "login-account-content">
                            <div className="login-content">
                                <label className = "login-label">Enter your details below to login!</label>
                            <div className="login-content">
                                <label className="login-account-label" style={{textDecoration:'underline', color:'red'}}>{error}</label>
                            </div>
                            <form onSubmit={handleLogin}>
                            <div className = "login-content">
                                <label className = "login-account-label">Username:</label>
                                <input
                                        type="text"
                                        name="loginusername"
                                        placeholder="Username"
                                        className="checkout-textfield"
                                        required="true"
                                        onChange={event => setUsername(event.target.value)}
                                        value={username}
                                    />
                            </div>
                            <div className = "login-content">
                                <label className = "login-account-label">Password:</label>
                                <input
                                        type="password"
                                        name="loginpassword"
                                        placeholder="********"
                                        className="checkout-textfield"
                                        required="true"
                                        onChange={event => setPassword(event.target.value)}
                                        value={password}
                                    />
                            </div>
                            <button type="submit" className="cc-popup-confirm" >Confirm</button>
                            <div className="login-content"><label className="login-account-label"  style={{cursor: 'pointer', textDecoration:'underline', color:'blue'}}><a href="/guestInfo">Continue as guest!</a></label></div>
                        </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

};

export default LoginPage;