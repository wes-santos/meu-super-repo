const fs = require('fs').promises;

function readSimpsonsFile() {
  return fs.readFile('./simpsons.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(`Não foi possível ler o arquivo simpsons.json\n Erro: ${err}`);
      process.exit(1);
    }
    data;
  })
}

const simpsons = readSimpsonsFile()
  .then(content => JSON.parse(content))
  .catch(error => error);

async function showCharactersNamesAndId() {
  const data = await simpsons;
  return await data.forEach(character => console.log(`${character.id} - ${character.name}`));
}

async function showCharacterInfoById(id) {
    return new Promise((resolve, reject) => {
      if (id <= 10 ) resolve(simpsons.find(e => Number(e.id) === Number(id)));
      reject('id não encontrado')
    });
}

async function removeCharacters() {
  const data = await simpsons;
  return await data.filter(character => character.id !== '10').filter(character => character.id !== '6');
}

function changeSimpsonsArchive() {
  const newJson = JSON.stringify(removeCharacters());
  fs.writeFile('./simpsons.json', newJson);
}

async function createSimpsonsFamilyFile() {
  const data = await simpsons;
  const result = data.filter(character => character.id <= 4);
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
}

async function addCharacter() {
  const data = await simpsons;
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(`Não foi possível ler o arquivo simpsonsFamily.json\n Erro: ${err}`);
      process.exit(1);
    }
    data;
  })
  const nelsonMuntz = data.find(character => character.name === 'Nelson Muntz');
  const result = [...JSON.parse(simpsonsFamily), nelsonMuntz];
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
}

// showCharactersNamesAndId();
// showCharacterInfoById(10)
//   .then((r) => console.log(r))
//   .catch((err) => console.log(err));

// changeSimpsonsArchive();
// createSimpsonsFamilyFile();
addCharacter();
