const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input',function(){
    console.log(e.tarjet.value)
})

const inputPassword =document.querySelector('.password')
inputPassword.addEventListener('input',funcionPassword)

function funcionPassword(){
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type='password'
    }, 100);
}
