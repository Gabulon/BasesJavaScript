//funciones y declaraciones

// function sumar(numero=0, numero2=0){
//    console.log(numero + numero2)
// }

// sumar(20,30)
// sumar(2,3)
// sumar(100)
// sumar()

function sumar(numero=0, numero2=0){
    return {
        resultado: numero + numero2,
        mesnaje: 'Hola Mundo'
    }
 }

 const {resultado,mensaje}=sumar(20,30)

 console.log(resultado)
 console.log(mensaje)