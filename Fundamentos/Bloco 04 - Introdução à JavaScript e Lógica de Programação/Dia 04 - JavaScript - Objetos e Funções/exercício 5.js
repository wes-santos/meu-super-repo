let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};

let mensagem = [];

for (let key in info) { 
    mensagem.push(info[key] + " e " + info2[key]);
};

mensagem[mensagem.length - 1] = "Ambos recorrentes";

for (let i = 0; i < mensagem.length; i += 1) {
    console.log(mensagem[i]);
};

/*
console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
if (info.recorrente === info2.recorrente) {
    console.log("Ambos recorrentes");
}
*/