'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
    $("#all").click(swapToAll);
    $("#dining-hall").click(swapToDining);
    $("#cafe").click(swapToCafes);
    $("#markets").click(swapToMarkets);
});

function initializePage() {
    // add any functionality and listeners you want here
    console.log("JavaScript initialized on Home page.");
}

function swapToAll(e) {
    e.preventDefault();
    clearSelected();
    $("#all-text").addClass("selected");   
    addHide();
    $("#all-list").removeClass("hide");
}

function swapToDining(e) {
    e.preventDefault();
    clearSelected();
    $("#dining-hall-text").addClass("selected");
    addHide();
    $("#dining-halls-list").removeClass("hide");
}

function swapToCafes(e) {
    e.preventDefault();
    clearSelected();
    $("#cafe-text").addClass("selected");
    addHide();
    $("#cafes-list").removeClass("hide");
}

function swapToMarkets(e) {
    e.preventDefault();
    clearSelected();
    $("#markets-text").addClass("selected");
    addHide();
    $("#markets-list").removeClass("hide")
}

// Helper to clear the selected text
function clearSelected() {
    $("#all-text").removeClass("selected");
    $("#dining-hall-text").removeClass("selected");
    $("#cafe-text").removeClass("selected");
    $("#markets-text").removeClass("selected");
}

// Helper to add hide to every div
function addHide() {
    $("#all-list").addClass("hide");
    $("#dining-halls-list").addClass("hide");
    $("#cafes-list").addClass("hide");
    $("#markets-list").addClass("hide");
}