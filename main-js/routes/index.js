var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.headers.cookie);
    res.cookie('main_name', 'main_val', {
        // domain: 'localhost',
        maxAge: 900000,
        httpOnly: true});
    // res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.render('index', {title: 'Express'});
});

module.exports = router;
