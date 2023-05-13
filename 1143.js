let input = '5';
let quantidade = parseFloat(input);

let indice = 1;

while (indice <= quantidade) {
  console.log(
    indice.toString() +
      ' ' +
      (indice * indice).toString() +
      ' ' +
      (indice * indice * indice).toString()
  );

  indice++;
}
