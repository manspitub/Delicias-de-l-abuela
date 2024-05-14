let sliderCarrusel = document.querySelector(".carruselImagenes");
let imagenes = sliderCarrusel.querySelectorAll(".ImagenesCarrusel");
let index = 0;

// Función para mostrar las imágenes actuales y ocultar las demás
function mostrarImagenes(index) {
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
    index += 3;
    if (index >= imagenes.length) {
        index = 0;
    }
    mostrarImagenes(index);
}

// Función para retroceder al slide anterior
function anteriorSlide() {
    index -= 3;
    if (index < 0) {
        index = Math.floor((imagenes.length - 1) / 3) * 3;
    }
    mostrarImagenes(index);
}

// Mostrar las primeras imágenes al cargar la página
mostrarImagenes(index);

// Event listeners para los botones de avanzar y retroceder
document.querySelector("#btnSiguiente").addEventListener("click", siguienteSlide);
document.querySelector("#btnAnterior").addEventListener("click", anteriorSlide);
