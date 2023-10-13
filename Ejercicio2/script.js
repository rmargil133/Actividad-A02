// Pedir al usuario su nombre y apellidos
let nombre = prompt("Introduce tu nombre y los dos apellidos")

// Eliminar espacios en blanco y dividir el nombre y apellidos
let nombreApellidos = nombre.trim().split(" ");

// Calcular el tamaño del nombre más los apellidos (sin contar espacios)
document.write(nombreApellidos.join("").length , "<br>");

// Convertir la cadena a minúsculas y mayúsculas
document.write(nombre.toLowerCase() , "<br>")
document.write(nombre.toUpperCase() , "<br>")

// Separar nombre y apellidos
document.write(nombreApellidos[0] , "<br>")
document.write(nombreApellidos[1] , "<br>")
document.write(nombreApellidos[2] , "<br>")

// Generar propuestas de nombre de usuario
document.write(nombreApellidos[0][0].toLowerCase() , nombreApellidos[1].toLowerCase() , nombreApellidos[2][0].toLowerCase() , "<br>");
document.write(nombreApellidos[0].substring(0, 3) , nombreApellidos[1].substring(0, 3).toLowerCase() , nombreApellidos[2].substring(0, 3).toLowerCase() , "<br>");




