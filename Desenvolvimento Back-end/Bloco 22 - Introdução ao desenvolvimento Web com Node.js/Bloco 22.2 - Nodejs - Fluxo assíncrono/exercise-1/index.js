const simpsons = require('./simpsons.json');
const fs = require('fs');

function showCharactersNamesAndId() {
  return simpsons.forEach(character => console.log(`${character.id} - ${character.name}`));
}

async function showCharacterInfoById(id) {
    return new Promise((resolve, reject) => {
      if (id <= 10 ) resolve(simpsons.find(e => Number(e.id) === Number(id)));
      reject('id não encontrado')
    });
}

// showCharactersNamesAndId();
showCharacterInfoById(10)
  .then((r) => console.log(r))
  .catch((err) => console.log(err));

const data = fs.readFileSync('simpsons.json', 'utf-8');