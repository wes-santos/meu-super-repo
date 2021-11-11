let arrTeste = [2, 3, 6, 7, 10, 1];

function array (arrTeste) {
    let maiorValor = Math.max(...arrTeste);  
    console.log(arrTeste.indexOf(maiorValor));

}

array(arrTeste)