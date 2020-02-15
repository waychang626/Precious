'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
    $("#addAllergyForm").submit(onAllergySubmit2);
    $("#allergy-input").keyup(onAllergyKeyUp);
    $(".allergy-list-item-trash").click(onAllergyTrashClick);
    $("#allDone").click(allDone);
})

function allDone(e) {
    e.preventDefault();
    window.location.replace("/")
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    console.log("JavaScript initialized on Allergies page.");
}

function onAllergyTrashClick(e) {
    e.preventDefault();

    var item = $(this).closest('.allergy-list-item');
    var allergy = item.children('.allergy-list-item-title').text();
    $.ajax({
        type: "POST",
        url: "/allergies-remove",
        headers: {
            "allergy": allergy
        }
    });

    item.addClass("fade-out");
    setTimeout(function() {
        item.hide();
    }, 1000);
}

/*
 * Handles making the button pressable or not.
 */
function onAllergyKeyUp(e) {
    e.preventDefault();
    var input = $("#allergy-input").val();
    if (input.length > 0) {
        $("#submitBtn").removeClass("disabled");
    } else {
        $("#submitBtn").addClass("disabled");
    }
}

function onAllergySubmit2(e) {
    e.preventDefault();

    var allergy = $("#allergy-input").val();

    // Just use headers it works
    // Assume POST is always successful for now.
    $.ajax({
        type: "POST",
        url: "/allergies-update",
        headers: {
            "allergy": allergy
        }
    });

    // Clear the allergy input
    $("#allergy-input").val("");
    $("#allergyAddStatusText").text(`Added ${allergy} to allergies list.`);

    // Disable the submit button at the end.
    $("#submitBtn").addClass("disabled");

    // Update the HTML
    $("#allergy-list").prepend(
        `<div class="allergy-list-item slide-in-left">
            <div class="allergy-list-item-title">
                <p>${allergy}</p>
            </div>
            <div class="allergy-list-item-trash">
                <img src="/images/trash.png">
            </div>
        </div>
        `);

    // Make the text disappear nicely.
    setTimeout(function () {
        $("#allergyAddStatusText").addClass("fade-out");
    }, 3000);

    setTimeout(function () {
        $("#allergyAddStatusText").text("");
        $("#allergyAddStatusText").removeClass("fade-out");
    }, 4000);
}