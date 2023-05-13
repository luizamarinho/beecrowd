// let input = '7 21 -14'
let input = '-14 21 7'
var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let maior = 0
let menor = 0
let medio = 0

if(a < b && a < c){
    menor = a
}

else{

    if(b < a && b < c){

        menor = b

    }

    else{

        menor = c

    }
} 


if(a > b && a > c){

    maior = a

}

else{

    if(b > a && b > c){

        maior = b

    }

    else{

        maior = c
            
    }
}


if(a !== maior && a !== menor){

    medio = a

}

else{

    if(b !== maior && b !== menor){

        medio = b

    }

    else{

        medio = c
    }
}
console.log(menor)
console.log(medio)
console.log(maior)
console.log('')
console.log(a)
console.log(b)
console.log(c)