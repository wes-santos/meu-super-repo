let arrTeste = [2, 4, 6, 7, 10, 0, -3];

function array (arrTeste) {
    let menorValor = Math.min(...arrTeste);  
    console.log(arrTeste.indexOf(menorValor));

};

array(arrTeste);