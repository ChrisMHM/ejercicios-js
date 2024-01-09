/**Ejercicios para esta sesion
 *
 * Declara una funcion para cada problema planteado
 *
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 *
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

// calcular el perimetro de un circulo
function perimetroCircunferencia(diametro) {
    return Math.PI * diametro;
}

const perimetroCircunferenciaFlecha = diametro => Math.PI * diametro;

const diametroCircunferencia = 5;
console.log(`El perímetro de una circunferencia de diámetro ${diametroCircunferencia} es ${perimetroCircunferencia(diametroCircunferencia)}`);
console.log(`El perímetro de una circunferencia de diámetro ${diametroCircunferencia} es ${perimetroCircunferenciaFlecha(diametroCircunferencia)}`);

// calcular el area de un rectangulo
function areaRectangulo(base, altura) {
    return (2 * base) + (2 * altura);
}

const areaRectanguloFlecha = (base, altura) => (2 * base) + (2 * altura);
const base = 5;
const altura = 10;

console.log(`El área de un rectángulo de base ${base} y altura ${altura} es ${areaRectangulo(base, altura)}`);
console.log(`El área de un rectángulo de base ${base} y altura ${altura} es ${areaRectanguloFlecha(base, altura)}`);

// calcular el cuadrado de un numero
function cuadradoNumero(numero) {
    return numero * numero;
}

const cuadradoNumeroFlecha = (numero) => numero * numero;
const numero = 9;

console.log(`El cuadrado del número ${numero} es ${cuadradoNumero(numero)}`);
console.log(`El cuadrado del número ${numero} es ${cuadradoNumeroFlecha(numero)}`);

// calcular la conversion de grados celsius a farenheit
function celciusAFarenheit(celcius) {
    return celcius * 1.8 + 32;
}

const celciusAFarenheitFlecha = (celcius) => celcius * 1.8 + 32;
const celcius = 25;

console.log(`La conversión de celsius a farenheit de ${celcius} es ${celciusAFarenheit(celcius)}`);
console.log(`La conversión de celsius a farenheit de ${celcius} es ${celciusAFarenheitFlecha(celcius)}`);

// calcular el valor del voltaje dadas la resistencia y la corriente
function calcularVoltaje(resistencia, corriente) {
    return resistencia * corriente;
}

const calcularVoltajeFlecha = (resistencia, corriente) => resistencia * corriente;
const resistencia = 333;
const corriente = 0.5;

console.log(`La corriente calculada con la resistencia ${resistencia} ohms y la corriente ${corriente} ampers es ${calcularVoltaje(resistencia, corriente)}`);
console.log(`La corriente calculada con la resistencia ${resistencia} ohms y la corriente ${corriente} ampers es ${calcularVoltajeFlecha(resistencia, corriente)}`);