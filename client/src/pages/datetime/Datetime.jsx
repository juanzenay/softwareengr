import React from 'react'
import './datetime.css';
import react, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datetime = ({navigate}) => {

  const handlesubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();
    console.log(startDate);
    console.log('# of Guests:', guest_Number);

    navigate('/checkout')
    //console.log('Date: ', reservation_Date);
    //console.log('Time: ', reservation_Time);
  }

  const[guest_Number, setGuestNumber] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <div className = 'bg'>
      <div className = 'main_rectangle'>
        <form onSubmit={handlesubmit}>
          <div className='guest-content'>
            <div className='num-guests'>
            <label className = "guest-account-label">Number of Guests: </label>
            <input
              type="text"
              id="GuestNumber"
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
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeClassName={handleColor}
            isClearable
            placeholderText="Click Me"
          /> 
        </div>
        </form>
        <label className='card_notice'>Reservations on busy days may require a card on file and a no show fee</label>
        <button type= "submit" className='confirm_button' onClick = {handlesubmit}> 
          <label className='confirm_text'>Confirm and continue</label>
        </button> 
      </div>
    </div>
  )
}

export default Datetime

/*
  <input
          type = "text"
          id = "reservationDate"
          placeholder="MM/DD/YY"
          required = "true"
          className= "date_container"
          value={reservation_Date}
          onChange={event => setReservationDate(event.target.value)}
          />
*/
