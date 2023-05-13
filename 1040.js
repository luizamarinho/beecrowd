let input = '2.0 4.0 7.5 8.0\n6.4'

var lines = input.split('\n');

let notas = lines[0].split(' ')

let nota1 = parseFloat(notas[0])

let nota2 = parseFloat(notas[1])

let nota3 = parseFloat(notas[2])

let nota4 = parseFloat(notas[3])

let media = (((nota1*2)+(nota2*3)+(nota3*4)+(nota4*1)) /10)

console.log('Media: '+ media.toFixed(1))

if(media >= 7.0){

    console.log('Aluno aprovado.')

}
else {

    if(media < 5.0){

        console.log('Aluno reprovado.')

    }
    else {

        console.log('Aluno em exame.')
        let exame = parseFloat(lines[1])
        console.log('Nota do exame: '+ exame.toFixed(1))
        let media2 = ((exame + media) / 2)

        if(media2 >= 5.0){

            console.log('Aluno aprovado.')

        }
        else{
            console.log('Aluno reprovado.')
        }

        console.log('Media final: ' + media2.toFixed(1))

    }

}

