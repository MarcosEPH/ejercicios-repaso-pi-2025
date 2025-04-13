const notas = [80, 90, 70, 100];

const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);

const promedio = sumaNotas / notas.length;

console.log(`Suma de las notas: ${sumaNotas}`);
console.log(`Promedio: ${promedio}`);