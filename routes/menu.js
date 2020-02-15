var data = require("../data/data.json");
var allergies = require("../data/allergies.json");

exports.view = function(req, res) {

    var restaurant = req.query.restaurant;

    var breakfastList = splitLists(restaurant, "breakfast");
    var breakfast_safe = breakfastList[0];
    var breakfast_unsafe = breakfastList[1];

    var lunchList = splitLists(restaurant, "lunch");
    var lunch_safe = lunchList[0];
    var lunch_unsafe = lunchList[1];

    var dinnerList = splitLists(restaurant, "dinner");
    var dinner_safe = dinnerList[0];
    var dinner_unsafe = dinnerList[1];

    var pagedata = {
        "restaurant": restaurant,
        "breakfastSafe": breakfast_safe,
        "breakfastUnsafe": breakfast_unsafe,
        "lunchSafe": lunch_safe,
        "lunchUnsafe": lunch_unsafe,
        "dinnerSafe": dinner_safe,
        "dinnerUnsafe": dinner_unsafe
    }

    res.render('menu', pagedata)
}

function splitLists(restaurant, course) {
    var safeList = [];
    var unsafeList = [];

    data[restaurant][course].forEach((item) => {
        safe = true;
        for (i in item['ingredients']) {
            ingredient = item['ingredients'][i];
            if (allergies.includes(ingredient)) {
                safe = false;
            }
        }

        if (safe) {
            safeList.push(item);
        } else {
            unsafeList.push(item);
        }
    });

    return [safeList, unsafeList];
}