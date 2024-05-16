let sliderCarrusel = document.querySelector(".carruselImagenes");
let imagenes = sliderCarrusel.querySelectorAll(".imagenContainer");
let index = 0;

// Función para mostrar las tres imágenes actuales
function mostrarTresImagenes(index) {
    for (let i = 0; i < imagenes.length; i++) {
        if (i >= index && i < index + 3) {
            imagenes[i].style.display = "block";
        } else {
            imagenes[i].style.display = "none";
        }
    }
}

// Función para avanzar al siguiente slide
function siguienteSlide() {
    index++;
    if (index >= imagenes.length - 2) {
        index = 0;
    }
    mostrarTresImagenes(index);
}

// Función para retroceder al slide anterior
function anteriorSlide() {
    index--;
    if (index < 0) {
        index = imagenes.length - 3;
    }
    mostrarTresImagenes(index);
}

// Mostrar las primeras tres imágenes al cargar la página
mostrarTresImagenes(index);

// Event listeners para los botones de avanzar y retroceder
document.querySelector("#btnSiguiente").addEventListener("click", siguienteSlide);
document.querySelector("#btnAnterior").addEventListener("click", anteriorSlide);
