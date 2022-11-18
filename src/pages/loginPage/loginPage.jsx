import React, { useState, useEffect} from 'react';

import './loginPage.css';

const LoginPage = (navigate) => {
    let data = {'user':'', 'password':''};

    return(
        <div>
            <div className='bg2'>
                <div className = 'main_rectangle2'>
                    <label className = "loginPage-content">
                        <label className="loginPage-title">Login or Continue as Guest</label>
                        <div className = "login-account-content">
                            <div className="login-content">
                                <label className = "login-label">Enter your details below or continue as guest!</label>
                            <div className = "login-content">
                                <label className = "login-account-label">Username:</label>
                                <input
                                        type="text"
                                        name="loginusername"
                                        placeholder="Username"
                                        className="checkout-textfield"
                                        required="true"
                                        //onChange={event => }
                                        //value={username}
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
                                        //onChange={event => }
                                        //value={username}
                                    />
                            </div>
                            <div className="login-content"><label className="login-account-label"  style={{cursor: 'pointer', textDecoration:'underline', color:'blue'}}>Continue as guest</label></div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

};

export default LoginPage;