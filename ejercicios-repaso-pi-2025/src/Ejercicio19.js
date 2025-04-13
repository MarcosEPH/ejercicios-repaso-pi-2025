let num1 = 12;
let num2 = 3;
let operacion = '+';

if (operacion === '+') {
  console.log(num1 + num2); // Suma
} else if (operacion === '-') {
  console.log(num1 - num2); // Resta
} else if (operacion === '*') {
  console.log(num1 * num2); // Multiplicación
} else if (operacion === '/') {
  if (num2 !== 0) {
    console.log(num1 / num2); // División
  } else {
    console.log("Error: No se puede dividir por 0");
  }
} else {
  console.log("Operación no válida");
}