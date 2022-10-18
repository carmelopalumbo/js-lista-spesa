// js

const listaSpesa = [
    'Pane',
    'Pasta',
    'Acqua',
    'Mozzarelle',
    'Biscotti',
    'Coca Cola',
    'Prosciutto',
    'Piatti',
    'Tovaglioli',
    'Detersivo'
];

let outputList = document.getElementById('lista');
let c = 0;

while(c < listaSpesa.length){
    outputList.innerHTML += `<li> ${listaSpesa[c]} </li>`;
    c++;
}

