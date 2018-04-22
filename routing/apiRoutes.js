var friendList = require('../data/friends.js');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* var apiPost = app.post('/api/friends', function(req, res){

}) */


app.get('/api/friends', function (req, res) {
    return res.json(friendList);
});

app.post('api/friends', function (req, res) {

})

module.exports = app;