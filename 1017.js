let input = '10\n85'

var lines = input.split('\n');

let t = parseFloat(lines[0])

let v = parseFloat(lines[1])

let s = v*t

let x = s/12

console.log(x.toFixed(3))