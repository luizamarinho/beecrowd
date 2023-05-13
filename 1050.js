let input = '11'
let lines = input.split('\n')

let ddd = parseFloat(lines[0])
let destino = null

if(ddd === 61){
    destino = 'Brasilia'
}

else if(ddd === 71){
    destino = 'Salvador'
}

else if(ddd === 11){
    destino = 'Sao Paulo'
}

else if(ddd === 21){
    destino = 'Rio de Janeiro'
}

else if(ddd === 32){
    destino = 'Juiz de Fora'
}

else if(ddd === 19){
    destino = 'Campinas'
}

else if(ddd === 27){
    destino = 'Vitoria'
}

else if(ddd === 31){
    destino = 'Belo Horizonte'
}

else{
    destino = 'DDD nao cadastrado'
}

console.log(destino)