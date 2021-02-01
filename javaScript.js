// Entrega d'exercici: Javascript Bàsic

console.log("Hola mundo");

//alert("Eric Garcia");

let nom = "Eric";
let cognom = "Garcia";

console.log(nom + " " + cognom);
console.log(`${nom} ${cognom}`);

let numero1 = 2;
let numero2 = 4;

console.log(`La suma entre ${numero1} y ${numero2} és ${numero1 + numero2}`);

function comrpovarNotaExam() {

    let nota_examen = document.getElementById("notaExamen").value;
    console.log(nota_examen);
    if (nota_examen >= 5 && nota_examen <= 10) {
        alert("Molt bé, has aprovat l'examen");
    } else if (nota_examen < 5 && nota_examen >= 0) {
        alert("Ho sento, has suspes");
    } else {
        alert("El valor introduït és incorrecte");
    }
}

function blauVerd() {
    let text = document.getElementById("reemplaçar").innerText;
    console.log(text);
    let cambio = text.replace("blau", "verd");
    document.getElementById("reemplaçar").innerText = cambio;
}

function oPerU() {
    let text = document.getElementById("reemplaçar").innerText;
    console.log(text);
    let cambio = text.replaceAll("o", "u");
    document.getElementById("reemplaçar").innerText = cambio;
}

let llistatObjectes = ["taula", "caidra", "ordinador", "llibreta"];

function arrayObjectes() {
    let i = "";
    let resultat = "";
    for (i in llistatObjectes) {
       resultat += `L'objecte ${llistatObjectes[i]} està a la posició ${llistatObjectes.indexOf(llistatObjectes[i])}
       `;
       document.getElementById("mostrarObjectes").innerText = resultat
    }
}

// Entrega d'Exercici: Lletres Repetides

let nomArray = ["E", "R", "I", "C"];

let i = 0;

for (i in nomArray){
    console.log(nomArray[i]);
}