var friendList = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        return res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {

        var user = req.body;

        var evaluatedTotal = [];

        for (item of friendList){

            var itemName = item.name;

            var total = 0;

            for (answer in item.answers){
                total += Math.abs(parseInt(item.answers[answer]) - parseInt(user.answers[answer]));
            }

            var matchTotal = {
                person: item,
                total: total
            };

            evaluatedTotal.push(matchTotal);
        };

        var matchValue = evaluatedTotal[0].total;
        var closestMatch = evaluatedTotal[0];

        for (match of evaluatedTotal){
            
            if (parseInt(match.total) < parseInt(matchValue)){
                matchValue = match.total;
                closestMatch = match;

            }
        }

        res.json(closestMatch.person);

    });

};