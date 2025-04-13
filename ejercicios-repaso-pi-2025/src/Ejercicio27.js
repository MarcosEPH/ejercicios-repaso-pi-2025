const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
let intento;

do {
  // Pedir un intento al usuario
  intento = parseInt(prompt("Adivina el número secreto entre 1 y 100:"));

  if (intento < NUMERO_SECRETO) {
    console.log("Demasiado bajo, intenta nuevamente.");
  } else if (intento > NUMERO_SECRETO) {
    console.log("Demasiado alto, intenta nuevamente.");
  }

} while (intento !== NUMERO_SECRETO);

console.log("¡Adivinaste!");