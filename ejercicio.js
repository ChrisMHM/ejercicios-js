/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 */
let actualYear = 2024;
let actualMonth = 1;
let actualDay = 8;
let favoriteAge = 23;
let numberOfTires = 2;
let numebrOfStars = 4.5;
let bootcampMonthsDuration = 3;
let howMuchTacos = 8;
let countries = 195;
let primaryColors = 3;

let name = 'Christian';
let lastName = 'Hernandez';
let country = 'Mexico';
let city = 'CDMX';
let favoriteDish = 'Pozole';
let favoriteProgrammingLanguage = 'C';
let tacos = 'Al pastor';
let dogName = 'Hanna';
let favoriteSport = 'Running';
let actualListeningSong = 'Like a Stone';

let isFullOfFuel = false;
let formCompleted = true;
let isRaining = false;
let gainedWeightInHolidays = true;
let isUserLoggedIn = false;
let cheemsIsAlive = false;
let movieWatched = true;
let isFormValid = false;
let isUserPremium = true;
let wifiEnabled = false;

/* Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 */
const numberOfTacos = 2;
const aditionalTacos = 10;
const notEatenTacos = 4;
const pricePerTaco = 25;
const numberOfClients = 2;

console.log(numberOfTacos + aditionalTacos);
console.log(numberOfTacos + aditionalTacos - notEatenTacos);
console.log((numberOfTacos + aditionalTacos - notEatenTacos) * pricePerTaco);
console.log(((numberOfTacos + aditionalTacos - notEatenTacos) * pricePerTaco) / numberOfClients);

/* Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 */
const greeting = 'Hola, ';
const userName = 'Christian';
const userLastName = 'Hernández';
const favoritePet = 'perros';
const favoriteFood = 'tacos';

console.log(greeting + userName);
console.log('Tu nombre completo es: ' + userName + ' ' + userLastName);
console.log('Tus mascotas favoritas son los ' + userName);
console.log('Tu comida favorita son los ' + favoriteFood);
console.log('Te comes ' + numberOfTacos + aditionalTacos + ' ' + favoriteFood);

/* Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

let actualAge = 33;
let message = 'Hola';
const hasClasses = true;
let arr = [1, 2, 3];
var obj = { name: "Juan", age: 25 };


actualAge = String(actualAge);
message = Number(message);
hasClasses = String(hasClasses);
userName = Number(userName);
numberOfTacos = String(numberOfTacos);