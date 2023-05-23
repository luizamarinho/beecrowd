let input = '5';
let entrada = parseFloat(input);
let indice = 0;
let digito_1 = 0;
let digito_2 = 1;

while (indice < entrada) {
  let resultado = digito_1 + digito_2;
  digito_1 = digito_2;
  digito_2 = resultado;
  indice = indice + 1;
}

console.log(resultado);
