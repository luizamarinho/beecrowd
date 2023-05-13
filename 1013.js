let input = '7 14 106\n'

var lines = input.split(' ');

let a = parseFloat(lines[0])

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let g = Math.abs(a-b)

let h = (a+b+g)/2

let j = Math.abs(h-c)

let k = (h+c+j)/2

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(h + ' eh o maior')
console.log(k + ' eh o maior')