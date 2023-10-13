  // Solicitar al usuario que ingrese una fecha en formato YYYY-MM-DD.
  const fechaIngresada = prompt("Ingresa una fecha en formato YYYY-MM-DD:");

// Definir una función llamada obtenerNumeroSemana que toma una fecha en formato "YYYY-MM-DD" como argumento.
function obtenerNumeroSemana(fechaStr) {
      // Convertir la fecha ingresada a un objeto de fecha.
      const fecha = new Date(fechaStr);
      
      // Crear una fecha de inicio de año para el cálculo.
      const fechaInicioAño = new Date(fecha.getFullYear(), 0, 1);
  
      // Calcular la cantidad de días transcurridos desde el inicio del año.
      const diasTranscurridos = Math.floor((fecha - fechaInicioAño) / (24 * 60 * 60 * 1000));
  
      // Calcular el número de semana a partir de los días transcurridos.
      const numeroSemana = Math.ceil((diasTranscurridos + fechaInicioAño.getDay() + 1) / 7);
  
      // Devolver el número de semana calculado.
      return numeroSemana;
    } 

  // Obtener el número de semana utilizando la función.
  const numeroSemana = obtenerNumeroSemana(fechaIngresada);
  
  // Imprimir el resultado en la consola.
    document.write(`La fecha ${fechaIngresada} pertenece a la semana número ${numeroSemana}.`);
  
  