// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

const puedeVotar = edad => {
    let resultado = false;

    if (edad >= 18) {
        console.log('Puede votar');
    } else {
        console.log('No puede votar');
    }
};

puedeVotar(17);
puedeVotar(18);
puedeVotar(19);

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

const promedioAlumno = (nota1, nota2, nota3, nota4) => {
    const sumaNotas = nota1 + nota2 + nota3 + nota4;
    const numeroNotas = 4;
    const promedio = sumaNotas / numeroNotas;

    if (promedio >= 7) {
        console.log('Aprobado');
    } else {
        console.log('Reprobado');
    }
};

promedioAlumno(7, 6, 7, 5);
promedioAlumno(9, 10, 5, 5);

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

const esDivisible7y8 = numero => {
    if (numero % 7 == 0 && numero % 8 == 0) {
        console.log('Verdadero');
    } else {
        console.log('Falso');
    }
};

esDivisible7y8(56);
esDivisible7y8(7);
esDivisible7y8(8);
esDivisible7y8(0);
esDivisible7y8(224);
esDivisible7y8(73);

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

const esDivisible4o9 = numero => {
    if (numero % 4 == 0 || numero % 9 == 0) {
        console.log('Verdadero');
    } else {
        console.log('Falso');
    }
};

const random1 = Math.floor(Math.random() * 100);
const random2 = Math.floor(Math.random() * 100);
const random3 = Math.floor(Math.random() * 100);
const random4 = Math.floor(Math.random() * 100);
const random5 = Math.floor(Math.random() * 100);
const random6 = Math.floor(Math.random() * 100);

console.log(random1);
console.log(random2);
console.log(random3);
console.log(random4);
console.log(random5);
console.log(random6);

esDivisible4o9(random1);
esDivisible4o9(random2);
esDivisible4o9(random3);
esDivisible4o9(random4);
esDivisible4o9(random5);
esDivisible4o9(random6);

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

const calculadora = (operacion, numero1, numero2) => {
    const operacionMinusculas = operacion.toLowerCase();

    switch (operacion) {
        case 'suma':
            const suma = numero1 + numero2;
            console.log(suma);
            break;
        case 'resta':
            const resta = numero1 - numero2;
            console.log(resta);
            break;
        case 'multiplicacion':
            const multi = numero1 * numero2;
            console.log(multi);
            break;
        default:
            if (numero2 == 0) {
                console.log('Error, no existe la división entre 0.');
            } else {
                const division = numero1 / numero2;
                console.log(division);
            }
            break;
    }
};

calculadora('suma', 5, 9);
calculadora('resta', 4, 10);
calculadora('multiplicacion', 9, 0);
calculadora('division', 100, 0);
calculadora('division', 0, 100);

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

const recomendacionPeliculas = (genero) => {
    const generoMinusculas = genero.toLowerCase();

    switch (generoMinusculas) {
        case 'accion':
            console.log('Rápidos y Furiosos');
            break;
        case 'drama':
            console.log('Apuesta Maestra');
            break;
        case 'comedia':
            console.log('Supercool');
            break;
        case 'romance':
            console.log('La forma del agua');
            break;
        case 'suspenso':
            console.log('Oppenheimer');
            break;
        default:
            console.log('It');
            break;
    }
};

recomendacionPeliculas('accion');
recomendacionPeliculas('drama');
recomendacionPeliculas('comedia');
recomendacionPeliculas('romance');
recomendacionPeliculas('suspenso');
recomendacionPeliculas('terror');

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

const interfazATM = seleccion => {
    if (seleccion == 1) {
        console.log('1. Retirar dinero');
    } else if (seleccion == 2) {
        console.log('2. Transferencia');
    } else if (seleccion == 3) {
        console.log('3. Retirar dinero');
    } else {
        console.log('4. Pago de servicios');
    }
}

interfazATM(1);
interfazATM(2);
interfazATM(3);
interfazATM(4);

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

const conversorDivisas = (divisa, pesos) => {
    const divisaMinusculas = divisa.toLowerCase();
    let conversion = 0;

    switch (divisaMinusculas) {
        case 'dolar':
            conversion = pesos * 0.059;
            console.log(`${pesos} pesos son ${conversion} dólares.`);
            break;
        case 'euro':
            conversion = pesos * 0.054;
            console.log(`${pesos} pesos son ${conversion} euros.`);
            break;
        case 'yen':
            conversion = pesos * 8.53;
            console.log(`${pesos} pesos son ${conversion} yenes.`);
            break;
        case 'libra':
            conversion = pesos * 0.046;
            console.log(`${pesos} pesos son ${conversion} libras esterlinas.`);
            break;
        default:
            conversion = pesos * 0.050;
            console.log(`${pesos} pesos son ${conversion} francos suizos.`);
            break;
    }
}

conversorDivisas('dolar', 2000);
conversorDivisas('euro', 2000);
conversorDivisas('yen', 2000);
conversorDivisas('libra', 2000);
conversorDivisas('franco', 2000);

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

const descuentoProducto = (codigoDescuento, precioProducto) => {
    if (codigoDescuento === 'DESCUENTO10') {
        console.log(precioProducto * 0.9);
    } else {
        console.log('Código no válido');
    }
}

descuentoProducto('DESCUENTO10', 500);
descuentoProducto('DESCUENTO11', 500);