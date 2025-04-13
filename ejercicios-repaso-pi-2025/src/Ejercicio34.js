const notas = [
    [80, 90, 100], 
    [70, 60, 75],  
    [88, 95, 92], 
];

for (let i = 0; i < notas.length; i++) {
  let sumaNotas = 0;

  for (let j = 0; j < notas[i].length; j++) {
    sumaNotas += notas[i][j];
  }

  let promedio = sumaNotas / notas[i].length;

  console.log(`Promedio del estudiante ${i + 1}: ${promedio}`);
}