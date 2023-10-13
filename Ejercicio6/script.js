
// Función para agregar un equipo a la tabla
function agregarEquipo(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const equipoNombre = document.getElementById("equipo").value;
    const equipoPuntos = document.getElementById("puntos").value;

    // Crear una nueva fila de la tabla
    const tabla = document.getElementById("tabla");
    const nuevaFila = tabla.insertRow(tabla.rows.length - 1); // Insertar antes de la última fila (total)

    // Crear celdas para posición, equipo y puntos
    const celdaPosicion = nuevaFila.insertCell(0);
    const celdaEquipo = nuevaFila.insertCell(1);
    const celdaPuntos = nuevaFila.insertCell(2);

    // Asignar valores a las celdas
    celdaPosicion.innerHTML = tabla.rows.length - 2; // Restamos 2 para considerar encabezamiento y última fila
    celdaEquipo.innerHTML = equipoNombre;
    celdaPuntos.innerHTML = equipoPuntos;

    // Limpiar el formulario
    document.getElementById("equipo").value = "";
    document.getElementById("puntos").value = "";

    // Ordenar la tabla por puntos
    ordenarTabla();
}

// Función para agregar un equipo a la tabla
function agregarEquipo(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const equipoNombre = document.getElementById("equipo").value;
    const equipoPuntos = document.getElementById("puntos").value;

    // Crear una nueva fila de la tabla
    const tabla = document.getElementById("tabla");
    const nuevaFila = tabla.insertRow(tabla.rows.length - 1); // Insertar antes de la última fila (total)

    // Crear celdas para posición, equipo y puntos
    const celdaPosicion = nuevaFila.insertCell(0);
    const celdaEquipo = nuevaFila.insertCell(1);
    const celdaPuntos = nuevaFila.insertCell(2);

    // Asignar valores a las celdas
    celdaPosicion.innerHTML = tabla.rows.length - 2; // Restamos 2 para considerar encabezamiento y última fila
    celdaEquipo.innerHTML = equipoNombre;
    celdaPuntos.innerHTML = equipoPuntos;

    // Limpiar el formulario
    document.getElementById("equipo").value = "";
    document.getElementById("puntos").value = "";

    // Ordenar la tabla por puntos
    ordenarTabla();
}

// Función para ordenar la tabla por puntos
function ordenarTabla() {
    const tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    const filas = [...tabla.rows];

    filas.sort((a, b) => {
        const puntosA = parseInt(a.cells[2].textContent);
        const puntosB = parseInt(b.cells[2].textContent);

        return puntosB - puntosA;
    });

    // Reordenar las filas en la tabla
    filas.forEach((fila, index) => {
        fila.cells[0].textContent = index + 1;
        tabla.appendChild(fila);
    });
}

