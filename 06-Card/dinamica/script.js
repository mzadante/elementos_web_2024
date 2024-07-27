
// Función para cambiar dinámicamente la imagen y el texto de la card
function changeProfile() {
    document.getElementById('perfilImg').src = '/06-Card/dinamica/Assets/perfil.png'; // Cambiar la ruta de la imagen
    document.getElementById('userName').textContent = 'Suscribite'; // Cambiar el nombre del usuario
    document.getElementById('userDescription').textContent = 'Nico Code'; // Cambiar la descripción
}

// Llamar a la función para cambiar el perfil al cargar la página, esta funcion se llama cuando se carga el HTML
window.onload = changeProfile;