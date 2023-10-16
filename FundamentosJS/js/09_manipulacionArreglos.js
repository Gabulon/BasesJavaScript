// operaciones en los arreglos

const tecnologias=['HTML','CSS','JavaScript','React','Node.js']

//Añadir elementos al array
//tecnologias.push('TypeScript')//añade al fianl del array
//tecnologias.unshift('typeScript')//añade al final del array

//const NuevoArreglo=[...tecnologias,'GrapjQL']
//const NuevoArreglo=['GraphQL',...tecnologias]

//eliminar elemento del array
//tecnologias.pop()//Elimina del final
//tecnologias.shift()//Elimina del inicio
//tecnologias.splice(2,2)//Eliminar de una posicion especifica

// const nuevoArray= tecnologias.filter(function(tech){
//     return tech === 'React'
// })

const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
    
})


//Reemplazar del array
console.table(tecnologias)
console.table(nuevoArray)
