const recetasList = document.getElementById('recetas-list');
const eliminarRecetaBtn = document.getElementById('eliminar-receta');
const numeroRecetaInput = document.getElementById('numero-receta');

// Lista de recetas
const recetas = [
  { nombre: 'Tarta de Manzana', explicacion: 'Tarta de manzana con una base crujiente y un relleno manzanas, canela y azúcar.' },
  { nombre: 'Espagueti carbonara', explicacion: 'Clásica pasta italiana con una salsa cremosa de huevo, queso parmesano, panceta y pimienta negra' },
  { nombre: 'Ensalada César', explicacion: 'Fresca ensalada con lechuga romana, crutones, queso parmesano y aderezo César cremoso' },
  { nombre: 'Sopa de tomate', explicacion: 'Reconfortante sopa de tomate casera, preparada con tomates maduros, cebolla, ajo y hierbas aromáticas.' },
];

// Función para mostrar las recetas en la lista
function mostrarRecetas() {
    recetasList.innerHTML = '';
    recetas.forEach((receta, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${receta.nombre}: ${receta.explicacion}`;
      recetasList.appendChild(li);
    });
  }
  

// Función para eliminar una receta
function eliminarReceta() {
  const numeroReceta = parseInt(numeroRecetaInput.value);
  if (numeroReceta >= 1 && numeroReceta <= recetas.length) {
    recetas.splice(numeroReceta - 1, 1);
    mostrarRecetas();
    numeroRecetaInput.value = '';
  } else {
    alert('Número de receta no válido. Introduce un número entre 1 y ' + recetas.length);
  }
}

// Evento para mostrar las recetas al cargar la página
mostrarRecetas();

// Evento para eliminar una receta al hacer clic en el botón
eliminarRecetaBtn.addEventListener('click', eliminarReceta);
