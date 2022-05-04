// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// 1. chiedo all'utente di inserire un numero e lo salvo in una variabile
let number = Number(prompt("Inserisci un numero"));

// 2. SE il numero inserito è pari, lo stampo, ALTRIMENTI stampo il numero successivo
if ((number % 2) === 0) {
    console.log(number);
} else {
    console.log(number+1);
}
