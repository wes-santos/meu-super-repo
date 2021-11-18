document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "green";
document.querySelector('#primeiroFilhoDoFilho').innerText = "Tentando adicionar um texto";
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').firstElementChild.nextElementSibling.nextSibling.nextSibling;
document.getElementById('elementoOndeVoceEsta').appendChild(document.createElement('div'));
document.getElementById('pai').appendChild(document.createElement('section'));

let paragraph = document.createElement('p');

document.getElementById('primeiroFilhoDoFilho').appendChild(paragraph);
paragraph.id = "filhoDoPrimeiroFilhoDoFilho";

document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling;

let start = document.getElementById('paiDoPai').firstElementChild;

console.log(start.children);
// start.removeChild(document.getElementById('primeiroFilho'));
// start.removeChild(document.getElementById('segundoEUltimoFilhoDoFilho'));

//    element.removeChild(element.children[index]);