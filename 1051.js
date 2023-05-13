let input = '3002.00'
let lines = input.split(' ')

let renda = parseFloat(lines[0])
let imposto = null
let parte1 = 0
let parte2 = null
let parte3 = null
let parte4 = null

if(renda <= 2000){
    parte2 = 0
    parte3 = 0
    parte4 = 0
} 

else if(renda <= 3000){
    parte2 = (renda - 2000) * 0.08
    parte3 = 0
    parte4 = 0
}

else if(renda <= 4500){
    parte2 = 1000 * 0.08
    parte3 = (renda - 3000) * 0.18
    parte4 = 0

}

else if(renda > 4500){
    parte2 = 1000 * 0.08
    parte3 = 1500 * 0.18
    parte4 = (renda - 4500) * 0.28

}

imposto = parte1 + parte2 + parte3 + parte4

if(imposto === 0){
    console.log('Isento')
}

else{
    console.log('R$ ' + imposto.toFixed(2))
}

