import React from 'react'
import './datetime.css';
import react, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



/*
for input - <input type= "varname" placeholder "placeholder"
for button- button type = "button" > xxx <button />

for date picker- gray out past dates??
for time picker?? preset times

to finalize options implement button that says next and takes you to next page


the screen is outputted on main screen temporarily for eaasier implementation

//TODO-
clean up code
move as much as possible to app.css/index.css idk where it goes
choose color scheme


import Datepick from './Datepick';

<div className="gradient__bg">
        <div className="padded__small">
          <div className='padded__small__text'>
              Pick your date:
          </div>
        </div>
        <div className='date__picker'>
        <Datepick />
        </div>
        <div className = "padded__small__time">
          <div className='padded__small__text'>
            Pick your time:
          </div>
        </div>

        <div className='long__bar'>
          <div className='padded__bar__text'>
            Credit card information and fee may be necessary to finalize reservation.
          </div>
        </div>
      </div>

export default Datetime

*/

const Datetime = () => {
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
        <div className='confirm_button'>
          <p className='confirm_text'>Confirm and continue</p>
        </div>
      </div>
    </div>
  )
}

export default Datetime