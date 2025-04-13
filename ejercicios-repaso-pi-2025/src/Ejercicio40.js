function validarCorreo(correo) {
    if (correo.includes('@') && correo.includes('.')) {
      console.log("Correo válido");
    } else {
      console.log("Correo inválido");
    }
  }
  
  let correoUsuario = prompt("Ingresa tu correo electrónico:");
  validarCorreo(correoUsuario);