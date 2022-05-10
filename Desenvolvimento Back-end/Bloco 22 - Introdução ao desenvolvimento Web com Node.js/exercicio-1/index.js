const readlineSync = require('readline-sync');
const imc = require('./imc.js');

const nome = readlineSync.question('Qual o seu nome? ');
const peso = readlineSync.questionFloat('Qual o seu peso? ');
const altura = readlineSync.questionFloat('Qual a sua altura? ');

const classificacaoImc = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso (Magreza)';
    if (imc > 18.5 && Number(imc) < 29.9) return 'Peso normal';
    if (imc > 25 && imc < 29.9) return 'Acima do peso (sobrepeso)';
    if (imc > 30 && imc < 34.9) return 'Obesidade grau I';
    if (imc > 35 && imc < 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III e IV';
};

const imcPessoa = imc(peso, altura);

console.log(
  (
    `Obrigado pelas informações, ${nome}, seu IMC é: ${imcPessoa}.\
     Sua classificação é de ${classificacaoImc(imcPessoa)}.`)
    .replace(/( )+/g, ' '
  )
);
