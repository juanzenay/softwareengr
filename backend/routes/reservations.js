var express = require('express');
var reservationController = require('../controllers/reservationController')
var router = express.Router();

/* GET home page. */
router.get('/', reservationController.getReservations);

router.get('/:id/', reservationController.getReservation);

router.get('/users/:id/', reservationController.getReservation);

router.get('/:date/:time/', (req, res) => {
  res.json('GET reservations by date and time')
})

router.post('/', reservationController.createReservation);

module.exports = router;