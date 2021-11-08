const valorCusto = 50;
const valorVenda = 75;
const valorCustoTotal = valorCusto * 0.20;

if (valorCusto < 0 || valorVenda < 0 || valorCustoTotal < 0) {
    console.log("Erro! Valor inválido.");
} else {
    console.log(valorVenda - valorCustoTotal);
}
