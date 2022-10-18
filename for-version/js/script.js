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

for(i = 0; i < listaSpesa.length; i++){
    outputList.innerHTML += `<li> ${listaSpesa[i]} </li>`;
}

