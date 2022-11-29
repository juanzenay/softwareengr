var express = require('express');
var reservationController = require('../controllers/reservationController')
var router = express.Router();

/* GET home page. */
router.get('/', reservationController.getReservations);

router.get('/:id/', reservationController.getReservation);

router.post('/', (req, res) => {
  res.json('POST reservations')
})

module.exports = router;
