// Declaración de función
function myFirstFunction() {
    console.log("Hello World")
}

// LLamado a la función 
myFirstFunction();


// Declaración de función con parametros --Funciones declaradas---
function suma(a, b) {
    return a + b;
}

// LLamado a la función 
const resultado = suma();
const resultado2 = suma(23, 64);
const resultado3 = suma(33, 76);

console.log(resultado)
console.log(resultado2)
console.log(resultado3)


// --Funciones expresadas--
const suma2 = function (x = 4, y = 5) {
    return x + y;
}

const resultado4 = suma2();

console.log(resultado4)


// --Funciones anónimas--
//  function () {
//      console.log("Anonymous")
//  }


// --Funciones flechas--
const funcionFlecha = () => {
    console.log("Arrow Function")
}

const arrowFuncion = funcionFlecha();

// Ejemplo forma 1
const suma3 = (a, b) => {
    return a + b;
}

const resultado5 = suma3(3, 5);

console.log(resultado5)

// Ejemplo forma 2
const sumarUno = (a) => {
    return a + 1;
}

const resultado6 = sumarUno(22);

console.log(resultado6)

// Ejemplo forma 3
const sumarDos = a => {
    return a + 2;
}

const resultado7 = sumarDos(22);

console.log(resultado7)

// Ejemplo forma 4
const sumarTres = a => a + 3;

const resultado8 = sumarTres(22);

console.log(resultado8)

// Mas ejemplos
function calcularAreaCirculo(radio) {
    return 3.14 * radio**2;
}

const area = calcularAreaCirculo(5);

console.log(area)

// Funcion flecha
const calcularAreaCirculo2 = radio2 => 3.14 * radio2**2;

const area2 = calcularAreaCirculo2(5);

console.log(area2)

// Ejemplo utilización de funciones
const saludar = function(nombre, momentoDelDia) {
    const saludo = `Good ${momentoDelDia}, ${nombre}`
    return saludo;
}

const saludo = saludar ('Joel', 'Night');
const saludo2 = saludar ('Ellie', 'Morning');
console.log(saludo)
console.log(saludo2)



// Arrays
var myFirstArray = ["Hello", 1, true, ["a", "b", "c"]]

console.log(myFirstArray)
console.log(myFirstArray[3][1])

var mySecondArray = ["World", 2, false, ["d", "e", "f"]]

console.log(mySecondArray[0])
console.log(mySecondArray[1])
console.log(mySecondArray[2])
console.log(mySecondArray[3])
console.log(mySecondArray.length)

var electrodomesticos = ["Heladera", "Horno", "Lavarropa"];

console.log(electrodomesticos)

// Array mutation
electrodomesticos[1] = "Licuadora";

console.log(electrodomesticos)

electrodomesticos[1] = "Cocina";

console.log(electrodomesticos)


// .push - .pop
const estudiantes = ["Martin", "Juan", "Patricia", "Marcos"];

estudiantes.push("Carla"); // Adición, se pueden agregar uno o más.

console.log(estudiantes)


estudiantes.pop(); // Eliminación del ultimo

console.log(estudiantes)


//.unshift - .shift ---> Son exactamente como .push y .pop, excepto
// que operan en el primer elemento de la matriz.
const estudiantes2 = ["Leonardo", "Julia", "Pedro", "Mabel"];

estudiantes2.unshift("Samuel");

console.log(estudiantes2)

estudiantes2.shift();

console.log(estudiantes2)



// .slice ---> no muta al array, sino que toma una copia y hace uno nuevo
const estudiantes3 = ["Pablo", "Fernanda", "John", "Hanna", "Harry", "Lee"];

const newArray = estudiantes3.slice(2);

console.log(estudiantes3);

console.log(newArray)


// Spread Operator ---> We can create a new array only with the unique values
// by using the Set object and the Spread operator.
const estudiantes4 = ["Pablo", "Fernanda", "John", "Hanna", "Harry", "Lee"];
const estudiantes5 = ["Gabriel", "Michelle", "Mary", "Luke", "Leia", "Han"];

const newArray2 = [...estudiantes4, ...estudiantes5, 'Jean', 'Sara'];

console.log(newArray2)


//---------
const estudiantes6 = ["Pablo", "Fernanda", "John", "Hanna", "Harry", "Lee"];

// Version NO-MUTABLE de .push utilizando Spread operator
const push = (array, nuevoElemento) => [...array, nuevoElemento];

// Version NO-MUTABLE de .pop utilizando .slice
const pop = array => array.slice(0, -1);

// Version NO-MUTABLE de shift 
const shift = array => array.slice(1);

// Version NO-MUTABLE de unshift 
const unshift = (array, nuevoElemento) => [nuevoElemento, ...array];


const newArrayEstudiantes = push(estudiantes6, "Kurt"); 
const newArrayEstudiantes2 = pop(estudiantes6);
const newArrayEstudiantes3 = shift(estudiantes6)
const newArrayEstudiantes4 = unshift(estudiantes6, "Carolina")


console.log(estudiantes6)

console.log(newArrayEstudiantes)
console.log(newArrayEstudiantes2)
console.log(newArrayEstudiantes3)
console.log(newArrayEstudiantes4)