var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json('GET accounts')
})

router.get('/:id/', (req, res) => {
  res.json('GET account with id')
})

router.post('/', (req, res) => {
  res.json('POST account')
})

module.exports = router;
