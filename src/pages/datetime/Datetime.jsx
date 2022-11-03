import React from 'react'
import './datetime.css';

import "react-datepicker/dist/react-datepicker.css";

import Box from '@mui/material/Box';

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

*/
import Datepick from './Datepick';

const Datetime = () => {
  return (
    <div>
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
    </div>
  )
}

export default Datetime