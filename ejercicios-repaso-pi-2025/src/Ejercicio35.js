const numeros = [1, 2, 3, 4, 5];
let numerosInvertidos = [];

for (let i = numeros.length - 1; i >= 0; i--) {
  numerosInvertidos.push(numeros[i]);
}

console.log("Arreglo invertido:", numerosInvertidos);