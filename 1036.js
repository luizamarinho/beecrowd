let input = '10.3 3.0 5.0'

var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let delta = (b * b) -4 * a * c

if (delta < 0 || a === 0) {

    console.log('Impossivel calcular')

}
else {

    let y = Math.sqrt(delta)

    let x1 = (-b + y) / (2 * a)

    let x2 = (-b - y) / (2 * a)

    console.log('R1 = ' + x1.toFixed(5))
    console.log('R2 = ' + x2.toFixed(5))
}

