var express = require('express');
var layoutController = require('../controllers/layoutController')
var router = express.Router();

router.get('/', layoutController.getTables);
router.get('/:num/', layoutController.getTablesBySize);

module.exports = router;
