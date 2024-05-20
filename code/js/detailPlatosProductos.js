document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".ImagenesProductos");
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalAllergens = document.getElementById("modalAlergenos");
    const closeBtn = document.querySelector(".close");
    const addCarrito = document.getElementById("addToCarrito");


   
    var descripcion ="";
    var precio="";
    var alergenos ="";
    var imagenSrc ="";
    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            descripcion = this.nextElementSibling.textContent;
            precio = this.parentElement.querySelector(".precio").textContent;
            alergenos = this.parentElement.querySelector(".alergenos").innerHTML;
            imagenSrc = this.getAttribute("src");
            modal.style.display = "block";
            modalImage.src = imagenSrc;
            modalDescription.textContent = descripcion;
            modalPrice.textContent = precio;
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

    function cortarHastaDosPuntos(str) {
        let index = str.indexOf(':');
        if (index !== -1) {
            return str.substring(0, index);
        }
        return str; // Si no hay `:`, devolver la cadena completa
    }

    let cantidad = 0;
    let total = 0;
    const carritoLista = document.getElementById('carritoLista');
    const totalElement = document.getElementById('total');
    const cantidadCarrito = document.getElementById('cantidadCarrito');
    const productosEnCarrito = {};

    addCarrito.addEventListener("click", function() {
        modal.style.display = "none";
        cantidad++;
        cantidadCarrito.innerHTML = cantidad;

        let titulo = cortarHastaDosPuntos(modalDescription.textContent);
        let precio = parseFloat(modalPrice.textContent.replace(',', '.')); // Asegúrate de convertir el precio a número
        let imagen = modalImage.src;

        // Verificar si el producto ya está en el carrito
        if (productosEnCarrito[titulo]) {
            // Actualizar la cantidad y el texto del li existente
            productosEnCarrito[titulo].cantidad++;
            productosEnCarrito[titulo].elementoLi.querySelector('.producto-cantidad').textContent = `${productosEnCarrito[titulo].cantidad} x ${precio.toFixed(2)}€`;
        } else {
            // Crear un nuevo li
            let li = document.createElement('li');
            li.classList.add('carrito-item');
            
            // Crear la imagen
            let img = document.createElement('img');
            img.src = imagen;
            img.alt = titulo;
            img.classList.add('carrito-img');

            // Crear el contenedor de texto
            let textoContainer = document.createElement('div');
            textoContainer.classList.add('carrito-texto');

            // Título del producto
            let tituloEl = document.createElement('span');
            tituloEl.textContent = titulo;
            tituloEl.classList.add('producto-titulo');

            // Cantidad y precio
            let cantidadEl = document.createElement('span');
            cantidadEl.textContent = `1 x ${precio.toFixed(2)}€`;
            cantidadEl.classList.add('producto-cantidad');

            // Añadir los elementos al contenedor de texto
            textoContainer.appendChild(tituloEl);
            textoContainer.appendChild(cantidadEl);

            // Añadir la imagen y el contenedor de texto al li
            li.appendChild(img);
            li.appendChild(textoContainer);

            carritoLista.appendChild(li);

            // Añadir el producto al objeto productosEnCarrito
            productosEnCarrito[titulo] = {
                cantidad: 1,
                elementoLi: li,
                precio: precio
            };
        }

        // Actualizar el precio total
        total += precio;
        totalElement.textContent = total.toFixed(2);

        alert(`Añadido al carrito: ${titulo} - ${precio.toFixed(2)}€`);
    });

    const botonVaciar = document.getElementById('boton-vaciar');

    botonVaciar.addEventListener('click', function() {
        // Vaciar la lista del carrito
        carritoLista.innerHTML = '';
        
        // Reiniciar el total a cero
        total = 0;
        totalElement.textContent = total.toFixed(2);
    
        // Reiniciar la cantidad de productos a cero
        cantidad = 0;
        cantidadCarrito.textContent = cantidad;
    
        // Reiniciar el objeto productosEnCarrito
        Object.keys(productosEnCarrito).forEach(function(key) {
            delete productosEnCarrito[key];
        });
    });
});
