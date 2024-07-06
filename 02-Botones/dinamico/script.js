// Esperar a que el contenido del documento se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    // Definir los estilos de los botones
    const buttonStyles = [
      { class: 'btn-1', text: 'Botón 1' },
      { class: 'btn-2', text: 'Botón 2' },
      { class: 'btn-3', text: 'Botón 3' },
      { class: 'btn-4', text: 'Botón 4' },
      { class: 'btn-5', text: 'Botón 5' }
    ];
// Crear y añadir los botones dinámicamente
buttonStyles.forEach(style => {
    // Crear un nuevo elemento botón
    const button = document.createElement("button");
    // Asignar la clase y el texto del botón
    button.className = style.class;
    button.textContent = style.text;
    // Añadir el botón al body del documento
    document.body.appendChild(button);
  });    
  });