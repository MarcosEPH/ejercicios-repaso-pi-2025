function sumarArreglo(arreglo) {
    let sumaTotal = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      sumaTotal += arreglo[i];
    }
  
    return sumaTotal;
  }
  
  let numeros = [];
  let continuar = true;
  
  while (continuar) {
    let numero = parseFloat(prompt("Ingresa un número:"));
    numeros.push(numero); 
    
    continuar = confirm("¿Quieres ingresar otro número?"); 
  }
  
  let suma = sumarArreglo(numeros);
  console.log(`La suma total de los números ingresados es: ${suma}`);