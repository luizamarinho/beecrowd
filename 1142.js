let input = '7';
let quantidade = parseFloat(input) * 4;

let indice = 0;

while (indice < quantidade) {
  let numero_primeiro = indice + 1;
  let numero_segundo = indice + 2;
  let numero_terceiro = indice + 3;

  console.log(
    numero_primeiro.toString() +
      ' ' +
      numero_segundo.toString() +
      ' ' +
      numero_terceiro.toString() +
      ' PUM'
  );
  indice += 4;
}
