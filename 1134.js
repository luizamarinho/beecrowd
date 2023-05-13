let input = '8\n1\n7\n2\n2\n4';
let lines = input.split('\n');

let indice = 0;
let sair = false;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (sair === false) {
  let entrada = parseFloat(lines[indice]);

  if (entrada >= 1 || entrada <= 4) {
    if (entrada === 1) {
      alcool += 1;
    }

    if (entrada === 2) {
      gasolina += 1;
    }

    if (entrada === 3) {
      diesel += 1;
    }

    if (entrada === 4) {
      sair = true;
    }
  }

  indice += 1;
}

console.log('MUITO OBRIGADO');
console.log('Alcool: ' + alcool);
console.log('Gasolina: ' + gasolina);
console.log('Diesel: ' + diesel);
