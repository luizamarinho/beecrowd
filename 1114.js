let input = '2200\n1020\n2022\n2002'
let lines = input.split('\n')

let indice = 0
let correta = false


while(correta === false){

let senha = parseFloat(lines[indice])

if(senha !== 2002){
    correta = false
    console.log('Senha Invalida')
}
else{
    correta = true
    console.log('Acesso Permitido')
}

indice = indice + 1

}