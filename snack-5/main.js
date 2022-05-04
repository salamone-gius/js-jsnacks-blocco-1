// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// 1. creo un array vuoto;
let numberList = [];

// 2. chiedo per 6 volte all'utente di inserire un numero;
for (let i = 0; i < 6; i++) {
    let number = Number(prompt("Inserisci un numero"));
    // 3. SE il numero inserito è dispari lo inserisco nell'array numberList, ALTRIMENTI niente;
    if ((number % 2) === 1) {
        numberList.push(number);
    } else {
    }
}

// 4. stampo l'array dopo il ciclo.
console.log(numberList);