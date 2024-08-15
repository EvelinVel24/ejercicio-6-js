// Lista inicial de tareas
let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

// Función para agregar tareas a la tabla
function agregarTareaATabla(tareaTexto) {
    const taskList = document.getElementById('taskList');
    
    const row = document.createElement('tr');
    
    const taskCell = document.createElement('td');
    taskCell.textContent = tareaTexto;
    
    const actionCell = document.createElement('td');
    const finishButton = document.createElement('button');
    finishButton.textContent = 'Finalizar';
    finishButton.addEventListener('click', function() {
        taskList.removeChild(row);
    });
    
    actionCell.appendChild(finishButton);
    row.appendChild(taskCell);
    row.appendChild(actionCell);
    
    taskList.appendChild(row);
}

// Mostrar tareas iniciales al cargar la página
tareas.forEach(function(item) {
    agregarTareaATabla(item.tarea);
});

document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const form = document.getElementById('taskForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        agregarTareaATabla(taskText);
        
        // Limpia el input y oculta el formulario
        taskInput.value = '';
        document.getElementById('taskForm').style.display = 'none';
    }
});