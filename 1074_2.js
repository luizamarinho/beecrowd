let input = '4\n-5\n0\n3\n-4'
let lines = input.split('\n')

let entrada = parseFloat(lines[0])
let numero = 1

while(numero <= entrada){

    let numero = parseFloat(lines[numero])

    if(numero === 0){
        console.log('NULL')
    }
    else if(numero % 2 === 0){
        if(numero > 0){
            console.log('EVEN POSITIVE')
        }
        else{
            console.log('EVEN NEGATIVE')
        }
        
    }
    else{
        if(numero > 0){
            console.log('ODD POSITIVE')
        }
        else{
            console.log('ODD NEGATIVE')
        }
    }
   
    numero = numero + 1
}
