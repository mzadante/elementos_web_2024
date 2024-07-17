document.addEventListener('DOMContentLoaded', function() { 
    // Espera a que todo el contenido HTML haya sido completamente cargado

    const accordionData = [
        { title: 'Sección 1', content: 'Contenido de la sección 1.' },
        { title: 'Sección 2', content: 'Contenido de la sección 2.' },
        { title: 'Sección 3', content: 'Contenido de la sección 3.' }
    ];
    // Define un array de objetos que contiene los títulos y contenidos de cada sección del acordeón

    const accordionContainer = document.getElementById('accordion');
    // Obtiene el contenedor del acordeón del HTML por su ID

    accordionData.forEach(item => { 
        // Itera sobre cada objeto en el array accordionData

        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        // Crea un nuevo elemento div para el ítem del acordeón y le añade la clase accordion-item

        const accordionButton = document.createElement('button');
        accordionButton.classList.add('accordion-button');
        accordionButton.textContent = item.title;
        // Crea un nuevo botón para el acordeón, le añade la clase accordion-button y establece su texto con el título de la sección

        const accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion-content');
        accordionContent.innerHTML = `<p>${item.content}</p>`;
        // Crea un nuevo div para el contenido del acordeón, le añade la clase accordion-content y establece su contenido con un párrafo que contiene el texto de la sección

        accordionItem.appendChild(accordionButton);
        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);
        // Añade el botón y el contenido al div del ítem del acordeón, y luego añade este ítem al contenedor del acordeón

        accordionButton.addEventListener('click', function() {
            // Añade un evento de clic al botón del acordeón

            this.classList.toggle('active'); //this se refiere al botón
            // Alterna la clase active en el botón que se hizo clic

            const content = this.nextElementSibling;
            // Selecciona el siguiente elemento hermano del botón, que es el contenido del acordeón

            if (this.classList.contains('active')) {
                content.style.display = 'block';
                // Muestra el contenido si el botón tiene la clase active
            } else {
                content.style.display = 'none';
                // Oculta el contenido si el botón no tiene la clase active
            }
        });
    });
});
