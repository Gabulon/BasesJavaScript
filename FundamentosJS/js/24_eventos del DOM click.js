//Eventos del DOM click

const heading= document.querySelector('.heading')
heading.addEventListener('click',() =>{ 
    heading.textContent ='Diste click en el heading'
})

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace=>{
    enlace.addEventListener('click',()=>{
        console.log('Diste click en un enlace')
    })
})