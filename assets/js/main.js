const groesse = document.getElementById("groesse");
const alter = document.getElementById("alter");
const schmal = document.getElementById("schmal");
const result = document.getElementById("ergebnis");

function berechne() {
    let ergebnis
    if (schmal.checked) {
        ergebnis = (((groesse.value - 100) + (alter.value / 10)) * 0.9 * 0.9).toFixed(2)
    } else {
        ergebnis = (((groesse.value - 100) + (alter.value / 10)) * 0.9 * 1.1).toFixed(2)
    }
result.innerHTML = (ergebnis)
}
console.log("test")