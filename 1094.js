let input = '10\n10 C\n6 R\n15 S\n5 C\n14 R\n9 C\n6 R\n8 S\n5 C\n14 R'
let lines = input.split('\n')

let indice = 1
let quantidade = parseFloat(lines[0])
let coelhos = 0
let ratos = 0
let sapos = 0

while(indice <= quantidade){

    let caso = lines[indice]
    let tipo = caso.split(' ')
    let numero = parseFloat(tipo[0])

    if(tipo[1] === 'C'){
       coelhos = coelhos + numero
    }

    if(tipo[1] === 'R'){
        ratos = ratos + numero
    }

    else if(tipo[1] === 'S'){
        sapos = sapos + numero
    }

    indice = indice + 1
}

let cobaias = coelhos + ratos + sapos
let percentual_c = (coelhos / cobaias) * 100
let percentual_r = (ratos / cobaias) * 100
let percentual_s = (sapos / cobaias) * 100

console.log('Total: ' + cobaias + ' cobaias')
console.log('Total de coelhos: ' + coelhos)
console.log('Total de ratos: ' + ratos)
console.log('Total de sapos: ' + sapos)
console.log('Percentual de coelhos: ' + percentual_c.toFixed(2) + ' %')
console.log('Percentual de ratos: ' + percentual_r.toFixed(2) + ' %')
console.log('Percentual de sapos: ' + percentual_s.toFixed(2) + ' %')

