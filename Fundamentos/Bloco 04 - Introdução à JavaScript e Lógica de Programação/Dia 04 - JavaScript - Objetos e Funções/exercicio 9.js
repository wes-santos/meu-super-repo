function verificaPalindromo(string) {
    if (string.split('').reverse().join('') === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo('arara'));
