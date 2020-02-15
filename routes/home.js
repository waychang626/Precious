/*
 * GET home page
 */

var data = require("../data/data.json")

exports.view = function(req, res) {
    var restaurants = Object.keys(data)
    restaurants.sort();

    res.render('home', {
        restaurants: restaurants
    });
};