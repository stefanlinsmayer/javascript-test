'use strict';

window.onload = function () {
    $("button#btnContinue").html("Next Step...");
    $("button#btnContinue").click(function() {
        alert("hiho")
    });
    $("button#btnAdd").click(function() {
        $("#inpZahl1").val("11");
        alert('das ergebnis ist: ' + $("#inpZahl1").val());
    })
}