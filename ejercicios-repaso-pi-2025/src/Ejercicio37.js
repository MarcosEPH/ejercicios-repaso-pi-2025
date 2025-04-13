function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  let base = parseFloat(prompt("Ingresa la base del triángulo:"));
  let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
  
  let area = calcularAreaTriangulo(base, altura);
  console.log(`El área del triángulo es: ${area}`);