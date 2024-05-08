// Obtiene el elemento de cantidad
var cantidadCarrito = document.getElementById("cantidadCarrito");
console.log(cantidadCarrito)
// Obtiene el valor de la cantidad
var cantidad = parseInt(cantidadCarrito.textContent);

// Si la cantidad es 0 o menos, oculta el elemento de cantidad
if (cantidad <= 0) {
    cantidadCarrito.style.display = "none";
}

var asideCarrito = document.getElementById("asideCarrito");

// Agrega un evento de clic al elemento cantidadCarrito
cantidadCarrito.addEventListener("click", function() {
    // Cambia el estilo del aside al hacer clic
    asideCarrito.style.display = "block"; // o "flex", dependiendo del tipo de layout que quieras
});
