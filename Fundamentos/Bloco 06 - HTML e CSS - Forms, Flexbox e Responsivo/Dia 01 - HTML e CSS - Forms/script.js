const state = document.getElementById('estado');
const startDate = document.getElementById('data-de-inicio');
const submitButton = document.getElementById('enviar-informacoes');
const cleanButton = document.getElementById('limpar-informacoes');
const newInfosPlace = document.getElementById('dados-capturados');
const attributesNames = ['nome', 'email', 'cpf', 'endereco', 'cidade', 'estado', 'tipo', 'cargo', 'descricao', 'data'];

function createStates() {
  const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
//  const statesAbreviation = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
  for (let i = 0; i < 26; i += 1) {
    const createOption = document.createElement('option');
    createOption.value = states[i];
    createOption.innerText = states[i];
    state.appendChild(createOption);
  }
}

// submitButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     event.submit;
//     insertData();
// });
function checkIfUrlChange() {
    if(document.location.search !== '') {
      insertData();
    }
}

function url() {
    return newInfosPlace.innerText;
}

submitButton.addEventListener('click', function () {
    if (url() !== '') {
      alert('Limpe as informações antes de enviar novamente');
    } else {
        checkIfUrlChange()
    }
});
cleanButton.addEventListener('click', function () {
  document.location.search = '';
})

function captureData() {
  const part1 = document.location.search;
  const part2 = part1.split('');
  part2.shift();
  for (let i = 0; i < part2.length; i += 1) {
    if (part2[i] === '+') {
      part2[i] = ' ';
    }
    if (part2[i] === '%' && part2[i + 1] === '4' && part2[i + 2] === '0') {
      part2.splice(i, 1);
      part2.splice(i, 1);
      part2[i] = '@';
    }
    if (part2[i] === '%' && part2[i + 1] === '2' && part2[i + 2] === 'C') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2[i] = ',';
    }
    if (part2[i] === 'n' && part2[i + 1] === 'o' && part2[i + 2] === 'm' && part2[i + 3] === 'e') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'e' && part2[i + 1] === 'm' && part2[i + 2] === 'a' && part2[i + 3] === 'i' && part2[i + 4] === 'l') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'c' && part2[i + 1] === 'p' && part2[i + 2] === 'f') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'e' && part2[i + 1] === 'n' && part2[i + 2] === 'd' && part2[i + 3] === 'e' && part2[i + 4] === 'r' && part2[i + 5] === 'e' && part2[i + 6] === 'c' && part2[i + 7] === 'o') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'c' && part2[i + 1] === 'i' && part2[i + 2] === 'd' && part2[i + 3] === 'a' && part2[i + 4] === 'd' && part2[i + 5] === 'e') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'e' && part2[i + 1] === 's' && part2[i + 2] === 't' && part2[i + 3] === 'a' && part2[i + 4] === 'd' && part2[i + 5] === 'o') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 't' && part2[i + 1] === 'i' && part2[i + 2] === 'p' && part2[i + 3] === 'o') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'r' && part2[i + 1] === 'e' && part2[i + 2] === 's' && part2[i + 3] === 'u' && part2[i + 4] === 'm' && part2[i + 5] === 'o') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'c' && part2[i + 1] === 'a' && part2[i + 2] === 'r' && part2[i + 3] === 'g' && part2[i + 4] === 'o') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'd' && part2[i + 1] === 'e' && part2[i + 2] === 's' && part2[i + 3] === 'c' && part2[i + 4] === 'r' && part2[i + 5] === 'i' && part2[i + 6] === 'c' && part2[i + 7] === 'a' && part2[i + 8] === 'o') { 
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === 'd' && part2[i + 1] === 'a' && part2[i + 2] === 't' && part2[i + 3] === 'a') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
    }
    if (part2[i] === '=') {
        part2.splice(i, 1);
    }
    if (part2[i] === '%' && part2[i + 1] === 'C' && part2[i + 2] === '3' && part2[i + 3] === '%' && part2[i + 4] === 'A' && part2[i + 5] === '3') {
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2.splice(i, 1);
        part2[i] = 'ã';
    }
  }
  const part3 = part2.join('');
  console.log(part3);
  const result = part3.split('&');

  const dados = {
    nome: result[0],
    email: result[1],
    cpf: result[2],
    endereço: result[3],
    cidade: result[4],
    estado: result[5],
    tipo: result[6],
    resumo: result[7],
    cargo: result[8],
    descricaoDoCargo: result[9],
    dataDeInicio: result[10],
  }

  const createParagraph = document.createElement('p');


  return dados;
}

function insertData() {
  for (let i = 0; i < Object.keys(captureData()).length; i += 1) {
    if (Object.keys(captureData())[i] === 'nome') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().nome;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'email') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().email;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'cpf') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().cpf;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'endereco') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().endereco;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'cidade') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().cidade;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'estado') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().estado;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'tipo') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().tipo;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'resumo') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().resumo;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'cargo') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().cargo;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'descricaoDoCargo') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().descricaoDoCargo;
        newInfosPlace.appendChild(creatParagraph);
    }
    if (Object.keys(captureData())[i] === 'dataDeInicio') {
        const creatParagraph = document.createElement('p');
        creatParagraph.innerText = captureData().dataDeInicio;
        newInfosPlace.appendChild(creatParagraph);
    }
  }
  
}

function stylizeButtons() {
    submitButton.addEventListener('mouseover', function () {
        submitButton.style.backgroundColor = 'rgb(240, 240, 240)';
    });
    submitButton.addEventListener('mouseleave', function () {
        submitButton.style.backgroundColor = 'rgb(255, 255, 255)';
    });
    cleanButton.addEventListener('mouseover', function () {
        cleanButton.style.backgroundColor = 'rgb(240, 240, 240)';
    });
    cleanButton.addEventListener('mouseleave', function () {
        cleanButton.style.backgroundColor = 'rgb(255, 255, 255)';
    });
}

window.onload = function () {
  createStates();
  stylizeButtons();
}