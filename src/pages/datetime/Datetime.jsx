import React from 'react'
import './datetime.css';

import Box from '@mui/material/Box';

/*
for input - <input type= "varname" placeholder "placeholder"
for button- button type = "button" > xxx <button />
*/

const Datetime = () => {
  return (
    <div>Datetime
      <div className="gradient__bg">
        <div className="datetime__box">
          <Box sx={{ borderRadius: '10px' }}
          height= {46} width = {200} fontSize= {24} 
          display="flex" justifyContent="center" 
          alignItems="center" bgcolor='black' color = 'white'>
            Pick your date:
            
          </Box>
        </div>
        <div>
          <Box sx={{ borderRadius: '10px' }}
          height= {46} width = {200} fontSize= {24} 
          display="flex" justifyContent="center" 
          alignItems="center" bgcolor='black' color = 'white'>
            Pick your time:
            
          </Box>
        </div>
        <div>
          <Box sx={{ borderRadius: '10px' }}
          height= {46} width = {962} fontSize= {24} 
          m = 'auto' display="flex" justifyContent="center" 
          alignItems="center" bgcolor='black' color = 'white'>
            Credit card information and fee may be necessary to finalize reservation.
            
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Datetime