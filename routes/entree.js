/*
 * GET Entree page
 */

var data = require("../data/data.json")

exports.view = function(req, res) {

    var restaurant = req.query.restaurant;

    res.render('entree', {
        "name": restaurant
    });
}