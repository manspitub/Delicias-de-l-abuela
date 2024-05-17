document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".ImagenesCarrusel");
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalAllergens = document.getElementById("modalAlergenos");
    const closeBtn = document.querySelector(".close");
    const addCarrito = document.getElementById("addToCarrito");
    // Obtiene el elemento de cantidad
    var cantidadCarrito = document.getElementById("cantidadCarrito");
    // Obtiene el valor de la cantidad
    var cantidad = parseInt(cantidadCarrito.textContent);
    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            const descripcion = this.nextElementSibling.textContent;
            const precio = this.parentElement.querySelector(".precio").textContent;
            const alergenos = this.parentElement.querySelector(".alergenos").innerHTML;
            const imagenSrc = this.getAttribute("src");
            modal.style.display = "block";
            modalImage.src = imagenSrc;
            modalDescription.textContent = descripcion;
            modalPrice.textContent = "Precio: " + precio;
            modalAllergens.innerHTML = alergenos;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });



    addCarrito.addEventListener("click", function() {
        modal.style.display = "none";
        cantidadCarrito.innerHTML = cantidad +1
    });
});
