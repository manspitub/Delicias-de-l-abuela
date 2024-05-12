let sliderCarrusel = document.querySelector(".carruselImagenes");
let imagenes = sliderCarrusel.querySelectorAll(".ImagenesCarrusel");
let index = 0;

// Función para mostrar la imagen actual y ocultar las demás
function mostrarImagen(index) {
    for (let i = 0; i < imagenes.length; i++) {
        if (i === index) {
            imagenes[i].style.display = "block";
        } else {
            imagenes[i].style.display = "none";
        }
    }
}

// Función para avanzar al siguiente slide
function siguienteSlide() {
    index++;
    if (index >= imagenes.length) {
        index = 0;
    }
    mostrarImagen(index);
}

// Función para retroceder al slide anterior
function anteriorSlide() {
    index--;
    if (index < 0) {
        index = imagenes.length - 1;
    }
    mostrarImagen(index);
}

// Mostrar la primera imagen al cargar la página
mostrarImagen(index);

// Event listeners para los botones de avanzar y retroceder
document.querySelector("#btnSiguiente").addEventListener("click", siguienteSlide);
document.querySelector("#btnAnterior").addEventListener("click", anteriorSlide);