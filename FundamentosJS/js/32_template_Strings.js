//template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoDeFuncion(){
    return "Este texto proviene de la función"
}

console.log(producto + "$" + precio +"Dolates, Marca:" + marca, textoDeFuncion())

console .log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`)
