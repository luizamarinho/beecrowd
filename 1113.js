let input = '5 4\n7 2\n3 8\n2 2'
let lines = input.split('\n')

let indice = 0
let encontrou = false

while(encontrou === false){

    let duplas = lines[indice].split(' ')

    let x = parseFloat(duplas[0])
    let y = parseFloat(duplas[1])

    if(x === y){
        encontrou = true
    }
    else if(x > y){

        console.log('Decrescente')
        
    }

    else if(y < x){
    
        console.log('Crescente')
        
    }

    indice = indice + 1
}
