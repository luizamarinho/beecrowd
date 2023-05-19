let input = '5\n10\n3\n0';
let lines = input.split('\n');

let indice = 0;
let encontrou = false;

while (encontrou === false) {
  let entrada = parseFloat(lines[indice]);

  if (entrada !== 0) {
    let indice_2 = 0;
    let sequencia = '';

    while (indice_2 < entrada) {
      sequencia = sequencia + (indice_2 + 1);
      if (indice_2 + 1 !== entrada) {
        sequencia = sequencia + ' ';
      }
      indice_2 = indice_2 + 1;
    }

    console.log(sequencia);

    indice = indice + 1;
  } else {
    encontrou = true;
  }
}
