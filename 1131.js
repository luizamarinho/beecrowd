let input = '3 2\n1\n2 3\n1\n3 1\n2';
let lines = input.split('\n');

let sair = false;
let indice = 0;
let acumulados_i = 0;
let acumulados_g = 0;
let vitorias_i = 0;
let vitorias_g = 0;
let empates = 0;
let grenais = 0;

while (sair === false) {
  grenais += 1;
  let jogos = lines[indice].split(' ');
  let comando = lines[indice + 1];

  let inter = parseFloat(jogos[0]);
  let gremio = parseFloat(jogos[1]);

  acumulados_i += inter;
  acumulados_g += gremio;

  console.log('Novo grenal (1-sim 2-nao)');

  if (inter === gremio) {
    empates += 1;
  } else if (inter > gremio) {
    vitorias_i += 1;
  } else {
    vitorias_g += 1;
  }

  if (comando === '2') {
    sair = true;
  }

  indice = indice + 2;
}

if (vitorias_i > vitorias_g) {
}

console.log(grenais + ' grenais');
console.log('Inter:' + vitorias_i);
console.log('Gremio:' + vitorias_g);
console.log('Empates:' + empates);

if (vitorias_i === vitorias_g) {
  console.log('Nao houve vencedor');
} else if (vitorias_i > vitorias_g) {
  console.log('Inter venceu mais');
} else {
  console.log('Gremio venceu mais');
}
