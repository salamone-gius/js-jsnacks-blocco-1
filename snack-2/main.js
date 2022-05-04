// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 1. chiedo all'utente prima una parola, poi un'altra
let firstWord = prompt("Inserisci una parola");
let secondWord = prompt("Inserisci un'altra parola");

// 2. stampo prima la parola più corta, poi quella più lunga
if ( firstWord.length > secondWord.length ) {
    console.log(secondWord);
    console.log(firstWord);
} else if ( firstWord.length < secondWord.length ) {
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log("pari");
}
