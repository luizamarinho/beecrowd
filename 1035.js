let input = '5 6 7 8'

var lines = input.split(' ');

let a = parseFloat(lines[0])

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let d = parseFloat(lines[3])

let x = a % 2

if(b > c && d > a && (c + d > a + b) && c > 0 && d > 0 && (x === 0)) {

    console.log('Valores aceitos')

}
else {

    console.log('Valores nao aceitos')

}