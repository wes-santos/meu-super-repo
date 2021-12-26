const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newPerson = (name) => {
  const arrName = name.toLowerCase().split('');
  for (let index in arrName) {
    if (arrName[index] === ' ') {
      arrName.splice(index, 1)
    }
  }
  const nameToEmail = arrName.join('');
  const person = {
    nomeCompleto: name,
    email: `${nameToEmail}@trybe.com`,
  }
  return person;
}

console.log(newEmployees(newPerson));