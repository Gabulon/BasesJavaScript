//osjetos -Desestructuring con 2 o mas objetos

const producto={
    nombre:"Tablet",
    precio: 200,
    disponible: true
}

const Cliente={
    nombre:"Gabriel",
    premium: 200
}

const {nombre,precio,disponible}=producto
const {nombre: nombreCliente,premium}=cliente

console.log(nombre)
console.log(nombreCliente)