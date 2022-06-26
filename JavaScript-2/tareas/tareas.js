// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  //Con if
  // if (x > y) {
  //   return x;
  // } else {
  //   return y;
  // }
  //Con ternario
  return x > y ? x : y;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  //Con if
  // if (edad >= 18) {
  //   return "Allowed";
  // } else {
  //   return "Not allowed";
  // }
  //Con ternario
  return edad >= 18 ? "Allowed" : "Not allowed";
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  //Con switch
  // let msg;
  // switch (status) {
  //   case 1:
  //     msg = "Online";
  //     break;
  //   case 2:
  //     msg = "Away";
  //     break;
  //   default:
  //     msg = "Offline";
  //     break;
  // }
  // return msg;
  //Con ternario
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  let saludos;
  switch (idioma) {
    case "aleman":
      saludos = "Guten Tag!";
      break;
    case "mandarin":
      saludos = "Ni Hao!";
      break;
    case "ingles":
      saludos = "Hello!";
      break;
    default:
      saludos = "Hola!";
      break;
  }
  return saludos;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
  let colores;
  switch (color) {
    case "blue":
      colores = "This is blue";
      break;
    case "red":
      colores = "This is red";
      break;
    case "green":
      colores = "This is green";
      break;
    case "orange":
      colores = "This is orange";
      break;
    default:
      colores = "Color not found";
      break;
  }
  return colores;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  //if
  // if (numero === 10 || numero === 5) {
  //   return true;
  // } else {
  //   return false;
  // }
  //ternario
  return numero === 10 || numero === 5 ? true : false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  //if
  // if (numero < 50 && numero > 20) {
  //   return true;
  // } else {
  //   return false;
  // }
  // ternario
  return numero < 50 && numero > 20 ? true : false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  //con if
  // if (Math.floor(numero) === numero) {
  //   return true;
  // } else {
  //   return false;
  // }
  //con ternario
  return Math.floor(numero) === numero ? true : false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 !== 0) {
    return "fizz";
  } else if (numero % 5 === 0 && numero % 3 !== 0) {
    return "buzz";
  } else if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  //   es importante que primero pongas las condiciones que llevan el operador OR || y LUEGO!! si las condiciones que llevan el operador and &&
  // sino no funciona
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 > 0 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return ++num3;
  } else {
    return false;
  }
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor === true ? "Soy verdadero" : "Soy falso";
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  return numero / 100 >= 1 && numero / 100 < 10 ? true : false;
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let count = 0;
  for (let i = 2; numero >= i; i++) {
    if (numero % i === 0) {
      count += 1;
    }
  }
  if (count === 1) {
    return true;
  } else {
    return false;
  }
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let arr = [];
  for (i = 0; i < 11; i++) {
    arr.push(6 * i);
  }
  return arr;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;
  do {
    i++;
    numero += 5;
  } while (i < 8);
  return numero;
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
