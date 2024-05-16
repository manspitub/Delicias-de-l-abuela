
const username = document.getElementById("username").value;

const email = document.getElementById("email").value;

const telefono = document.getElementById("telefono").value;

const password = document.getElementById("password").value;

//Ejecuta la función al darle a submit
document.getElementById("registro").addEventListener("submit", validaFormulario);


//Esta función mete los errores en una ul para despues meter la ul en el div de errores y mostrarlo.

function validaFormulario(event) {
    
    errores=[];

    if (email==="") {
        errores.push("Por favor, introduzca su correo") //Si el email está vacío añade un error al Array.
        
    } else{
        let expresionEmail= /^[a-zA-Z0-9-.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/; //Si el email no está vacío pero el formato es incorrecto añade un error al Array.
        if (!expresionEmail.test(email)) {
            errores.push("Por favor, introduzca una dirección de correo válida")
        }
    }

    if (telefono==="") {
        errores.push("Por favor, introduzca su número de teléfono");

    }else{
            let expresionTelefono= /^\d{9}$/;
            if (!expresionTelefono.test(telefono)) {
                errores.push("Introduzca un número de teléfono válido");
            }
        }
    

    if (password==="") {
        errores.push("Introduzca una contraseña para su cuenta. Esta debe contener letras en mayúsculas y minúsculas (Aa) número(s) y algún carácter especial(./_@...)")
    } else if (password.length<8) {
        errores.push("La cadena no debe ser mayor de 8 caracteres")
    } else {
    let expresionContrasenia= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-.@_*:<>])$/ //?=.* Permite realizar un checkeo de toda la cadena desde el punto en el que está (El punto de partida en este caso) por lo que para cada tipo de caracter me busca desde el principio hasta el final para ver si aparece.

        if (!expresionContrasenia.test(password)) {
            errores.push("Formato de contraseña incorrecta. Esta debe contener letras en mayúsculas y minúsculas (Aa) número(s) y algún carácter especial(./_@...)")
        }
    }

    if (username==="") {
        errores.push("Por favor, introduzca un nombre para su usuario")
    } 


    if (errores.length>0) {
        mostrarErrores(errores);
        return false;
    }

    


    function mostrarErrores(errores) {
        let divErrores = document.getElementById("errores"); //Aquí recoge el div de errores.
        divErrores.innerHTML = ""; //Aquí vacía el div por si contiene algún error anterior.
        divErrores.style.display = "block"; //Aquí se cambia el display de none a block para que sea visible
        let ul = document.createElement("ul"); //Aquí crea la ul que contendrá los errores
        errores.forEach(function (error) {
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
        }); //En esta función se recogen cada uno de los errores del Array y se mete en forma de li dentro de la ul
        divErrores.appendChild(ul); //Aquí se introduce la lista dentro del div
        }
    

return true
    }