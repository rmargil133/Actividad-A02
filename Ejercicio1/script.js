let radio = prompt("Introduce el valor del radio");

document.write(`El radio es ${radio}.<br>`);

let diametro = radio * 2;
document.write(`El diámetro es ${diametro}.<br>`);

let perimetro = Math.PI * diametro;
document.write(`El perímetro es ${perimetro.toFixed(2)}.<br>`);

let areaCirculo = Math.PI * Math.pow(radio, 2);
document.write(`El área del círculo es ${areaCirculo.toFixed(2)}.<br>`);

let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
document.write(`El área de la esfera es ${areaEsfera.toFixed(2)}.<br>`);

let volumen = (4/3) * Math.PI * Math.pow(radio, 3);
document.write(`El volumen de la esfera es ${volumen.toFixed(2)}.<br>`);
