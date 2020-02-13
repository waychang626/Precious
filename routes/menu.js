var data = require("../data/data.json");

exports.view = function(req, res) {

    var restaurant = req.query.restaurant;
    var course = req.query.course ? req.query.course : "breakfast";

    var pagedata = {
        "name": restaurant,
        "food": data[restaurant][course]
    }

    res.render('menu', pagedata)
}