var express = require('express');
var router = express.Router();

router.get('/hello',function(req,res,next){
    res.send('Hello Express and The time is ' + new Date().toString());
})

module.exports = router