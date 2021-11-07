let state = "aprovada";

switch (state){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;

    case "lista":
        console.log("Você está na lista de espera, não desista!");
        break;

    case "reprovada":
        console.log("Poxa, infelizmente você foi reprovada(o), mas continue tentando!");
        break;
        
    default:
        console.log("não se aplica");
}