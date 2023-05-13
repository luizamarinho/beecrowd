let input = '6.0 4.0 2.0'
var lines = input.split(' ');

let v1 = parseFloat(lines[0])
let v2 = parseFloat(lines[1])
let v3 = parseFloat(lines[2])
let a = null
let b = null
let c = null

if(v1 > v2 && v1 > v3){

    a = v1

}

else{

    if(v2 > v1 && v2 > v3){

        a = v2

    }

    else{

        a = v3
            
    }
}

if(v1 === a ){
    b = v2
    c = v3
}
else{
    b = v1
    if(v2 === a){
        c = v3
    }
    else{
        c = v2
    }
}

if(a >= b + c){
    let x = ((a + b)*c)/2
    console.log('Area = ' + x.toFixed(1))
}
else{
    let y = (a+b+c)
    console.log('Perimetro = ' + y.toFixed(1))
}