var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.headers);
    // res.setHeader('Access-Control-Allow-Origin', 'http://kukaro:3000');
    // res.setHeader('Access-Control-Allow-Credentials', 'true');

    // 응답 전송
    res.cookie('sub_name', 'sub_val', {
        // domain: 'kukaro',
        maxAge: 900000,
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }).render('index', {title: 'Express'});
});

module.exports = router;
