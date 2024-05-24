

//Esta línea se asegura de que todo el contenido html se haya cargado, y que en ese momento use la función
document.addEventListener("DOMContentLoaded", function() {

//Aquí se recoge el div que queremos usar de botón.
let boton = document.getElementById("google");

//Aquí se establece que el div haga su función al ser clickado.

boton.addEventListener("click", function() {
    window.location.href = "https://google.es";
  });
});