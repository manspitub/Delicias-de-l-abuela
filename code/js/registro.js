document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío del formulario

    // Limpiar mensajes de error anteriores
    let errorContainer = document.querySelector(".errores");
    errorContainer.innerHTML = ""; // Limpia el contenedor de errores

    let hasError = false;

    // Obtener valores de los campos
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Validar email
    if (!validateEmail(email)) {
        showError("Email no válido");
        hasError = true;
    }

    // Validar telefono
    if (!validateTelefono(telefono)) {
        showError("Teléfono no válido");
        hasError = true;
    }

    // Validar username
    if (username.trim() === "") {
        showError("Nombre de usuario necesario");
        hasError = true;
    }

    // Validar password
    if (!validatePassword(password)) {
        showError("La contraseña debe tener al menos 8 caracteres, una letra y un número");
        hasError = true;
    }

    // Si no hay errores, enviar el formulario
    if (!hasError) {
        this.submit();
    }
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateTelefono(telefono) {
    let re = /^[0-9]{9,12}$/; // Acepta números de teléfono de 9 a 12 dígitos
    return re.test(telefono);
}

function validatePassword(password) {
    let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}

function showError(message) {
    let errorContainer = document.querySelector(".errores");
    let errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
}
