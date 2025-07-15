
function abrirFormulario(nombre) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("animalNombre").textContent = nombre;
  document.getElementById("animal").value = nombre;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function enviarFormulario(event) {
  event.preventDefault();
  const nombre = document.querySelector("#modal input[type='text']").value;
  const animal = document.getElementById("animal").value;
  alert(`Gracias ${nombre}, hemos recibido tu solicitud para adoptar a ${animal}. ¡Nos contactaremos contigo pronto!`);
  cerrarModal();
  event.target.reset();//reiniciar el formulario cuando se termine
}

window.onclick = function(event) {//cuando doy click se pueda hacer algo
  if (event.target === document.getElementById("modal")) {
    cerrarModal();
  }
};function verImagen(src) {
  const modal = document.getElementById("imgModal");
  const imagen = document.getElementById("imagenGrande");
  imagen.src = src;
  modal.style.display = "block";
}

function cerrarImagen() {//para cerrar imagen
  document.getElementById("imgModal").style.display = "none";
}
function mostrarSeccion(id) {//para separar las secciones 
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => sec.classList.remove("activa")); 
  const activa = document.getElementById(id);
  if (activa) activa.classList.add("activa"); 
}
window.addEventListener("DOMContentLoaded", () => { //Le dice al navegador: “Cuando termine de cargar el documento (sin esperar imágenes o CSS), ejecuta esta función.”
  mostrarSeccion("Inicio");
});
function publicarAnimal(event) {
  event.preventDefault();//para evitar que la pagina se recargue cuando envio el formulario
  const form = document.getElementById('formAdopcion');
  const datos = new FormData(form);//nuevo dato ingresado

  const nombre = datos.get('nombre'); //get para el formulario manda 
  const tipo = datos.get('tipo');
  const edad = datos.get('edad');
  const descripcion = datos.get('descripcion');
  const contacto = datos.get('contacto');
  const imagen = datos.get('imagen');

  const reader = new FileReader();
  reader.onload = function () {
    const contenedor = document.querySelector(`#${tipo} .cards`);// const para constante 
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${reader.result}" alt="${nombre}">
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <p><strong>Edad:</strong> ${edad} años</p>
      <p><strong>Contacto:</strong> ${contacto}</p>
      <button onclick="abrirFormulario('${nombre}')">Adoptar</button>
    `;
    contenedor.appendChild(card);
    form.reset();
    alert("¡Animal publicado correctamente!");
  };

  reader.readAsDataURL(imagen);
}