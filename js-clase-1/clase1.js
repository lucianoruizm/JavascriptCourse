// VARIABLES

// --SINTAXIS VIEJA--
//VAR

// No me arroja error cuando la llamo sin haber sido declarada
console.log(nombre);

// Puedo declarar una variable sin asignarle un valor
var nombre;
console.log('Varable declarada:', nombre);

// Luego, puedo inicializar una variable
nombre = "Cristian";
console.log('Variable inicializada:', nombre);

// También, actualizar el valor de una variable
nombre = 'Walter';
console.log('Variable actualizada:', nombre);

// E incluso es posible "Redeclarar" una variable (declarar una variable con)
var nombre = 'Pepe';
console.log('Variable redeclarada:', nombre);


//---Sintaxis Nueva---

// Si se llama a una variable que no fue declarada arroja error
console.log(nombre);

//LET
// Se puede declarar una variable sin asignarle un valor
let nombre;
console.log('Variable inicializada:', nombre);

// Inicializar una variable
nombre = 'Cristian';
console.log('Variable inicializada:', nombre);

// También, actualizar el valor de una variable
let nombre = "Walter";
console.log('Variable actualizada:', nombre);

// No puedo "Redeclarar" una variable, pues arroja error
let nombre = 'Pepe';
console.log('Variable no puede ser redeclarada:', nombre);

//CONST
// No puedo declarar una variable sin asignarle un valor, me arroja error
const nombre = "Cristian";
console.log('Varable declarada:', nombre);

// No podemos actualizar el valor primitivo de una variable
nombre = "Walter";
console.log('Variable actualizada:', nombre);