// Obtén una referencia al botón con el id "boton"
let boton = document.getElementById("boton");

// Función para abrir una nueva ventana
function abrirNuevaVentana() {
    // Genera una posición aleatoria en el eje X dentro de los márgenes de la ventana del navegador
    let randomX = Math.floor(Math.random() * (window.innerWidth - 400));
    // Genera una posición aleatoria en el eje Y dentro de los márgenes de la ventana del navegador
    let randomY = Math.floor(Math.random() * (window.innerHeight - 400));
    // Abre una nueva ventana en blanco con propiedades específicas
    let nuevaVentana = window.open("", "_blank", `width=400,height=400,left=${randomX},top=${randomY},menubar=no,toolbar=no,location=no,resizable=no`);

    // Inicializa el ancho y alto actuales de la ventana
    let anchoActual = 400;
    let altoActual = 400;
    // Indica si la ventana está creciendo o disminuyendo
    let estaCreciendo = false;

    // Función para cambiar el tamaño de la ventana
    function cambiarTamañoVentana() {
        if (nuevaVentana) {
            if (estaCreciendo) {
                anchoActual += 40;
                altoActual += 40;
            } else {
                anchoActual -= 40;
                altoActual -= 40;
            }

            // Cambia el tamaño de la ventana
            nuevaVentana.resizeTo(anchoActual, altoActual);

            if (anchoActual <= 160) {
                estaCreciendo = true;
            }

            if (anchoActual >= 400) {
                estaCreciendo = false;
            }
        }
    }

    // Establece un intervalo para cambiar el tamaño de la ventana cada 1000 milisegundos (1 segundo)
    setInterval(cambiarTamañoVentana, 1000);
}

// Agrega un evento al botón para abrir una nueva ventana cuando se hace clic
boton.addEventListener("click", abrirNuevaVentana);
