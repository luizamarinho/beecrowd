let input = '7 8 9 10'
var lines = input.split(' ');

let inicio = parseFloat(lines[0])
let final = parseFloat(lines[2])

let m_inicial = parseFloat(lines[1])
let m_final = parseFloat(lines[3])
inicio = inicio + (m_inicial / 60);
final = final + (m_final / 60);

let duracao = final - inicio

if(inicio === final){ 

    duracao = 24

}

if(duracao < 0){
    duracao = duracao + 24
}

let total_h = Math.floor(duracao)
let total_m = Math.round((duracao % 1) * 60)


console.log('O JOGO DUROU ' + total_h + ' HORA(S) E ' + total_m + ' MINUTO(S)')