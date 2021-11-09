let arr = [];
let resultado = [];

for (let i = 0; i <= 25; i += 1) {
    arr.push(i);
}

for (let i2 = 0; i2 < arr.length; i2 += 1) {
    resultado.push(arr[i2] / 2)
}

console.log(resultado);