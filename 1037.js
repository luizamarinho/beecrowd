let input = '25.00'

var lines = input.split('\n');

let a = parseFloat(lines[0])

if(a >= 0 && a <= 25){

    console.log('Intervalo [0,25]')

}
else{

    if(a > 25 && a <= 50){

        console.log('Intervalo (25,50]')
    
    }
    else{

        if(a > 50 && a <= 75){

            console.log('Intervalo (50,75]')
        
        }
        else{

            if(a > 75 && a <= 100){

                console.log('Intervalo (75,100]')
            
            }
            else{

                console.log('Fora de intervalo')
            
            }

        }

    }
    

}

