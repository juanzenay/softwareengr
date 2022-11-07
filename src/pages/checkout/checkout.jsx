import React, { useState, useEffect } from 'react';

import './checkout.css';

const Checkout = () => {
    let requireCredit = true
    let signedIn = true
    const today = new Date()
    let data = {'peoplenum': 1, 'date': today.getDate()+'-'+ today.getMonth() + '-' + today.getFullYear(), 'time':`${today.getHours()}:00`};
    const [ccname, setCCName] = useState('');
    const [ccnum, setCCNum] = useState('');
    const [cvv, setCVV] = useState('');
    const [ccdate, setCCDate] = useState(new Date());
    const [hasAccount, setHasAccount] = useState(false);
    const [inputCredit, setInputCredit] = useState(false);
    
    const changeLoginRegister  = (e) =>{
        e.preventDefault();
		e.stopPropagation();
		setHasAccount(!hasAccount);
	};
    const toggleInputCredit = (e) => {
        e.preventDefault();
		e.stopPropagation();
        setInputCredit(!inputCredit);
    };
    const handleConfirm = (e) =>{
        e.preventDefault();
		e.stopPropagation();
        if(requireCredit){
            toggleInputCredit(e);
        }
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
		<div>
			<div className="checkout-content">
				<div className='checkout-content'>
					<label className="checkout-title">Checkout</label>
					<label className="checkout-label">Number of people: {data.peoplenum}</label>
					<label className="checkout-label">Date: {data.date}</label>
					<label className="checkout-label">Time: {data.time}</label>		
				</div>
            </div>	
            {!signedIn && <form id="checkout-account-form" action="/" method="get">
                <div className="checkout-content" style={{marginTop: '5%'}}>
                    <div className='checkout-content'>
                        <label className="checkout-account-label">Create an account or login to save your reservation</label>
                            <div className="checkout-content"><label className="checkout-account-label" onClick={changeLoginRegister} style={{cursor: 'pointer'}}>Already have an account?</label></div>
                        
                        <div className="checkout-content">
                            <label className="checkout-account-label">Username: </label>
                            <input
                                type="text"
                                name="checkoutusername"
                                placeholder="Username"
                                className="checkout-textfield"
                                required="true"
                                //onChange={event => }
                                //value={username}
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
                                //onChange={event => }
                                //value={password}
                            />
                        </div>
                        <button type="submit" className="standard-button" style={{minWidth:'150px',
                            width:'10%', fontSize:'12px', marginLeft:'25%', padding:'0.5rem'}}>
                            {hasAccount?'Login' :'Create account'}
                        </button>
                        
                        
                    </div>	
                </div>
				
            </form>}
            <div className="checkout-flexrow" style={{margin: '2% auto 2%'}}>
                    <button type="button"  className="secondary-button">
						Back
					</button>
					<button type="button" className="standard-button" disabled={!signedIn} onClick={handleConfirm}>
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
                                        type="date" 
                                        className="cc-popup-textfield" 
                                        name="ccdate"
                                        required={true} 
                                        value={ccdate} 
                                        onChange={e=>setCCDate(e.target.value)}></input>
                                </div>
							<button className="cc-popup-confirm">Confirm</button>
							<button onClick={toggleInputCredit} className="cc-popup-cancel">Cancel</button>
						</div>
					</div>}
				</div>
		</div>
	);
};

export default Checkout;