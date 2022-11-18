import React, { useState, useEffect} from 'react';

import './guestInformation.css';

const GuestInfo = (navigate) => {
    return(
        <>
            <div className = 'bg2'>
                <div className = 'main_rectangle2'>
                    <label className = 'guestPage-title'>Enter your information below!</label>
                    /*individual text field */
                    <div className='guest-content'>
                                <label className = "guest-account-label">Full name: </label>
                                <input
                                        type="text"
                                        name="GuestName"
                                        placeholder="Enter name here!"
                                        className="checkout-textfield"
                                        required="true"
                                        //onChange={event => }
                                        //value={username}
                                    />
                    </div>
                    <div className='guest-content'>
                                <label className = "guest-account-label">Number of Guests: </label>
                                <input
                                        type="text"
                                        name="GuestNumber"
                                        placeholder="Enter number of guests here!"
                                        className="checkout-textfield"
                                        required="true"
                                        //onChange={event => }
                                        //value={username}
                                    />
                    </div>
                    <div className='guest-content'>
                                <label className = "guest-account-label">Address: </label>
                                <input
                                        type="text"
                                        name="GuestAddress"
                                        placeholder="Address"
                                        className="checkout-textfield"
                                        required="true"
                                        //onChange={event => }
                                        //value={username}
                                    />
                    </div>
                    <div className='guest-content'>
                                <label className = "guest-account-label">Phone Number: </label>
                                <input
                                        type="text"
                                        name="GuestPhone"
                                        placeholder="Phone Number"
                                        className="checkout-textfield"
                                        required="true"
                                        //onChange={event => }
                                        //value={username}
                                    />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuestInfo;