//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// 1. creo due array che hanno numero di elementi diversi
let longerList = ["uno", "due", "tre", "quattro", "cinque"];
let shorterList = ["uno", "due", "tre"];
console.log(longerList);
console.log(shorterList);

// 2. creo un ciclo di controllo che si ripete tante volte quanti sono gli elementi di longerList
for (let i = 0; i < longerList.length; i++) {
    // 3. SE la lunghezza di shorterList è inferiore a longerList, aggiungo un "altro elemento" a shorterList
    if (shorterList.length < longerList.length) {
        shorterList.push("altro elemento");
    }
}

console.log(shorterList);