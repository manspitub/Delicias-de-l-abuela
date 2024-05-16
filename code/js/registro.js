//Esta función mete los errores en una ul para despues meter la ul en el div de errores y mostrarlo.


function mostrarErrores (errores) {
    let divErrores = document.getElementById("errores"); //Aquí recoge el div de errores.
    divErrores.innerHTML = ""; //Aquí vacía el div por si contiene algún error anterior.
    divErrores.style.display = "block"; //Aquí se cambia el display de none a block para que sea visible
    let ul = document.createElement("ul"); //Aquí crea la ul que contendrá los errores
    errores.forEach(function (error) {
    let li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
    }); //En esta función se recogen cada uno de los errores del Array y se mete en forma de li dentro de la ul
    divErrores.appendChild(ul); //Aquí se introduce la lista dentro del div
    }

    errores=[];

    if (email==="") {
        errores.push("Por favor, introduzca su correo") //Si el email está vacío añade un error al Array.
        
    } else{
        let expresionEmail= /^[a-zA-Z0-9-.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/; //Si el email no está vacío pero el formato es incorrecto añade un error al Array.
        if (!expresionEmail.test(email)) {
            errores.push("Por favor, introduzca una dirección de correo válida")
        }
    }