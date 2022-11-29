import React from 'react'
import './datetime.css';
import react, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datetime = ({navigate}) => {

  const[reservation_Date, setReservationDate] = useState('');
  const[reservation_Time, setReservationTime] = useState('');

  const handlesubmit = event => {
    console.log('handlesubmit ran');
    event.preventDefault();
    console.log('Date: ', reservation_Date);
    console.log('Time: ', reservation_Time);
  }

  const setData = (date, time) => {
    
    //navigate('/reservation')
  }
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <div className = 'bg'>
      <div className = 'main_rectangle'>
        <form onSubmit={handlesubmit}>
          <label className='pick_date'>Type the date and time for your reservation and press enter:</label>
          <input
          type = "text"
          id = "reservationDate"
          placeholder="MM/DD/YY"
          required = "true"
          className= "date_container"
          value={reservation_Date}
          onChange={event => setReservationDate(event.target.value)}
          /> 
        </form>
        <label className='card_notice'>Reservations on busy days may require a card on file and a no show fee</label>
        <button type= "submit" className='confirm_button'> 
          <label className='confirm_text'>Confirm and continue</label>
        </button> 
      </div>
    </div>
  )
}

export default Datetime

/*
<DatePicker 
        className='date_container'
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeClassName={handleColor}
        isClearable
        placeholderText="Click Me"
        /> 
*/