var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json('GET users')
})

router.get('/:id/', (req, res) => {
  res.json('GET user with id')
})

router.post('/', (req, res) => {
  res.json('POST users')
})

module.exports = router;
