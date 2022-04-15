// TIPO DE DATO "STRING"

//camelCase
const estoEsUnString = "Texto"

console.log(estoEsUnString.length);
console.log(estoEsUnString.toLowerCase());
console.log(estoEsUnString.toUpperCase());

const nombre = "Sherlock";
      apellido = "Holmes";
      edad = 24;

console.log(nombre);
console.log(apellido);
console.log(edad);

//Sintaxis vieja
const saludo = "Hello my name is " + nombre + " " + apellido + "."
console.log(saludo);

//Sintaxis nueva
const saludo2 = `Hello my name is ${nombre} ${apellido}.`
console.log(saludo);


// TIPO DE DATO "NUMBER"

const numeroString = "2021"

var numero = 2021;
  numeroNegativo = -32;
  numeroConDecimales = 3.1416;
 
console.log(numeroString)
console.log(numero)
console.log(numeroNegativo)
console.log(numeroConDecimales)

console.log(numero.toString())

// OPERADORES ARITMÉTICOS
const numero2 = 24;
const numero3 = 64;

const suma = numero2 + numero3;
const resta = numero2 - numero3;

console.log(suma)
console.log(resta)


let numero4 = 24;
let numero5 = 24;

numero4++; //numero4 = numero4 + 1
numero5--; //numero5 = numero5 - 1

console.log(numero4)
console.log(numero5)

// Type coercion (por detrás hay un .tostrign(), por ejemplo en caso de que la operación es suma)
let numero6 = 24;
let numero7 = '64';

let suma2 = numero6 + numero7;

console.log(suma2)
// Estos problemas pueden solucionarse con TYPESCRIPT


// BOOLEAN
var verdadero = true;
var falso = false;

console.log(verdadero)
console.log(falso)

let darkModeOn = true;
let darkModeOff = false;

console.log('Dark mode on =',darkModeOn)
console.log('Dark mode off =',darkModeOff)


// OPERADORES DE COMPARACIÓN

var mayorQue = 1 > 2;
var menorQue = 2 < 3;

var mayorOIgualQue = 10 >= 10;
var menorOIgualQue = 10 <= 10;

console.log(mayorQue)
console.log(menorQue)
console.log(mayorOIgualQue)
console.log(menorOIgualQue)


var operadorDeIgualdad = 1 == '1';
var operadorDeEstrictaIgualdad = 1 === '1'; // Mas estricto en el tipo de dato

console.log(operadorDeIgualdad)
console.log(operadorDeEstrictaIgualdad);

var operadorDeDiferencia = 1 != '1';
var operadorDeDiferenciaEstricta = 1 !== '1';

console.log(operadorDeDiferencia)
console.log(operadorDeDiferenciaEstricta)


// NaN (Not a Number)
isNotANumber = "Hello" * 3.7;

console.log(isNotANumber)


// Null
var noSeAsignaUnValor = null;

console.log(noSeAsignaUnValor)


// Undefined

var noSeAsignaUnValor2;

console.log(noSeAsignaUnValor2)