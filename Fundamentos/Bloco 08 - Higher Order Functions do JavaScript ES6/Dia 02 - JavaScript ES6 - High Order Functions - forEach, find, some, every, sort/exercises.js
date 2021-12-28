const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. 
function authorBornIn1947(element) {
  if (element.author.birthYear === 1947) {
    console.log(element.author.name);
  }
}

// books.find(authorBornIn1947);

// 2 - Retorne o nome do livro de menor nome.
let nameBook = '';

function smallerName(book) {
  if (book.name.length > nameBook.length) {
    nameBook = book.name;
  }
}

// books.forEach(smallerName);
// console.log(nameBook);

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres. 
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook(book, index) {
//   if (book.name.length === 26) {
//     console.log(books[index]);
//   }
// }

// books.some(getNamedBook);

// 4 - Ordene os livros por data de lançamento em ordem decrescente
// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// Referência ao MDN para aplicação do sort na ordenação por valor de uma chave de objeto:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function booksOrderedByReleaseYearDesc(a, b) {
  if (a.releaseYear > b.releaseYear) {
    return -1;
  };
  if (a.releaseYear < b.releaseYear) {
    return 1
  }
  return 0;
}

// console.log(books.sort(booksOrderedByReleaseYearDesc));

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. 
function everyoneWasBornOnSecXX(element) {
  if (element.author.birthYear >= 1901 && element.author.birthYear <= 2000) {
    return true;  
  }
  return false;
}

// console.log(books.every(everyoneWasBornOnSecXX));

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário. 
function someBookWasReleaseOnThe80s(element) {
  if (element.releaseYear >= 1980 && element.releaseYear <= 1989) {
    return true;
  }
  return false;
}

// console.log(books.some(someBookWasReleaseOnThe80s));

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário. 
const expectedResult = false;

let birthYears = [];

books.forEach((element, index) => {
  birthYears.push(books[index].author.birthYear);
});

birthYears.reverse();

function authorUnique(element, index) {
  if (element.author.birthYear === birthYears[index]) {
   return false;
  }
  return true;
}

console.log(books.every(authorUnique));
