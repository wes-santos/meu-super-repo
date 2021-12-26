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



let removeElements = {
    removePrimeroFilho: start.removeChild(start.children[0]),
    removeTerceiroFilho: start.removeChild(start.children[1]),
    removeQuartoEUltimoFilho: start.removeChild(start.children[1]),
    removeSection: start.removeChild(start.children[1]),
    removeText1: start.children[0].removeChild(start.children[0].childNodes[0]),
    removeText2: start.children[0].removeChild(start.children[0].childNodes[1]),
    removeSegundoEUltimoFilhoDoFilho: start.children[0].removeChild(start.children[0].childNodes[1]),
    removeText3: start.children[0].removeChild(start.children[0].childNodes[1]),
    removeDiv: start.children[0].removeChild(start.children[0].childNodes[1]),
    removeText4: start.children[0].firstElementChild.innerText = "",
    // removeText5: start.nextSibling.innerText = "",
}

console.log(start.childNodes[3].innerText = "");

// Elementos para remover: primeiroFilho, segundoEUltimoFilhoDoFilho, terceiroFilho e quartoEUltimoFilho

// start.removeChild(document.getElementById('primeiroFilho'));
// start.removeChild(document.getElementById('segundoEUltimoFilhoDoFilho'));

//    element.removeChild(element.children[index]);