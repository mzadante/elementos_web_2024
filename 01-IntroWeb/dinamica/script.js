// Esperar a que el contenido del documento html se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    // Crear elementos
    const h1 = document.createElement("h1");
    h1.textContent = "¡Hola Mundo!";
  
    const p = document.createElement("p");
    p.textContent = "Bienvenidos a mi primera página web.";
  
    // Añadir elementos al body
    document.body.appendChild(h1);
    document.body.appendChild(p);
  });




  /* IMPORTANTE: 
  PARA APRENDER MAS LEER Y APRENDER Rapido:
              Javascript:
                            preguntarse que es ?
  document
  addEventListener
  createElement
  textContent
  appendChild
  */