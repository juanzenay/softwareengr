var express = require('express');
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');

var accountController = require('../controllers/accountController')

router.use(cookieParser('123'));

router.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: true,
      
}))

router.get('/', (req, res) => {
    if(req.session.userid != null){
        res.json(req.session.userid);
    }else{
        res.json(false);
    }
   
})

router.post('/login/', accountController.getAccountByUsername );

router.delete('/logout/', (req, res) => {
    req.session.userid = null;
    res.send('Deleted');
})

module.exports = router;
