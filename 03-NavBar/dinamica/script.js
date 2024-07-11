
// Función para alternar el estado del menú de navegación
function menuColapsado() {
    // Selecciona el elemento de navegación con la clase "navigation"
    var navigation = document.querySelector(".navigation");

    // Selecciona el ícono del menú con la clase "menu-icon"
    var burgerMenu = document.querySelector(".menu-icon");

    // Verifica si el menú está actualmente visible
    if (navigation.classList.contains("navigation--mobile")) {
        // Si está visible, cambia el ícono a hamburguesa y oculta el menú
        burgerMenu.src = "Assets/burger-menu.svg";
        navigation.classList.add("navigation--mobile--fadeout");

        // Espera 0.3 segundos (300 ms) antes de quitar la clase "navigation--mobile"
        setTimeout(function() {
            navigation.classList.remove("navigation--mobile");
            navigation.classList.remove("navigation--mobile--fadeout");
        }, 300);
    } else {
        // Si no está visible, cambia el ícono a "X" y muestra el menú
        burgerMenu.src = "Assets/close.svg";
        navigation.classList.add("navigation--mobile");
    }
}

// Añade un evento de clic al ícono del menú para llamar a la función menuColapsado cuando se haga clic en él
document.querySelector(".menu-icon").addEventListener("click", menuColapsado);
