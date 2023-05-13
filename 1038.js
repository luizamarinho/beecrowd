let input = '2 3'

var lines = input.split(' ');

let codigo = parseFloat(lines[0])
let quantidade = parseFloat(lines[1])
let preco = 0

if(codigo === 1){

    preco = 4.00

}
else{

    if(codigo === 2){

        preco = 4.50

    }
    else{

        if(codigo === 3){

            preco = 5.00

        }
        else{

            if(codigo === 4){
        
            preco = 2.00

            }
            else{

                if(codigo === 5){

                    preco = 1.50
                
                }

            }
        }
        
    }

}
console.log('Total: R$ ' + (quantidade*preco).toFixed(2))