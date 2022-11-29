var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json('GET accounts')
})

router.post('/', (req, res) => {
  res.json('POST account')
})

module.exports = router;
