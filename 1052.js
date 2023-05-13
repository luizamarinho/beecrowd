let input = '4'
let lines = input.split(' ')

let entrada = parseFloat(lines[0])
let mes = null

if(entrada === 1){
    mes = 'January'
}

else if(entrada === 2){
    mes = 'February'
}

else if(entrada === 3){
    mes = 'March'
}

else if(entrada === 4){
    mes = 'April'
}

else if(entrada === 5){
    mes = 'May'
}

else if(entrada === 6){
    mes = 'June'
}

else if(entrada === 7){
    mes = 'July'
}

else if(entrada === 8){
    mes = 'August'
}

else if(entrada === 9){
    mes = 'September'
}

else if(entrada === 10){
    mes = 'October'
}

else if(entrada === 11){
    mes = 'November'
}

else if(entrada === 12){
    mes = 'December'
}

console.log(mes)