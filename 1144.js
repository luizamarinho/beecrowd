let input = '5';

let entrada = parseFloat(input);

let indice = 1;

while (indice <= entrada) {
  console.log(indice + ' ' + indice * indice + ' ' + indice * indice * indice);
  console.log(
    indice + ' ' + (indice * indice + 1) + ' ' + (indice * indice * indice + 1)
  );

  indice += 1;
}
