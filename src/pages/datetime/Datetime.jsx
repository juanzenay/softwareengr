import React from 'react'
import './datetime.css';
import react, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var date
var time


const Datetime = ({navigate}) => {
  const setData = (date, time) => {
    navigate('/reservation')
  }
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <div className = 'bg'>
      <div className = 'main_rectangle'>
        <p className='pick_date'>Pick the date and time for your reservation:</p>
        <DatePicker 
        className='date_container'
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeClassName={handleColor}
        isClearable
        placeholderText="Click Me"
        /> 
        <p className='card_notice'>Reservations on busy days may require a card on file and a no show fee</p>
        <button className='confirm_button' onClick={() => setData(date,time)}> 
          <p className='confirm_text'>Confirm and continue</p>
        </button>
      </div>
    </div>
  )
}

export default Datetime
