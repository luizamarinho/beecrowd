let input = '7 14 106'
var lines = input.split(' ');

let a = parseFloat(lines[0])

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let g = Math.abs(a-b)

let h = (a+b+g)/2

let i = Math.abs(h-c)

let j = (h+c+i)/2 

console.log(j + ' eh o maior')