const CONTRASENA_CORRECTA = 'claveSegura';
let contrasena;

do {
  contrasena = prompt("Ingresa la contraseña:");

  if (contrasena !== CONTRASENA_CORRECTA) {
    console.log("Contraseña incorrecta");
  }

} while (contrasena !== CONTRASENA_CORRECTA);

console.log("Acceso permitido");