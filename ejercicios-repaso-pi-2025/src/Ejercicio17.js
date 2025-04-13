let a = 10,
    b = 5,
    c = 7;

if (a > b) {
  if (a > c) {
    console.log("El número mayor es " + a);
  } else {
    console.log("El número mayor es " + c);
  }
} else {
  if (b > c) {
    console.log("El número mayor es " + b);
  } else {
    console.log("El número mayor es " + c);
  }
}