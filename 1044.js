let input = '6 24'
var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])

if(b % a === 0 || a % b === 0){
    console.log('Sao Multiplos')
}
else{
    if(b % a !== 0 || a % b !== 0){
        console.log('Nao sao Multiplos')
    }
}