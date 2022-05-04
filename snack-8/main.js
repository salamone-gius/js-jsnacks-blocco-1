//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// 1. creo un array di numeri interi
const numbers = [2, 4, 6, 8, 10];

// // 2. creo una variabile con valore 0
let sum = 0;

// 3. creo un ciclo di controllo degli elementi dell'array numbers
for (let i = 0; i < numbers.length; i++) {
    // SE l'indice è dispari aggiungo l'elemento alla variabile sum
    if ((i % 2) === 1) {
        sum += numbers[i];
        console.log(sum);
    }
}