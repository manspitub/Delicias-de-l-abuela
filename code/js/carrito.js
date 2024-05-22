// Obtiene el elemento de cantidad
var cantidadCarrito = document.getElementById("cantidadCarrito");
// Obtiene el valor de la cantidad
var cantidad = parseInt(cantidadCarrito.textContent);


// Si la cantidad es 0 o menos, oculta el elemento de cantidad
if (cantidad <= 0) {
    cantidadCarrito.style.display = "none";
}

var iconoCarrito = document.getElementById("iconoCarrito");
// Obtiene el aside
var asideCarrito = document.getElementById("asideCarrito");

var body = document.querySelector("body");
var overlay = document.getElementById("overlay");
var mensajeNoProductos = document.getElementById("mensajeNoProductos");
var mensajeProductos = document.getElementById("mensajeProductos");
console.log(mensajeNoProductos)

// Agrega un evento de clic al ícono del carrito
iconoCarrito.addEventListener("click", function() {
    // Verifica si el aside está visible
    var isVisible = getComputedStyle(asideCarrito).right === "0px";

    // Si el aside está visible, ocúltalo; si no, muéstralo
    if (isVisible) {
        asideCarrito.style.right = "-400px"; // Oculta el aside
    } else {
        asideCarrito.style.right = "0"; // Muestra el aside
        overlay.style.display = "block"; // Muestra el overlay
        body.classList.add("blur");
        asideCarrito.classList.remove("blur-none"); // Asegura que el aside no tenga desenfoque
    }
});


// Obtiene el elemento de cerrar el aside
var cerrarAside = document.getElementById("cerrarAside");

// Agrega un evento de clic al elemento de cerrar el aside
cerrarAside.addEventListener("click", function() {
    asideCarrito.style.right = "-400px"; // Oculta el aside
    overlay.style.display = "none"; // Oculta el overlay
    body.classList.remove("blur");  
    asideCarrito.classList.add("blur-none"); // Asegura que el aside no tenga desenfoque
});

// Verifica si hay productos al cargar la página
if (parseInt(cantidadCarrito.textContent) <= 0) {
    cantidadCarrito.style.display = "none";

    mensajeProductos.style.display = "none";
    mensajeNoProductos.style.display = "flex"; // Muestra el mensaje
} else {
    mensajeNoProductos.style.display = "none"; // Oculta el mensaje
    mensajeProductos.style.display = "flex";
    cantidadCarrito.style.display = "block";
}

// Verifica si hay productos cuando se actualiza el número de productos
cantidadCarrito.addEventListener("DOMSubtreeModified", function() {
    if (parseInt(cantidadCarrito.textContent) <= 0) {
        cantidadCarrito.style.display = "none";
        mensajeProductos.style.display = "none";
        mensajeNoProductos.style.display = "flex"; // Muestra el mensaje
    } else {
        mensajeNoProductos.style.display = "none"; // Oculta el mensaje
        mensajeProductos.style.display = "flex";
        cantidadCarrito.style.display = "block";
    }
});