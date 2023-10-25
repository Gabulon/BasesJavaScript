const tecnologias=['HTML','CSS','JavaScript','React','Node.js']
const numeros=[10,20,30]

//Filter
nuevoArray=tecnologias.filter(tech =>tech !== 'React')
//comprobar si un elemento eciste en el array
//const resultado=tecnologias.includes('GraphQL')

//some - devuelve si al menos uno cumple con la condicion
//const resultado=numeros.some(numero=>numero>15)

//find Devuelve el primer elemento que cumpla con la condicion
//const resaultado- numeros.find(numero => numero>5)

//Every - Retorna true o false si todos cumplen la condicion
//const resultado = numeros.every(numero => numero >9)

//reduce- Acumuland en el total
//const resultado= numeros.reduce((total,numero)=>mumero+total,0)

//Filter -Crea un nuevo array en base a una condicion
//const resultado=tecnologias.filter(tech =>tech ==='Node.js')
const resultado=numeros.filter(numero =>numero >15)

//Crear un nuevo array
const arrayMap=tecnologias.map(tech =>tech)

console.log(resultado)

