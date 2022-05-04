                            // - TASK - \\
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

                        // --- SOLUTION --- \\
// 1. chiedo all'utente prima un numero, poi un altro
let firstNumber = prompt("Inserisci un numero");
let secondNumber = prompt("Inserisci un altro numero");

// 2. SE il primo numero è maggiore del secondo, ALLORA lo stampostampo TRIMENTI
if ( firstNumber > secondNumber ) {
    console.log(firstNumber);
} else if ( firstNumber < secondNumber ) {
    console.log(secondNumber);
} else {
    console.log("Pareggio");
}
