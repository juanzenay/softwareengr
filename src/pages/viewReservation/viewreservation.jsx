import React, { useState, useEffect } from 'react';

import './viewreservation.css';

const ViewReservation = () => {

    const today = new Date()
    let data = {'resnum':1, 'peoplenum': 1, 'date': today.getDate()+'-'+ today.getMonth() + '-' + today.getFullYear(), 'time':`${today.getHours()}:00`};

	return (
		<div>
			<div className="viewreservation-content">
				<div className='viewreservation-content'>
					<label className="viewreservation-title">Reservation</label>
                    <label className="viewreservation-label">Reservation number: {data.resnum}</label>
					<label className="viewreservation-label">Number of people: {data.peoplenum}</label>
					<label className="viewreservation-label">Date: {data.date}</label>
					<label className="viewreservation-label">Time: {data.time}</label>		
				</div>
            </div>	
        </div>
	);
};

export default ViewReservation;