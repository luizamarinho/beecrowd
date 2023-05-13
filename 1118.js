let input = "-3.5\n3.5\n11.0\n10.0\n4\n1\n8.0\n9.0\n2";
let lines = input.split("\n");

let indice = 0;
let sair = false;

while (sair === false) {
  let validas = 0;
  let soma = 0;

  while (validas < 2) {
    let nota = parseFloat(lines[indice]);

    if (nota >= 0 && nota <= 10) {
      validas += 1;
      soma = soma + nota;
    } else {
      console.log("nota invalida");
    }

    indice += 1;
  }

  let media = soma / 2;
  console.log("media = " + media.toFixed(2));

  console.log("novo calculo (1-sim 2-nao)");

  while (lines[indice] !== "1" && lines[indice] !== "2") {
    console.log("novo calculo (1-sim 2-nao)");
    indice = indice + 1;
  }

  if (lines[indice] === "2") {
    sair = true;
  } else {
    indice = indice + 1;
  }
}
