var express = require('express');
var accountController = require('../controllers/accountController')
var router = express.Router();

router.get('/', accountController.getAccounts);

router.get('/:id/', (req, res) => {
  res.json('GET account with id')
})

router.get('/:username/', (req, res) => {
  res.json('GET account with username')
})

router.post('/', accountController.createAccount);

module.exports = router;
