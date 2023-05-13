let input = '6.0 6.0 10.0'
let lines = input.split(' ')

let v1 = parseFloat(lines[0])
let v2 = parseFloat(lines[1])
let v3 = parseFloat(lines[2])
let a = null
let b = null
let c = null

if(v1 > v2 && v1 > v3){

    a = v1

}

else{

    if(v2 > v1 && v2 > v3){

        a = v2

    }

    else{

        a = v3
            
    }
}

if(v1 === a ){
    b = v2
    c = v3
}
else{
    b = v1
    if(v2 === a){
        c = v3
    }
    else{
        c = v2
    }
}

let retangulo = (a * a) === (b * b) + (c * c)
let obtusangulo = (a * a) > ((b * b) + (c * c))
let acutangulo = (a * a) < ((b * b) + (c * c))

if(a >= b + c){
    console.log('NAO FORMA TRIANGULO')
}
else{

    if(retangulo){
        console.log('TRIANGULO RETANGULO')
    }
    else{
        if(obtusangulo){
            console.log('TRIANGULO OBTUSANGULO')
        }
        else{
            if(acutangulo){
                console.log('TRIANGULO ACUTANGULO')
            }
        }

        if(a === b && a === c && b === c ){
            console.log('TRIANGULO EQUILATERO')
        }
        else{
            if(a !== b || a !== c || b !== c){
                console.log('TRIANGULO ISOSCELES')
            }
        }
    }

}