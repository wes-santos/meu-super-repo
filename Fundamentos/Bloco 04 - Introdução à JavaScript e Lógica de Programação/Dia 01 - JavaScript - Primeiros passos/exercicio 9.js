const a = 60;
const b = 40;
const c = 80;

if (a + b + c === 180) {
    console.log("true");
}
else if (Math.sign(a) === -1 || Math.sign(b) === -1 || Math.sign(c) === -1) {
    console.log("erro");
}
else if (a + b + c !== 180) {
    console.log("false");
}
