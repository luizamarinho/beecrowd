let input = '10\n18';
let lines = input.split('\n');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let inicial = null;
let final = null;

if (a < b) {
  inicial = a;
  final = b;
} else {
  inicial = b;
  final = a;
}

let numero = inicial + 1;

while (numero < final) {
  if (numero % 5 === 2 || numero % 5 === 3) {
    console.log(numero);
  }

  numero += 1;
}
