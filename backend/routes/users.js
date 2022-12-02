var express = require('express');
var userController = require('../controllers/userController')
var router = express.Router();

router.get('/', userController.getUsers);

router.get('/:id/', (req, res) => {
  res.json('GET user with id')
})

router.post('/', userController.createUser);

module.exports = router;
