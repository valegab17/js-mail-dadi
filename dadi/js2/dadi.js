/* /* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


//genero un numero casuale da 1 a 6 per il giocatore

const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("Numero Giocatore", dadoGiocatore);

//genero un numero casuale da 1 a 6 per il pc
const dadoPc = Math.floor(Math.random() * 6) + 1;
console.log("Numero Pc", dadoPc);


//Determino un vincitore per vedere chi fa il tiro più alto

risultato = ''

//creo le condizioni: se il giocatore ha vinto 

if (dadoGiocatore > dadoPc) {
    risultato = "Congratulazioni! User ha vinto questo round!";
}
//creo la condizione per cui il pc vince
else if (dadoGiocatore < dadoPc) {
    risultato = "Il Pc ha vinto questo round!";
}

//se finisce in parità

else {
    risultato = "Parità! Vuoi riprovare?";
}

//stampo in console il risultato
console.log(risultato);

