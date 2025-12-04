/* JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga;
JSnack 5
Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array
---------- */



/* JSNACK 2 */

//creo il prompt per la prima parola 

const primaParola = (prompt('Inserisci qui la tua prima parola'));

//creo il prompt per la seconda parola

const secondaParola = (prompt('Inserisci qui la tua seconda parola'));

//ora creo le condizioni 
//SE la prima parola è più corta della seconda la stampo 

if(primaParola.length < secondaParola.length){
    console.log(primaParola, secondaParola);
}

//Se la seconda parola è più corta
else if (primaParola.length > secondaParola.length){
    console.log(secondaParola, primaParola);
}

//Se invece hanno la stessa lunghezza

else{
    console.log(primaParola, secondaParola);
}