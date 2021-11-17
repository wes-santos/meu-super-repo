console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "green");
console.log(document.querySelector('#primeiroFilhoDoFilho').innerText = "Tentando adicionar um texto");
console.log(document.querySelector('#pai').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
console.log(document.querySelector('#pai').firstElementChild.nextElementSibling.nextSibling.nextSibling);
console.log('Oi');

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let elementoOndeVoceEsta2 = document.createElement('section');
document.appendChild(elementoOndeVoceEsta);


console.log(document.querySelector('#elementoOndeVoceEsta').children);