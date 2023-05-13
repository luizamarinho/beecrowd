let input = '2 2\n3 -2\n-8 -1\n-7 1\n0 2'
let lines = input.split('\n')

let nulo = false
let indice = 0
let quadrante = null

while(nulo === false){

    let teste = lines[indice].split(' ')

    let x = parseFloat(teste[0])
    let y = parseFloat(teste[1])

    if(x === 0 || y === 0){
        nulo = true
    }
    
    else if(x > 0 && y > 0){
        quadrante = 'primeiro'
        console.log(quadrante)
    }

    else if(x < 0 && y > 0){
        quadrante = 'segundo'
        console.log(quadrante)
    }
    
    else if(x < 0 && y < 0){
        quadrante = 'terceiro'
        console.log(quadrante)
    }

    else if(x > 0 && y < 0){
        quadrante = 'quarto'
        console.log(quadrante)
    }


    indice = indice + 1
}

