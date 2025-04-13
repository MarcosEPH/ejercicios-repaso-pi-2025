const numeros = [10, 15, 20, 25, 30, 5];
let suma = 0;
let count = 0;
let i = 0;

while (suma < 100 && i < numeros.length) {
  suma += numeros[i];
  count++;
  i++;
}

console.log(`Suma total: ${suma}`);
console.log(`Cantidad de números utilizados: ${count}`);