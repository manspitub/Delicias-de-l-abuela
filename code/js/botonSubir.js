window.onscroll = function() {mostrarBoton()};

function mostrarBoton() {
    var botonSubir = document.querySelector(".boton-subir");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
}

function subirArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}