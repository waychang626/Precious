/*
 * GET home page
 */

var data = require("../data/data.json")

exports.view = function(req, res) {
    const restaurants = Object.keys(data)
    console.log(restaurants)
    res.render('home', {
        restaurants: restaurants
    });
};