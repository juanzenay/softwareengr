import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './viewreservation.css';

const ViewReservation = (navigate) => {
	const [err, setError] = useState(null);
	const [reservationInfoLoading, setReservationInfoLoading] = useState(true);
	const [data, setData] = useState([]);
	const params = useParams();

	function handleErr(err){
		console.log(err);
		console.trace();
		setError(err);
	}

	useEffect(()=>{
		async function loadReservationInfo(){
			const response = await fetch(`http://localhost:3001/reservations/${params.id}}`).then(res=>res.json()).catch(handleErr);
			setData(response);
			setReservationInfoLoading(false);
		}
		loadReservationInfo();
	},[params]);

	return (
		<div>
			<div className="bg2">
				<div className="main_rectangle2">
				{reservationInfoLoading ||
					<div className='viewreservation-content'>
						 <label className="viewreservation-title">Reservation</label>
						<label className="viewreservation-label">Reservation number: {data.resnum}</label>
						<label className="viewreservation-label">Number of people: {data.peoplenum}</label>
						<label className="viewreservation-label">Date: {data.date}</label>
						<label className="viewreservation-label">Time: {data.time}</label>		
					</div>}
				</div>
            </div>	
        </div>
	);
};

export default ViewReservation;