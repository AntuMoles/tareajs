// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {
   
    console.log(`El número ${numeros[i]} es par`);
  } else {
    
    console.log(`El número ${numeros[i]} es impar`);
  }
}




// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución: 

const calificaciones = [45, 68, 75, 82, 91, 59, 88, 72, 93, 55];

for (let i = 0; i < calificaciones.length; i++) {

  if (calificaciones[i] < 60) {
    console.log(`Calificación ${calificaciones[i]}: Reprobado`);
  } else if (calificaciones[i] >= 60 && calificaciones[i] <= 80) {
    console.log(`Calificación ${calificaciones[i]}: Aprobado`);
  } else {
    console.log(`Calificación ${calificaciones[i]}: Excelente`);
  }
}


// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// Solución: 

const precios = [15.99, 25.50, 8.75, 42.00, 65.99, 19.99, 55.00, 37.50, 89.99, 12.50];
for (let i = 0; i < precios.length; i++) {
  if (precios[i] < 20) {
    console.log(`Producto ${i + 1} ($${precios[i].toFixed(2)}): Producto económico`);
  } else if (precios[i] >= 20 && precios[i] <= 50) {
    console.log(`Producto ${i + 1} ($${precios[i].toFixed(2)}): Producto de precio moderado`);
  } else {
    console.log(`Producto ${i + 1} ($${precios[i].toFixed(2)}): Producto de lujo`);
  }
}
