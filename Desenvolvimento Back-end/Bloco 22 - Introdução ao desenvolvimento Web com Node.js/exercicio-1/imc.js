// Math.pow reference:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
const calcImc = (peso, altura) => {
  return (peso / Math.pow(altura, 2)).toFixed(2);
}

module.exports = calcImc;
