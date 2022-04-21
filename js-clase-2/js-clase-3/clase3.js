// Stack y Heap (cómo impactan los cambios e valores compuestos creados
// a partir de otros valores compuestos)
const user = {
    nombre: 'Luke',
    id: 1,
}

const user2 = user;

console.log(user)
console.log(user2)

user2.nombre = "Peter";

console.log(user)
console.log(user2)



const user3 = {
    name: 'Sherlock Holmes',
    age: 60,
    genre: 'male',
    interests: ['Violin', 'Boxing'],

    greetings: function() {
        alert('Hello, i am' + this.name + '.')
    }
}

const user4 = {
    name: 'Willem Dafoe',
    age: 68,
    genre: 'male',
    interests: ['Guitar', 'Tennis'],

    greetings: function() {
        alert('Hello, i am' + this.name + '.')
    }
}
// Por nombre en formato string
console.log(user4['age']);
// Por notación de punto
console.log(user4.age);

const user5 = {
    name: 'Sarah Connor',
    age: 78,
    email: 'sarahconnor@gmail.com',

    login: function() {
        console.log('El usuario se ha logueado');
    },
    logout: function() {
        console.log('El usuario se ha deslogueado');
    },
}
// Llamando métodos
console.log(user5.login())
console.log(user5.logout())


// Math
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));

console.log(Math.random());

const id = Math.round(Math.random() * 100);

console.log(id);


// IF - estructura de control condicional
const password = '13@LucS1'

if (password.length >= 12 && password.includes ('@')) {
    console.log('La contraseña es extremadamente fuerte');
} else if (password.length >= 8 || password.includes ('#')) {
    console.log('La contraseña es lo suficientemente fuerte');
} else {
    console.log('La contraseña no es lo suficientemente larga');
}



//Switch
const calificacion = 10;

switch (calificacion) {
    case 1:
        console.log('Obtuviste 1');
        break;
    case 2:
        console.log('Obtuviste 2');
        break;
    case 3:
        console.log('Obtuviste 3');
        break;
    case 4:
        console.log('Obtuviste 4');
        break;
    case 5:
        console.log('Obtuviste 5');
        break;
    case 6:
        console.log('Obtuviste 6');
        break;
    case 7:
        console.log('Obtuviste 7');
        break;
    case 8:
        console.log('Obtuviste 8');
        break;
    case 9:
        console.log('Obtuviste 9');
        break;
    case 10:
        console.log('Obtuviste 10');
        break;
    default:
        console.log('No fuiste calificado');                                  
}



// For (Bucles- Loops)
for (var i = 0     ; i < 10        ; i++) {
    //  Declaramos  / Definimos     / Incrementamos
    // una variable / una condición / la variable
        console.log(i);
    }
    
    
    for (let i = 0     ; i < 5        ; i++) {
            console.log('ciclo: ', i);
        }
    
        console.log('Ciclo terminado');

// While
let j = 0;
while (j < 5) {
    console.log('Ciclo: ', j);
        j++;
}

console.log('Ciclo terminado')

// Do... while
let s = 0;
do {
    console.log('Ciclo: ', s);
        s++;
} while (s < 5);

console.log('Ciclo terminado')



// Ejemplos bucles con array
let array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Con array.length se puede escalar, caso contrario pasaria si en vez de usar array.length se especifica un cierto número.

let order = [20, 0, 25, 66, 140, 100]

for (let i = 0; i < order.length; i++) {
    
    if(order[i] === 0){
        continue;
    }

    console.log('Order available: ', order[i])

    if (order[i] === 66) {
    console.log('Execute order: ', order[i]);
    break;
    }
}



// Imprimir Factura

const electrodomesticos = [
    { nombre: 'Televisor', precio: 40000, color: 'Gris' },
    { nombre: 'Heladera', precio: 100000, color: 'Blanco' },
    { nombre: 'PC', precio: 100000, color: 'Negro'},
    { nombre: 'Licuadora', precio: 10000, color: 'Rojo' },
    { nombre: 'Aspiradora', precio: 20000, color: 'Amarillo' },
    { nombre: 'Parlante', precio: 50000, color: 'Negro' },
    { nombre: 'Microondas', precio: 20000, color: 'Azul' },
    { nombre: 'Lavarropa', precio: 70000, color: 'Blanco' },
]

const impuestosPorProducto = [
    { nombre: 'IVA', importe: 0.21 },
    { nombre: 'Importación', importe: 0.3 },
    { nombre: 'Ingresos Brutos', importe: 0.1 },
]

console.log(electrodomesticos);

function imprimirFactura(productos, impuestos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        const iva = productos[i].precio * impuestos[0].importe;
        const importacion = productos[i].precio * impuestos[1].importe;
        const ingresosBrutos = productos[i].precio * impuestos[2].importe;

        const precioConImpuestos = productos[i].precio + iva + importacion + ingresosBrutos;

        total = total + precioConImpuestos;
    }

    // AÑADIR MÁS COSAS A LA FACTURA
    return total;
}

const sumaTotal = imprimirFactura(electrodomesticos, impuestosPorProducto);

console.log(sumaTotal);