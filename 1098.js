let i = 0

while(i <= 2){

    let j = 1
    let final = j + 2

    while(j <= final ){
        let print_i = i.toFixed(1)
        let print_j = (j + i).toFixed(1)

        if(print_i.endsWith('.0')){
            print_i = print_i.split('.')[0]
        }

        if(print_j.endsWith('.0')){
            print_j = print_j.split('.')[0]
        }

        console.log('I=' + print_i + ' J=' + print_j)
        j = j + 1
    }
    
    i = i + 0.2
}