/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:´
let nuevoArray = Object.entries(objeto)
return nuevoArray;
 
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var orden = string.split("").sort( function (a,b){
      return a.localeCompare(b)
   }).join("")

   var obj = {};

   for (let i = 0; i < orden.length; i++) {
      if (orden[i] in obj){
         obj[orden[i]]++
      } else { obj[orden[i]] = 1}
   } return obj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var resultado ="";
   var mayus = "";
   var minus = "";

   for (let i = 0; i < string.length; i++){
      if (string[i] === string[i].toUpperCase()) {
         mayus += string[i]
      } else {
         minus += string[i]
      }
   }
   resultado = mayus + minus
return resultado;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

      var fraseEspejo = frase.split(" ");
      var arrayEspejo = [];

      for (let i= 0; i < fraseEspejo.length; i++) {
         let espejo = fraseEspejo[i].split("").reverse().join("")
         arrayEspejo.push(espejo);
      }

      return arrayEspejo.join(" ")
}

function capicua(numero) { 
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let num = numero.toString().split("").reverse().join("")

   if (num == numero) return "Es capicua"
   return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
let nuevoString = string.split("")
let sinABC = [];

   for (let i= 0; i < nuevoString.length; i++) {
      if (nuevoString[i] !== "a" && nuevoString[i] !== "b" && nuevoString[i] !== "c" ) {
         sinABC.push(nuevoString[i])
      }
   } 
  return sinABC.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

  let largo = arrayOfStrings.length - 1;
  let arr = arrayOfStrings;

  for (let i=0; i < largo; i++){
   for (let j = 0; j < largo - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
         let temp = arr[j];
         arr[j] = arr[j + 1];
         arr[j +1] = temp;
      }
   }
  }
  return arr;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let int = [];

   for (let i = 0; i < array1.length ; i++) {
      for (let j= 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            int.push(array1[i])
         }
      }
   }
   return int

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
