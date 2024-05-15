document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".ImagenesCarrusel");
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const closeBtn = document.querySelector(".close");

    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            const descripcion = this.nextElementSibling.textContent;
            const precio = this.parentElement.querySelector(".precio").textContent;
            const imagenSrc = this.getAttribute("src");
            modal.style.display = "block";
            modal.style.color= "black";
            modalImage.src = imagenSrc;
            modalDescription.textContent = descripcion;
            modalPrice.textContent = "Precio: " + precio;
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
});
