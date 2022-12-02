var http = require('http');
var sql = require('mssql');
var fs = require('fs');

const getReservations = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM reservations`).recordset;
		res.json(await data);
	} catch(error) {
		next(error);
	}
};

const getReservation = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM reservations WHERE reservationid = ${req.params.id}`).recordset[0];
		if(Array.isArray(data) && data.length === 0)
			res.status(404).send('Not Found');
		else
			res.json(await data);
			
	} catch (error) {
		next(error);
	}
};

const getUserReservations = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM reservations WHERE userid = ${req.session.userid}`).recordset;
		if(Array.isArray(data) && data.length === 0)
			res.status(404).send('Not Found');
		else
			res.json(await data);
			
	} catch (error) {
		next(error);
	}
};

const getReservationsByDateTime = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM reservations WHERE date = ${req.params.date}, time = ${req.params.time}`).recordset;
		if(Array.isArray(data) && data.length === 0)
			res.status(404).send('Not Found');
		else
			res.json(await data);
			
	} catch (error) {
		next(error);
	}
};

const createReservation = async (req, res, next) => {
	try {
		const data = (await sql.query`INSERT INTO reservations (userid, tableid, date, time, credit) \
		OUTPUT INSERTED.* VALUES \
		(${req.session.userid}, ${req.body.tableid}, ${req.body.date}, ${req.body.time}, ${req.body.guests}, ${req.body.credit||NULL})`).recordset[0];
		res.json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createReservation,
	getUserReservations,	
	getReservations,
	getReservationsByDateTime,
	getReservation
};
