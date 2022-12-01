var express = require('express');
var router = express.Router();
var session = require('express-session');

router.get('/', (req, res) => {
    if( res.session.userid != null){
        res.json(true);
    }else{
        res.json(false);
    }
})

router.post('/', (req, res) => {
  res.session.userid = req.body.userid;
})

router.delete('/', (req, res) => {
    res.session.userid = null;
})

module.exports = router;
