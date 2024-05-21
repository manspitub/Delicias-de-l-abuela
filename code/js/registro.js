document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registro").addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario hasta que se valide.
        if (validaFormulario()) {
            // Si la validación es exitosa, muestra una alerta (para demo) o envía el formulario
            alert("Formulario enviado exitosamente");
            // document.getElementById("registro").submit(); // Descomenta esta línea para permitir el envío real del formulario
        }
    });
});

function validaFormulario() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;

    let errores = [];

    // Validación del email
    if (email === "") {
        errores.push("Por favor, introduzca su correo");
    } else {
        let expresionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!expresionEmail.test(email)) {
            errores.push("Por favor, introduzca una dirección de correo válida");
        }
    }

    // Validación del teléfono
    if (telefono === "") {
        errores.push("Por favor, introduzca su número de teléfono");
    } else {
        let expresionTelefono = /^\d{9}$/;
        if (!expresionTelefono.test(telefono)) {
            errores.push("Introduzca un número de teléfono válido");
        }
    }

    // Validación de la contraseña
    if (password === "") {
        errores.push("Introduzca una contraseña para su cuenta. Esta debe contener letras en mayúsculas y minúsculas (Aa), número(s) y algún carácter especial (./_@...)");
    } else if (password.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres");
    } else {
        let expresionContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-.@_*:<>])/;
        if (!expresionContrasenia.test(password)) {
            errores.push("Formato de contraseña incorrecto. Esta debe contener letras en mayúsculas y minúsculas (Aa), número(s) y algún carácter especial (./_@...)");
        }
    }

    // Validación del nombre de usuario
    if (username === "") {
        errores.push("Por favor, introduzca un nombre para su usuario");
    }

    // Mostrar errores si los hay
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }

    return true;
}

function mostrarErrores(errores) {
    let divErrores = document.getElementById("errores");
    divErrores.innerHTML = ""; // Limpiar errores previos
    divErrores.style.display = "block"; // Mostrar el div de errores

    let ul = document.createElement("ul"); // Crear lista no ordenada
    errores.forEach(function(error) {
        let li = document.createElement("li"); // Crear un elemento de lista por cada error
        li.textContent = error; // Asignar el texto del error
        ul.appendChild(li); // Añadir el elemento de lista a la lista no ordenada
    });

    divErrores.appendChild(ul); // Añadir la lista de errores al div de errores
}
mostrarErrores(errores);