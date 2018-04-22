var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public/home.html'))
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public/survey.html'))
});

app.get('/main.js', function(reg, res){
    res.sendFile(path.join(__dirname, '..', 'public/main.js'))
})

module.exports = app;