import React, { useState, useEffect} from 'react';

import './guestInformation.css';

const GuestInfo = ({navigate}) => {

    const[guest_Name, setGuestName] = useState('');
    //const[guest_Number, setGuestNumber] = useState('');
    const[guest_Address, setGuestAddress] = useState('');
    const[guest_Phone, setGuestPhone] = useState('');

    const handleSubmit = event =>{
        console.log('handleSubmit ran');
        event.preventDefault();
        console.log('Name:', guest_Name);
//        console.log('# of Guests:', guest_Number);
        console.log('Address:', guest_Address);
        console.log('Phone:', guest_Phone);
    };

    return(
        <>
            <div className = 'bg2'>
                <div className = 'main_rectangle2'>
                    <form onSubmit={handleSubmit}>
                        <label className = 'guestPage-title'>Enter your information below!</label><br/><br/>
                        <div className='guest-content'>
                                    <label className = "guest-account-label">Full name: </label>
                                    <input
                                            type="text"
                                            id="GuestName"
                                            placeholder="Enter name here!"
                                            className="checkout-textfield"
                                            required="true"
                                            value={guest_Name}
                                            onChange={event => setGuestName(event.target.value)}
                                        /><br/><br/>
                        </div>
                        <div className='guest-content'>
                                    <label className = "guest-account-label">Address: </label>
                                    <input
                                            type="text"
                                            id="GuestAddress"
                                            placeholder="Address"
                                            className="checkout-textfield"
                                            required="true"
                                            value={guest_Address}
                                            onChange={event => setGuestAddress(event.target.value)}
                                        /><br/><br/>
                        </div>
                        <div className='guest-content'>
                                    <label className = "guest-account-label">Phone Number: </label>
                                    <input
                                            type="number"
                                            id="GuestPhone"
                                            placeholder="Phone Number"
                                            className="checkout-textfield"
                                            required="true"
                                            value={guest_Phone}
                                            onChange={event => setGuestPhone(event.target.value)}
                                        /><br/><br/>
                        </div>
                        <button className="standard-button" onClick={() => navigate('/datetime', {state:{name:guest_Name, address:guest_Address, phone:guest_Phone}})}>Submit Info</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default GuestInfo;

