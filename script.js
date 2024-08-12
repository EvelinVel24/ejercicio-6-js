document.addEventListener('DOMContentLoaded', () => {
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const formulario = document.getElementById('formulario');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const nuevaTarea = document.getElementById('nuevaTarea');
    const cuerpoTabla = document.getElementById('cuerpo-tabla');

      // Verifica los elementos en la consola
    console.log('toggleFormBtn:', toggleFormBtn);
    console.log('formulario:', formulario);
    console.log('addTaskBtn:', addTaskBtn);
    console.log('nuevaTarea:', nuevaTarea);
    console.log('cuerpoTabla:', cuerpoTabla);

    // Lista inicial de tareas
    let tareas = [
        { tarea: "Pintar la fachada de la casa" },
        { tarea: "Comprar comida para el perro" },
        { tarea: "Pagar la tarjeta de crédito" }
    ];

    // Función para mostrar/ocultar el formulario
    toggleFormBtn.addEventListener('click', () => {
        formulario.classList.toggle('d-none');
    });

    // Función para agregar una tarea
    addTaskBtn.addEventListener('click', () => {
        console.log('Botón de agregar tarea clickeado'); // Verifica si se detecta el clic
        const tarea = nuevaTarea.value.trim();
        if (tarea) {
            tareas.push({ tarea }); // Añadir tarea al array
            updateTaskTable();
            nuevaTarea.value = '';
            formulario.classList.add('d-none'); // Ocultar el formulario después de agregar la tarea
        }
    });

    // Función para actualizar la tabla de tareas
    function updateTaskTable() {
        cuerpoTabla.innerHTML = ''; // Limpiar la tabla existente
        tareas.forEach((tareaObj, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tareaObj.tarea}</td>
                <td><button class="btn btn-danger finishBtn" data-index="${index}">Finalizar</button></td>
            `;
            cuerpoTabla.appendChild(row);
        });
        
        // Agregar eventos a los botones de finalizar
        document.querySelectorAll('.finishBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                tareas.splice(index, 1); // Eliminar la tarea del array
                updateTaskTable(); // Actualizar la tabla
            });
        });
    }

    // Cargar las tareas iniciales en la tabla
    updateTaskTable();
});


