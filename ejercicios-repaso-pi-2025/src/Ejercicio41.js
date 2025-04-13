function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let contraseña = '';
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres[indiceAleatorio];
    }
  
    return contraseña;
  }
  
  let longitud = parseInt(prompt("Ingresa la longitud de la contraseña:"));
  let contraseñaGenerada = generarContraseña(longitud);
  console.log(`La contraseña generada es: ${contraseñaGenerada}`);