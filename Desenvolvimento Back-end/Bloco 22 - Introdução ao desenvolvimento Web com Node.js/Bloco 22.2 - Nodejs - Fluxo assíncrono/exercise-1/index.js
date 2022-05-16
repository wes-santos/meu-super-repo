const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

function showCharactersNamesAndId() {
  return simpsons.forEach(character => console.log(`${character.id} - ${character.name}`));
}

async function showCharacterInfoById(id) {
    return new Promise((resolve, reject) => {
      if (id <= 10 ) resolve(simpsons.find(e => Number(e.id) === Number(id)));
      reject('id não encontrado')
    });
}

function removeCharacters() {
  return simpsons.filter(character => character.id !== '10').filter(character => character.id !== '6');
}

function changeSimpsonsArchive() {
  const newJson = JSON.stringify(removeCharacters());
  fs.writeFile('./simpsons.json', newJson);
}

// showCharactersNamesAndId();
// showCharacterInfoById(10)
//   .then((r) => console.log(r))
//   .catch((err) => console.log(err));

changeSimpsonsArchive();

const data = fs.readFile('./simpsons.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo simpsons.json\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

data.then(content => console.log(content)).catch(error => console.log(error));
