'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
    $("#hbreakfast").click(hbreakfast);
    $("#hlunch").click(hlunch);
    $("#hdinner").click(hdinner);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    console.log("JavaScript initialized on Menu page.");
}

function hbreakfast(e) {
    e.preventDefault();
    console.log("Breakast clicked!");

    $("#hlunch").removeClass("active");
    $("#hdinner").removeClass("active");
    $("#hbreakfast").addClass("active");

    // Change Displayed elements
    $("#mlunch").addClass("hide");
    $("#mlunchUnsafe").addClass("hide");
    $("#mdinner").addClass("hide");
    $("#mdinnerUnsafe").addClass("hide");
    $("#mbreakfast").removeClass("hide");
    $("#mbreakfastUnsafe").removeClass("hide");
}

function hlunch(e) {
    e.preventDefault();
    console.log("Lunch clicked!");

    // Change HScroll
    $("#hbreakfast").removeClass("active");
    $("#hdinner").removeClass("active");
    $("#hlunch").addClass("active");

    // Change Displayed elements
    $("#mbreakfast").addClass("hide");
    $("#mbreakfastUnsafe").addClass("hide");
    $("#mdinner").addClass("hide");
    $("#mdinnerUnsafe").addClass("hide");
    $("#mlunch").removeClass("hide");
    $("#mlunchUnsafe").removeClass("hide");
}

function hdinner(e) {
    e.preventDefault();
    console.log("Dinner clicked!");

    $("#hbreakfast").removeClass("active");
    $("#hlunch").removeClass("active");
    $("#hdinner").addClass("active");

    // Change Displayed elements
    $("#mbreakfast").addClass("hide");
    $("#mbreakfastUnsafe").addClass("hide");
    $("#mlunch").addClass("hide");
    $("#mlunchUnsafe").addClass("hide");
    $("#mdinner").removeClass("hide");
    $("#mdinnerUnsafe").removeClass("hide");
}
