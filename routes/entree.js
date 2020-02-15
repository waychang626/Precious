/*
 * GET Entree page
 */

var data = require("../data/data.json")
var allergies = require("../data/allergies.json")

exports.view = function(req, res) {

    var course = req.query.course;
    var restaurant = req.query.restaurant;
    var entree = req.query.entree;

    var allergens_list = [];
    var ingredients_list = [];
    var price = "Unknown";

    for (i in data[restaurant][course]) {
        curr_entree = data[restaurant][course][i];
        if (curr_entree['name'].trim() === entree.trim()) {
            price = data[restaurant][course][i]['price'];
            ingredients = data[restaurant][course][i]['ingredients'];

            for (j in ingredients) {
                ingredient = ingredients[j]
                if (allergies.includes(ingredient)) {
                    allergens_list.push(ingredient);
                } else {
                    ingredients_list.push(ingredient);
                }
            }
            break;
        }
    }

    console.log(allergens_list);
    console.log(ingredients_list);

    res.render('entree', {
        "restaurant": restaurant,
        "entree": entree,
        "allergens": allergens_list,
        "ingredients": ingredients_list,
        "price": price
    });
}