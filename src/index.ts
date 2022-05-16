/*• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arregloNumeros: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNumeros[indice] = Number(
    prompt("Ingrese un número para la posición " + indice)
  );
}
for (indice = dimensionArreglo - 1; indice >= 0; indice--) {
  console.log(
    "El número para la posición " + indice + " es " + arregloNumeros[indice]
  );
}
