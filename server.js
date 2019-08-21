const express = require('express'),
    request = require('request');
const PORT = process.env.PORT || 5000;

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', function (req, res) {
    req.pipe(request("https://www.metaweather.com/api" + req.url)).pipe(res);
});

let server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));