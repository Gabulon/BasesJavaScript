//objetis-Manipulación

const producto={
        nombre:"tablet",
        precio: 200,
        disponible: true
    }

    //Object.freeze(producto) - Freeze - No deja modificaro, no permite añadir ni eliminar

    //object.seal(prooducto) - modificar propiedades existentes, no permite añadir ni eliminar
    
    //reescribir un valor
    producto.nombre="monitos Curvo"

    //si no existe, lo va añadir
    producto.imagen="imagen.jpg"

delete producto.dispnoble

console.table(producto)