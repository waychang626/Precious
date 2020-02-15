/*
 * GET home page
 */

var data = require("../data/data.json")

exports.view = function (req, res) {

    entries = Object.entries(data);

    all = [];
    dining_halls = [];
    cafes = [];
    markets = [];

    for (i in entries) {
        name = entries[i][0];
        info = entries[i][1];
        eatery_type = info['eatery_type']

        all.push(name);
        
        if (eatery_type == 1) {
            dining_halls.push(name);
        } else if (eatery_type == 2) {
            cafes.push(name);
        } else if (eatery_Type == 3) {
            markets.push(name);
        }
    }

    all.sort();
    dining_halls.sort();
    cafes.sort();
    markets.sort();

    res.render('home', {
        "all": all,
        "dining_halls": dining_halls,
        "cafes": cafes,
        "markets": markets
    });
};