/*
 * Allergies page
 */

var allergies = require("../data/allergies.json")


exports.view = function(req, res) {
    allergies.sort(); // Sort data to make it easier to find
    res.render("allergies", {
        "allergies": allergies
    });
}

exports.update = function(req, res) {

    var allergy = req.headers.allergy;

    allergies.push(allergy);

    res.status(201);
}

exports.remove = function(req, res) {
    allergies.sort(); // Sort data to make it easier to find
    var allergy = req.headers.allergy;

    var index = allergies.indexOf(allergy);
    if (index !== -1) allergies.splice(index, 1);
}