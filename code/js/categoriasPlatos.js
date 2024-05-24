// JavaScript para manejar el clic y cambiar el fondo
document.querySelectorAll('.botonesProductos').forEach(item => {
    item.addEventListener('click', event => {
        // Evitar el comportamiento predeterminado del enlace
        event.preventDefault();

        // Eliminar la clase 'selected' y agregar la clase 'hidden' a todos los <li>
        document.querySelectorAll('.botonesProductos').forEach(li => {
            li.classList.remove('selected');
            li.classList.add('hidden');
        });
        // Agregar la clase 'selected' y remover 'hidden' al <li> clicado
        event.currentTarget.classList.add('selected');
        event.currentTarget.classList.remove('hidden');

        // Opcional: Desplazarse a la sección correspondiente
        const targetId = event.currentTarget.querySelector('a').getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});