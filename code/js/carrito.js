// Obtiene el elemento de cantidad
var cantidadCarrito = document.getElementById("cantidadCarrito");
console.log(cantidadCarrito)
// Obtiene el valor de la cantidad
var cantidad = parseInt(cantidadCarrito.textContent);

// Si la cantidad es 0 o menos, oculta el elemento de cantidad
if (cantidad <= 0) {
    cantidadCarrito.style.display = "none";
}

var iconoCarrito = document.getElementById("iconoCarrito");
// Obtiene el aside
var asideCarrito = document.getElementById("asideCarrito");

// Agrega un evento de clic al ícono del carrito
iconoCarrito.addEventListener("click", function() {
    // Verifica si el aside está visible
    var isVisible = getComputedStyle(asideCarrito).right === "0px";

    // Si el aside está visible, ocúltalo; si no, muéstralo
    if (isVisible) {
        asideCarrito.style.right = "-400px"; // Oculta el aside
    } else {
        asideCarrito.style.right = "0"; // Muestra el aside
        
    }
});


// Obtiene el elemento de cerrar el aside
var cerrarAside = document.getElementById("cerrarAside");

// Agrega un evento de clic al elemento de cerrar el aside
cerrarAside.addEventListener("click", function() {
    asideCarrito.style.right = "-400px"; // Oculta el aside
    
});