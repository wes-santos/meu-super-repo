// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
  
function flatten(acc, curr) {
  return [acc + " " + curr];
}

const newArray = arrays.reduce(flatten);

console.log(newArray);