const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo(if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope); 
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// function returnFactorial(num) {
//   let result = num;
//   if (num > 0) {
//     for (let i = num; i > 1; i -= 1) {
//      result = result * (i - 1);
//     }
//     return console.log(result);
//   }
// }

const returnFactorial = (num) => num > 0 ? num * returnFactorial(num - 1) : 1;

// console.log(returnFactorial(2));

// function longestWord (frase) {
//   let arrFrase = frase.split(' ');
//   let result;
//   for (const i in arrFrase) {
//     if (i > 0 && arrFrase[i] > arrFrase[i - 1]) {
//       result = arrFrase[i];
//     }
//   }
//   console.log(result);
// }

const longestWord = (frase) => {
  const arrFrase = frase.split(' ');
  let result;
  for (const i in arrFrase){i > 0 && arrFrase[i] > arrFrase[i - 1] ? result = arrFrase[i] : false;}
  return result;
}

// console.log(longestWord('Qual a maior palavra ?'));

// const clickCount = document.getElementById('clickCount');
// const button = document.getElementById('button');
// let counter = 0;


// button.addEventListener('click', (event) => clickCount.innerText = counter += 1);

const showFrase = (param) => `Tryber ${param} aqui!`;

const skills = [' HTML', ' CSS', ' JavaScript', ' Lógica de Programação', ' Dormir']; 

const showFraseAndSkills = (param) => `${showFrase(param)} Minhas principais habilidades são: ${skills.sort()}`;

console.log(showFraseAndSkills('João'));