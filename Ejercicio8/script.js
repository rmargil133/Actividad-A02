
// Comprobar si existen cookies
if (document.cookie) {
    mostrarDatos();
}

// Comprobar si existen datos en localStorage
if (localStorage.getItem("nombre")) {
    mostrarDatosLocalStorage();
}

// Función para guardar datos en cookies
function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const edad = document.getElementById("edad").value;
    const profesion = document.getElementById("profesion").value;

    // Guardar datos en cookies
    document.cookie = `nombre=${nombre};`;
    document.cookie = `direccion=${direccion};`;
    document.cookie = `edad=${edad};`;
    document.cookie = `profesion=${profesion};`;

    mostrarDatos();
}

// Función para mostrar datos almacenados en cookies
function mostrarDatos() {
    const nombre = getCookie("nombre");
    const direccion = getCookie("direccion");
    const edad = getCookie("edad");
    const profesion = getCookie("profesion");

    document.getElementById("mostrarNombre").textContent = `Nombre: ${nombre}`;
    document.getElementById("mostrarDireccion").textContent = `Dirección: ${direccion}`;
    document.getElementById("mostrarEdad").textContent = `Edad: ${edad}`;
    document.getElementById("mostrarProfesion").textContent = `Profesión: ${profesion}`;

    document.getElementById("formulario").style.display = "none";
    document.getElementById("datosGuardados").style.display = "block";
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(nombre) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === nombre) {
            return value;
        }
    }
    return "";
}

// Función para borrar datos de cookies
function borrarDatos() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "direccion=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "edad=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "profesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.getElementById("datosGuardados").style.display = "none";
    document.getElementById("formulario").style.display = "block";
}

// Función para guardar datos en localStorage
function guardarDatosLocalStorage() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const edad = document.getElementById("edad").value;
    const profesion = document.getElementById("profesion").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("edad", edad);
    localStorage.setItem("profesion", profesion);

    mostrarDatosLocalStorage();
}

// Función para mostrar datos almacenados en localStorage
function mostrarDatosLocalStorage() {
    const nombre = localStorage.getItem("nombre");
    const direccion = localStorage.getItem("direccion");
    const edad = localStorage.getItem("edad");
    const profesion = localStorage.getItem("profesion");

    document.getElementById("mostrarNombre").textContent = `Nombre: ${nombre}`;
    document.getElementById("mostrarDireccion").textContent = `Dirección: ${direccion}`;
    document.getElementById("mostrarEdad").textContent = `Edad: ${edad}`;
    document.getElementById("mostrarProfesion").textContent = `Profesión: ${profesion}`;

    document.getElementById("formulario").style.display = "none";
    document.getElementById("datosGuardados").style.display = "block";
}
