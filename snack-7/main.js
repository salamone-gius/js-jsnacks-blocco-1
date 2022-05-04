// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// 1. creo una lista di nomi e una di cognomi
let names = ["Giuseppe", "Giovanni", "Gianluca"];
let surnames = ["Salamone", "Mura", "Parisi"];

// 2. genero una lista di nomi e cognomi
// console.log(`${names[0]} ${surnames[0]}, ${names[1]} ${surnames[1]}, ${names[2]} ${surnames[2]}`);

// 2.bis genero una lista di nomi e cognomi
// let list = [...names,...surnames];
// console.log(list);

// 2.corretto genero una lista di nomi e cognomi
let random = [];

for (let i = 0; i < 3; i++) {
    let indexNames = Math.floor(Math.random() * 3);
    let indexSurnames = Math.floor(Math.random() * 3);
    random.push(`${names[indexNames]} ${surnames[indexSurnames]}`);
}

console.log(random);