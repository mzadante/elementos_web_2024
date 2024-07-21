// Escuchar el evento de desplazamiento scroll
document.addEventListener('scroll', function() {
    // Seleccionar todos los elementos con la clase 'parallax' con el uso de: querySelectorAll
    const parallaxElements = document.querySelectorAll('.parallax');
    // Recorremos los elementos parallax con el uso de foreach
    parallaxElements.forEach(function(element) {
        // Obtener el valor del atributo 'data-speed'
        const speed = element.getAttribute('data-speed');
        // Calcular la posición vertical de la imagen de fondo
        const yPos = -(window.scrollY * speed);
        console.log(yPos);
        // Aplicar la nueva posición de fondo 
        element.style.backgroundPosition = `center ${yPos}px`;
    });
});
