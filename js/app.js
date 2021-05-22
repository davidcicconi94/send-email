// VARIABLES
const enviarBtn = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//campos del formulario
var email = document.querySelector('#email');
var asunto = document.querySelector('#asunto');
var mensaje = document.querySelector('#mensaje');


// EVENT LISTENERS
eventListeners();
function eventListeners(){
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded' , iniciarApp)

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

// FUNCIONES

// Arranque de la app
function iniciarApp(){
    enviarBtn.disabled = true;
    enviarBtn.classList.add ('cursor-not-alowed' , 'opacity-50')
}

// Valida el formulario
function validarFormulario(e){

    // Corroborar si hay cadenas de textos dentro de los inputs
    if(e.target.value.length > 0){

        // Eliminar los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border' , 'border-red-500');
        e.target.classList.add('border' , 'border-green-500');

    } else {

        e.target.classList.remove('border' , 'border-green-500');
        e.target.classList.add('border' , 'border-red-500');
        mostrarError('Todos los campos son obligatorios')
    }


   // Expresión regular
   if(e.target.type === 'email'){

        if(expresionRegular.test(e.target.value)){
            const error = document.querySelector('p.error');
           if(error){
            error.remove();
        }

            e.target.classList.remove('border' , 'border-red-500');
            e.target.classList.add('border' , 'border-green-500');

        }else{

            e.target.classList.remove('border' , 'border-green-500');
            e.target.classList.add('border' , 'border-red-500');
            mostrarError('Email no valido');
        } 
   }

        if((expresionRegular.test(e.target.value)) !== '' && mensaje.value !== '' && asunto.value !== ''){
            enviarBtn.disabled = false;
            enviarBtn.classList.remove ('cursor-not-alowed' , 'opacity-50');
        } else {
            console.log('Hay campos por validar');
        }
}


function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border' , 'border-red-500' , 'backgroud-color-100' , 'mt-5', 'text-red-500', 'p-3' , 'error');

    const errores = document.querySelectorAll('.error')

    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

