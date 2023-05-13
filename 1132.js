let input = '100\n200';
let lines = input.split('\n');

let a = parseFloat(lines[0]);

let b = parseFloat(lines[1]);
let soma = 0;
let inicial = null;
let final = null;

if (a < b) {
  inicial = a;
  final = b;
} else {
  inicial = b;
  final = a;
}

let numero = inicial;

while (numero <= final) {
  if (numero % 13 !== 0) {
    soma += numero;
  }
  numero += 1;
}

console.log(soma);
