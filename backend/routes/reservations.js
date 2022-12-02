var express = require('express');
var reservationController = require('../controllers/reservationController')
var router = express.Router();
var session = require('express-session');

router.get('/', reservationController.getReservations);

router.get('/:id/', reservationController.getReservation);

router.get('/users/:id/', reservationController.getUserReservations);

router.get('/:date/:time/', reservationController.getReservationsByDateTime);

router.post('/', reservationController.createReservation);

module.exports = router;
