// Función para alternar el estado del menú de navegación
const toggleMenu = () => {
    // Selecciona el elemento de navegación con la clase "navigation"
    const navigation = document.querySelector(".navigation");
    
    // Selecciona el ícono del menú con la clase "menu-icon"
    const burgerMenu = document.querySelector(".menu-icon");
    
    // Obtiene el valor actual del atributo "src" del ícono del menú
    const src = burgerMenu.getAttribute("src");
    
    // Verifica si el ícono actual es el de la hamburguesa
    const isBurger = src.includes("burger-menu.svg");
    
    // Define el nuevo ícono en función del estado actual (hamburguesa o "X")
    const iconName = isBurger ? "Assets/close.svg" : "Assets/burger-menu.svg";
    
    // Establece el nuevo ícono en el atributo "src" del ícono del menú
    burgerMenu.setAttribute("src", iconName);
    
    // Si el ícono no es de hamburguesa (es decir, es la "X")
    if (!isBurger) {
        // Añade la clase "navigation--mobile--fadeout" para iniciar la animación de desvanecimiento
        navigation.classList.add("navigation--mobile--fadeout");
        
        // Después de 300ms, alterna la clase "navigation--mobile" para mostrar/ocultar el menú
        setTimeout(() => {
            navigation.classList.toggle("navigation--mobile");
            // Remueve la clase "navigation--mobile--fadeout" una vez completada la animación
            navigation.classList.remove("navigation--mobile--fadeout");
        }, 300);
    } else {
        // Si el ícono es de hamburguesa (es decir, estamos mostrando el menú)
        // Remueve la clase "navigation--mobile--fadeout"
        navigation.classList.remove("navigation--mobile--fadeout");
        
        // Alterna la clase "navigation--mobile" para mostrar/ocultar el menú
        navigation.classList.toggle("navigation--mobile");
    }
};

// Añade un evento de clic al ícono del menú para llamar a la función toggleMenu cuando se haga clic en él
document.querySelector(".menu-icon").addEventListener("click", toggleMenu);


