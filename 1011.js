let input = '3'

let lines = input.split('\n');

let pi = 3.14159

let raio = parseFloat(lines[0])

let area = (4/3) * (pi) * (raio*raio*raio)

console.log("VOLUME = " + area.toFixed(3))