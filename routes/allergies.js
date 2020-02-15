/*
 * Allergies page
 */

var allergies = require("../data/allergies.json")

allergies.sort(); // Sort data to make it easier to find

exports.view = function(req, res) {
    res.render("allergies", {
        "allergies": allergies
    });
}