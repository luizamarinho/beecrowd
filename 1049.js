let input = 'vertebrado\nmamifero\nonivoro'
let lines = input.split('\n')

let tipo1 = lines[0]
let tipo2 = lines[1]
let tipo3 = lines[2]
let animal = null

if(tipo1 === 'vertebrado' && tipo2 === 'ave' && tipo3 === 'carnivoro'){
    animal = 'aguia'
}

else if(tipo1 === 'vertebrado' && tipo2 === 'ave' && tipo3 === 'onivoro'){
    animal = 'pomba'
}

else if(tipo1 === 'vertebrado' && tipo2 === 'mamifero' && tipo3 === 'onivoro'){
    animal = 'homem'
}

else if(tipo1 === 'vertebrado' && tipo2 === 'mamifero' && tipo3 === 'herbivoro'){
    animal = 'vaca'
}

else if(tipo1 === 'invertebrado' && tipo2 === 'inseto' && tipo3 === 'hematofago'){
    animal = 'pulga'
}

else if(tipo1 === 'invertebrado' && tipo2 === 'inseto' && tipo3 === 'herbivoro'){
    animal = 'lagarta'
}

else if(tipo1 === 'invertebrado' && tipo2 === 'anelideo' && tipo3 === 'hematofago'){
    animal = 'sanguessuga'
}

else if(tipo1 === 'invertebrado' && tipo2 === 'anelideo' && tipo3 === 'onivoro'){
    animal = 'minhoca'
}


console.log(animal)
