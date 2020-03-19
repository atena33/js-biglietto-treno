// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.
var msg;
// Chiedere all'utente il numero di chilometri
var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// Chiedere all'utente l'età
var età = parseInt(prompt("Quanti anni hai?"));

// Stabilire il prezzo
var prezzo = chilometri * 0.21;

console.log(prezzo);
// Condizioni del prezzo con sconti

if (età < 18) {
  msg= prezzo / 100 * 80;
}
else if (età > 65) {
  msg= prezzo / 100 * 60;
}
else {
 msg=prezzo;
}

// Output
document.getElementById("risultato").innerHTML = msg;
