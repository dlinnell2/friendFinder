var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var api = require(path.join(__dirname, 'routing/apiRoutes.js'));
var html = require(path.join(__dirname, 'routing/htmlRoutes.js'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(api);
app.use(html);

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listening on ${(process.env.PORT||3000)}`)
});