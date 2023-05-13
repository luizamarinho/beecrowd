let input = "-3.5\n3.5\n11.0\n10.0";
let lines = input.split("\n");

let validas = 0;
let indice = 0;
let soma = 0;

while (validas < 2) {
  let nota = parseFloat(lines[indice]);

  if (nota >= 0 && nota <= 10) {
    validas = validas + 1;
    soma = soma + nota;
  } else {
    console.log("nota invalida");
  }

  indice = indice + 1;
}

console.log("media = " + (soma / 2).toFixed(2));
