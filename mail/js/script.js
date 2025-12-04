/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


//devo creare una lista con gli invitati con un array quindi: 

const mailList = [
    `guestmail2@gmail.com`,
    `guestmail1@gmail.com`,
    `guestmail3@gmail.com`,
    `guestmail4@gmail.com`,
    `guestmail5@gmail.com`,
    `guestmail6@gmail.com`,
    `guestmail7@gmail.com`,
    `guestmail8@gmail.com`,
    `guestmail9@gmail.com`,
    `guestmail10@gmail.com`,
];

//creo un prompt che chieda all'utente la sua email per verificare che faccia parte della lista 

const guestMail = prompt("Inserisci qui la tua email.");


//ancora non so se la mail è presente ma creo una variabile per l'esito 

let found = false; //proprio perché non sappiamo se c'è

//creo un ciclo della mia lista con FOR controllando le email una per una

for(let i = 0; i < mailList.length; i++){
    if(guestMail === mailList[i]){ //se corrisponde allora found sarà vero.
        found = true;
    }
}

//imposto il messaggio che verrà visualizzato nei due casi 
const risultato = document.getElementById('risultato');
if(found === true){
    risultato.textContent = "Congratulazioni! La tua mail è nella lista!"
}
else{
    risultato.textContent = "Spiacente, la tua mail non è nella lista."
}