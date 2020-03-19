// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.
var msg;
// Crea prompt persona1
var uno = parseInt(prompt("Quanti anni hai?"));

// Crea prompt persona2
var due = parseInt(prompt("Tu invece, quanti anni hai?"));

// Crea le condizioni
if (uno > due) {
  msg = uno;
}
else {
  msg = due;
}

// Crea l'output

document.getElementById("risultato").innerHTML = msg;
