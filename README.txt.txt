FORMULARIO

1) Vamos a dividir las secciones del JS en 3 partes: Variables, los Event Listeners y las Funciones

1- Creamos la funcion eventListeners() y dentro le agregamos al documento el evento 'DOM ContentLoaded' a traves de la funcion 'iniciarApp'. Esta funcion va a tener todas las intrucciones de codigo que van a suceder cuando se cargue el documento por primera vez.

PASOS:

1- Deshabilitar el boton de enviar si el formulario se encuentra vacio. Creamos la variable que llame al boton con el id "enviar"
2- Se está usando un freamwork de css llamado "Tailwind". Tailwind tiene la caracteristica de que todo está destinado a clases de utilidades, por ejemplo: en la clase de la etiqueta poner "text-white" para texto en blanco o en mayuscula poner "uppercase"
3- En la funcion iniciarApp, vamos a disablear el boton de enviar "boton.disabled = true". No va a disablearlo (no se por que) entonces vamos a usar sintaxis de Tailwind, le agregamos clases al boton "boton.classList.Add()" y le agregamos "not-cursor-alowed"  y opacity-50
4- En la funcion de validarFormulario vamos a crear un parámetro (e) y creamos el "e.target.value" para tomar el valor de cada campo.

5- Si el campo esta completo y mayor a 0 continuar, pero si el campo está vacio, que se ponga en color rojo (le agregamos una clase a "e" y usamos tailwind "border" , "border-red-500"
6- En la funcion eventListeners, repetimos el evento blur para asunto y mensaje, con la misma funcion de ejecucion "validarFormulario()"


2) MENSAJES DE ERROR

1- Cuando tengamos un error o el campo este vacio, que se muestre un mensaje (junto con el borde de los campos en rojo) y vamos a ejecutar la funcion mostrarError()
2- Creamos la funcion crear Error
3- Creamos una constante mensajeError y le creamos un elemento 'p', a ese elemento le vamos a agregar un contenido de "Todos los campos son obligatorios" y le vamos a agregar varias clases de: 'border' , 'border-red-500' , 'backgroud-color-100' , 'mt-5', 'text-red-500', 'p-3'

4- Crear una constante para obtener la ID del formulario
5- En la funcion mostrarError le agregamos un appenChild(mensajeError) a formulario


ERRORES:
Aparecerá "todos los campos son obligatorios" reiteradas veces cada vez que hagamos click fuera de un campo incompleto, y nosotros queremos que aparezca sólo una vez. Para ello hacemos lo siguiente:

1- Agregamos la clase 'error' de tailwind, para posteriormente seleccionarlo
2- Creamos una const "errores" y usamos un querySelectorAll para seleccionar todos los elementos que contengan esa clase 'error' y trabajar sobre ella
3- Si ya existe un elemento con la clase 'error' entonces no queremos agregar más mensajes de ese tipo.
(errores.lenght)

VALIDAR CAMPO EMAIL:
1- Comprobar si el input es de tipo "email" haciendo un console.log(e.target.type) dentro de la funcion validarFormulario.
2- Una vez comprobado, sabemos que el email debe llevar un "@" y un Dominio ".com" por ejemplo. 

OPCION NO RECOMENDADA:
Una de las opciones que hay para validar un email. Es, es en la funcion mostrarError, comprobar que en el input hay un '@', con un e.target.value.indexOf('@') comprobaremos si dentro de ese campo hay un signo de arroba.


FORMA PROFESIONAL PARA VALIDAR MAIL: Expresion Regular

1- Entramos al link: http://www.emailregex.com/
2- Copiamos el codigo que pertece a 'JavaScript'
3- Vamos al codigo, si e.target.value es un email, creamos una constante expresionReg y pegamos el codigo copiado anteriormete de la pagina emailregex.
4- ¿Cómo implementar la expresion regular en nuestro campo? a traves del expresionRegular.test(), le pasamos en el parentesis, el valor la cual va a comprobar esa expresion regular: e.target.value (lo que introduce el usuario en el campo).
5- Entonces, si el campo es un imput tipo mail, entonces vamos a crear una constante, dentro va a ir la expresion regular. Si lo que ponemos dentro del input, cumple con los requisitos de tener @ y el dominio, lo testeamos. Y decidimos si es un mail válido o no.
6- Si el mail es valido, cumple con los requisitos de la expresion Regular entonces, borramos el console.log del mail es valido, y remarcamos el input de color verde:  e.target.classList.add('border' , 'border-verde-500');
7- Si el input no esta vacio, entonces que se ponga el color verde, si borro y salgo con el click, que se ponga color rojo. (usar los .remove .add con ambos colores)


// ELIMINAR "TODOS LOS CAMPOS SON OBLIGATORIOS" UNA VEZ QUE TENEMOS LOS CAMPOS RELLENOS

1- Crear una constante dentro del if, usar el querySelector para el parrafo de clase error (p.error)
2- Lo removemos con error.remove()
3- Copiar y pegar los target remove/add a al if para validacion de formularios


// REORDENAR NUESTRO CODIGO PARA QUE SEA MAS FACIL DE MANTENER

1- Si dejamos todos los campos vacios y rellenamos alguno despues, entonces nos aparece un error de remove null. Para ello creamos un if(error) y dentro el error.remove() para corregirlo.

// COMO HACER PARA QUE CUANDO TODOS LOS INPUTS ESTEN EN VERDE, EL BOTON DE ENVIAR SE HABILITE

1- Dentro de la funcion validarFormulario, creamos otro if. Si el contenido del input de email no es vacio Y asunto.value tampoco es es vacio Y mensaje.value tampoco esta vacio

2- Completamos todos los campos, luego borramos el mail y ponemos un formato incorrecto, sin el @ y el dominio. En el html se ve que dice "Email no valido" pero aun asi el ultimo if lo da como correcto "Pasaste la validacion". Por eso reemplazamos el email.value por la expresion regular.

3- Como la expresion regular pertenece solo a un if, y la necesitamos en otro. No va a dar el alcance, por ende, la cortamos y pegamos de manera global con las demas variables.

4- Activar el boton de ENVIAR: copiamos el disabled del boton de enviar y las clases agregadas de la funcion de iniciarApp. y la pegamos donde esta el if de validacion del mail. y lo pegamos donde estaba el console.log de "pasaste la validacion".
Cambiamos el disablead=true a false, y las clases en vez de agregarlas, las removemos

// MOSTRAR MENSAJE DE ENVIADO AL FINALIZAR











