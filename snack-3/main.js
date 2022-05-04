// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// 1. dichiaro una variabile con valore 0
let totale = 0;

// 2. la riempio con i dati richiesti all'utente
for (let i = 0; i <= 9; i++) {
    let number = Number(prompt("Inserisci un numero"));
    totale += number;
}

// 3. stampo la somma
console.log(totale);


