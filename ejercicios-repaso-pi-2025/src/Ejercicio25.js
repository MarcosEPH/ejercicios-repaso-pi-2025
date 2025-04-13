let opcion;
let nombreIngresado;

do {
  console.log("Menú:");
  console.log("A - Bienvenid@");
  console.log("B - Bienvenid@ con nombre");
  console.log("3 - Salir");

  opcion = prompt("Elija una opción:");

  if (opcion === "A") {
    console.log("Bienvenid@");
  } else if (opcion === "B") {
    nombreIngresado = prompt("Ingrese su nombre:");
    console.log(`Bienvenid@ ${nombreIngresado}`);
  } else if (opcion !== "3") {
    console.log("Opción no válida, por favor elija otra.");
  }

} while (opcion !== "3");

console.log("¡Hasta luego!");