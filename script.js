function validarFormulario() {
  // Valores de los campos del formulario
  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const email = document.getElementById("email").value;

  // Verifica que no esten vacios
  if (apellido === "" || nombre === "" || dni === "" || fechaNacimiento === "" || email === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Verifica que nombre y apellido no tengan numeros
  if (/\d/.test(apellido) || /\d/.test(nombre)) {
    alert("El nombre y el apellido no deben tener numeros.");
    return;
  }

  // Verifica que el DNI tenga exactamente 8 numeros
  if (dni.length !== 8) {
    alert("El DNI debe tener 8 numeros.");
    return;
  }

  // Verifica que el año de nacimiento sea 2006 o mayor
  const anioNacimiento = parseInt(fechaNacimiento.substring(0, 4));
  if (anioNacimiento < 2006) {
    alert("Debes haber nacido en 2006 o despues.");
    return;
  }

  // Verifica que el mail tenga un @ y un punto
  if (!email.includes("@") || !email.includes(".")) {
    alert("El correo electrónico no es válido.");
    return;
  }

  // Si todo esta bien, muestra mensaje de exito y habilita el boton de preguntas
  alert("¡Formulario enviado!");
  document.getElementById("btnPreguntas").disabled = false;
}

function hacerPreguntas() {
  const nacionalidad = prompt("¿Cual es tu nacionalidad?");
  const colorFavorito = prompt("¿Cual es tu color favorito?");
  const mascota = prompt("¿Como se llama tu mascota?");
  const videojuego = prompt("¿Cual es tu videojuego favorito?");

  // Validar que ninguna respuesta esté vacía
  if (
    !nacionalidad || !colorFavorito || !mascota || !videojuego
  ) {
    alert("Por favor, responde todas las preguntas.");
    return;
  }

  // Validar que ninguna respuesta tenga numeros
  if (
    /\d/.test(nacionalidad) ||
    /\d/.test(colorFavorito) ||
    /\d/.test(mascota) ||
    /\d/.test(videojuego)
  ) {
    alert("Las respuestas no deben tener numeros.");
    return;
  }

  // Si todo está bien, mostrar las respuestas
  const respuestasDiv = document.getElementById("respuestas");
  respuestasDiv.innerHTML = `
    <h3>Respuestas:</h3>
    <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
    <p><strong>Color Favorito:</strong> ${colorFavorito}</p>
    <p><strong>Nombre de Mascota:</strong> ${mascota}</p>
    <p><strong>Videojuego Favorito:</strong> ${videojuego}</p>
  `;
}
