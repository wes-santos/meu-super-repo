let caixaDeTexto = document.getElementById('caixaDeTexto');
let textoCapturado = document.getElementById('textoDigitado');
let inputDoTexto = document.getElementById('inputDoTexto'); 
let backgroundColorInput = document.getElementById('backgroundColorInput');
let fontSizeInput = document.getElementById('fontSizeInput');
let fontColorInput = document.getElementById('fontColorInput');
let lineHeightInput = document.getElementById('lineHeightInput');
let fontFamilyInput = document.getElementById('fontFamilyInput');
let instructionsInput = document.getElementById('instructionsInput');
let instructionsText = document.getElementsByTagName('h3');

// TEXTO PRINCIPAL
function captureDoTexto() {
    textoCapturado.innerText = inputDoTexto.value;
}

inputDoTexto.addEventListener('keyup', captureDoTexto);

// BACKGROUND COLOR
function captureBackgroundColor() {
    document.body.style.backgroundColor = backgroundColorInput.value;
}

backgroundColorInput.addEventListener('keyup', captureBackgroundColor);

// FONT-SIZE
function captureFontSize() {
    textoCapturado.style.fontSize = fontSizeInput.value + "px";
}

fontSizeInput.addEventListener('keyup', captureFontSize);

// FONT COLOR
function captureFontColor() {
    textoCapturado.style.color = fontColorInput.value;
}

fontColorInput.addEventListener('keyup', captureFontColor);

// LINE HEIGHT
function captureLineHeight() {
    textoCapturado.style.lineHeight = lineHeightInput.value + "px";
}

lineHeightInput.addEventListener('keyup', captureLineHeight);

// FONT FAMILY
function captureFontFamily() {
    textoCapturado.style.fontFamily = fontFamilyInput.value;
}

fontFamilyInput.addEventListener('keyup', captureFontFamily);

// INSTRUÇÕES
function changeInstructionsColor() {
    for (let i = 0; i < instructionsText.length; i +=1) {
        instructionsText[i].style.color = instructionsInput.value;
    }
    document.getElementsByTagName('h2')[0].style.color = instructionsInput.value;
}

instructionsInput.addEventListener('keyup', changeInstructionsColor);

console.log(instructionsText);