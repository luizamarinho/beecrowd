let input = '3 99';
let lines = input.split(' ');

let principal = parseFloat(lines[0]);
let final = parseFloat(lines[1]);
let indice = 0;
let sequencia = '';

while (indice < final) {
  sequencia = sequencia + (indice + 1);

  if ((indice + 1) % principal === 0) {
    console.log(sequencia);
    sequencia = '';
  } else {
    sequencia = sequencia + ' ';
  }

  indice += 1;
}
