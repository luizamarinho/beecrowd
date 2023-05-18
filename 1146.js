let input = '5\n10\n3\n0'
let lines = input.split('\n')

let indice = 0
let encontrou = false

while(encontrou === false){

    let entrada = parseFloat(lines[indice])

    console.log('funcionou')

    let arquivo = 0

    while(arquivo < entrada){
        arquivo = arquivo + 1
        console.log(arquivo)
    }

    if(entrada === 0){
        encontrou = true
    }
    indice = indice + 1
}