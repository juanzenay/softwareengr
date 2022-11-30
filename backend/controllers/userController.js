var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json('GET users')
})

router.post('/', (req, res) => {
  res.json('POST users')
})

module.exports = router;
