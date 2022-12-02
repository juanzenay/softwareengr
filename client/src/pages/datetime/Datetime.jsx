import React from 'react'
import './datetime.css';
import react, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const Datetime = ({navigate}) => {
  const location = useLocation();
  const info = location.state;
  const [layout, setLayout] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState();
  const [reserved, setReserved] = useState();
  const [tableids, setTableids] = useState('');
  const [guest_Number, setGuestNumber] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const traffic = ["01-01",
    "07-04",
    "11-11",
    "12-10",
    "12-25"
  ];

  function handleErr(err){
		console.log(err);
		console.trace();
		setError(err);
	}

  useEffect(()=>{
		async function loadLayoutInfo(){
			const response = await fetch(`http://localhost:3001/layout`, {method: "GET"}).then(res=>res.json()).catch(handleErr);
			setLayout(response);
			setLoading(false);
		}
		loadLayoutInfo();
	},[]);

  const handlesubmit = event => {
    event.preventDefault();
    
    const date = JSON.stringify(startDate).split('"')[1].split('T')[0];
    const time = JSON.stringify(startDate).split('T')[1].split('.')[0];
    
    async function setLayoutInfo(){
      const response = await fetch(`http://localhost:3001/reservations/`, {method: "GET"}).then(res=>res.json()).catch(handleErr);
      setReserved(response.find(e => e.date==date && e.time==time));
    }
    setLayoutInfo();
    
    let foundTable = false;
    for(let i = 0; i < layout.length && !foundTable; i++){
        if(guest_Number <= layout[i].size && !reserved?.find(e=> {return e.tableid === layout[i].tableid})){
          foundTable = true;
          setTableids(layout[i].tableid);
        }
    }

    if(!foundTable){
      console.log("no table"); 
    }else{
      if(traffic.find(e => e === date.split("-")[1]+"-"+date.split("-")[2])){
        navigate('/checkout', {state:{info, guest_Number, date, time, tableids, requireCredit:true}});
      }else{
        navigate('/checkout', {state:{info, guest_Number, date, time, tableids, requireCredit:false}});
      }
    }
  }

  function convertLocalToUTCDate(date) {
    if (!date) {
      return date;
    }
    date = new Date(date);
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()));
    return date;
  }

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  
  return (
    <div className = 'bg'>
      <form onSubmit={handlesubmit}>
      <div className = 'main_rectangle'>
          <div className='guest-content'>
            <div className='num-guests'>
            <label className = "guest-account-label">Number of Guests: </label>
            <input
              type="text"
              id="GuestNumber"
              minValue="1"
              placeholder="Enter number of guests here!"
              className="checkout-textfield"
              required="true"
              value={guest_Number}
              onChange={event => setGuestNumber(event.target.value)}
          /><br/><br/>
          </div>
          </div>
          <div className='pick_date'>
          <label className = "guest-account-label">Choose your date and time: </label>
          </div>
          <div className = 'date_container'>
          <DatePicker 
            className='checkout-textfield'
            utcoffset={0}
            showTimeSelect
            selected={convertLocalToUTCDate(startDate)}
            onChange={(date) => setStartDate(convertLocalToUTCDate(date))}
            timeClassName={handleColor}
            isClearable
            placeholderText="Click Me"
          /> 
        </div>
        
        <label className='card_notice'>Reservations on busy days may require a card on file and a no show fee</label>
        <button type= "submit" className='confirm_button' disabled={loading}> Confirm and continue
          
        </button> 
      </div>
      </form>
    </div>
  )
}

export default Datetime
