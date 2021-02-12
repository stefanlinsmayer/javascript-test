'use strict';

window.onload = function () {
    $("button.continue").html("Next Step...");
    $("button.continue").on( "click",  function() {
        alert("hiho")
    });
}