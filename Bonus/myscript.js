// Quanti minuti mancano alla fine dell’ora?

var ora = 60;
var d = new Date ();

document.getElementById("risultato").innerHTML = ora - d.getMinutes();
