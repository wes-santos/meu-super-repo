let peca = "";

if (peca.toLowerCase() === "bispo") {
    console.log("diagonal");
}
else if (peca.toLowerCase() === "cavalo") {
    console.log("Movimento em forma de L, duas casas em sentido horizontal e mais uma na vertical ou vice-versa")
}
else if (peca.toLowerCase() === "rei" || peca.toLowerCase() === "rainha" || peca.toLowerCase() === "dama") {
    console.log("Horizontal, vertical e diagonal");
}
else if (peca.toLowerCase() === "torre") {
    console.log("Horizontal ou vertical");
}
else if (peca.toLowerCase() === "peão") {
    console.log("horizontal")
}
else {
    console.log("Peça não encontrada no tabuleiro");
}