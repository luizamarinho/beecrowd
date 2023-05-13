let input = '0 0'
var lines = input.split(' ');

let inicio = parseFloat(lines[0])
let final = parseFloat(lines[1])

let duracao = final - inicio

if(inicio === final){

    duracao = 24

}

if(duracao < 0){
    duracao = duracao + 24
}


console.log('O JOGO DUROU ' + duracao + ' HORA(S)')