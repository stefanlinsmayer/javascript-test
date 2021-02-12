'use strict';

window.onload = function () {
    $("button#btnContinue").html("Next Step...");
    $("button#btnContinue").click(function() {
        alert("hiho")
    });
    $("button#btnAdd").click(function() {
        let zahl1 = $("#inpZahl1").val();
        let zahl2 = $("#inpZahl2").val();
        let erg = rechner(zahl1, zahl2, '+');
        $("#lblRes").html(erg);
        alert('das ergebnis ist: ' + $("#inpZahl1").val());
    })
}