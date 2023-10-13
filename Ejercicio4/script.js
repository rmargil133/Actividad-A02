function actualizarReloj() {
    // Obtiene la hora actual
    const horaActual = new Date();

    // Obtiene las horas, minutos y segundos
    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();

    // Determina si es AM o PM
    let formato = horas >= 12 ? 'PM' : 'AM';

    // Formatea las horas en un formato de 12 horas
    horas = horas % 12 || 12;
    horas = horas < 10 ? '0' + horas : horas; // Añade a las horas un cero si es un solo dígito
    minutos = minutos < 10 ? '0' + minutos : minutos; // Añade a los minutos un cero si es un solo dígito
    segundos = segundos < 10 ? '0' + segundos : segundos; // Añade a los segundos un cero si es un solo dígito

    // Actualiza los elementos HTML con la hora, minutos, segundos y formato
    document.getElementById('hora').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
    document.getElementById('formato').textContent = formato;
}

// Llama a la función actualizarReloj cada segundo para actualizar la hora en tiempo real
setInterval(actualizarReloj, 1000);

