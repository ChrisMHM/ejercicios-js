// Pedir al usuario por prompt o input un número del 1 al 100 para adivinar un número secreto.
// - Imprimir por consola o DOM un mensaje diciendo "Ups, el número secreto es incorrecto, vuelve a intentarlo." y volver a solicitarle que ingrese un número, en caso de no adivinar el número secreto.
// - Imprimir por consola o DOM un mensaje diciendo "Felicidades, adivinaste el número secreto." en caso de adivinar el número secreto.
// - Imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
// - Identificar si los números ingresados son de tipo`number`, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
// - El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
//     - Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
// - Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo `HTML` y enlazar tu script.
const generarNumeroSecreto = () => {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    return numeroSecreto;
}

const divResultado = document.getElementById('resultado');
const form = document.getElementById('ingresar-numero');
let listaDeNumeros = [];
const numeroSecreto = generarNumeroSecreto();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('numero');
    const esUnNumero = !isNaN(parseInt(input.value));
    let numero = 0;

    if (esUnNumero) {
        numero = parseInt(input.value);
        if (numero >= 1 && numero <= 100) {
            divResultado.innerHTML = `<p>El número ingresado es ${numero}</p>`;
            main(numero, numeroSecreto);
            input.value = "";
        } else {
            divResultado.innerHTML =
                `<p>Error, ${numero} no está entre 1 y 100</p>`;
            input.value = "";
        }
    } else {
        divResultado.innerHTML = `<p>Error, ${input.value} no es un número</p>`;
        input.value = "";
    }
});

const sonNumerosIguales = (numeroSecreto, numeroDelJugador) => {
    return numeroDelJugador === numeroSecreto;
}

const mensajeAdivinanza = (adivinoNumero) => {
    let mensaje = "";
    if (adivinoNumero) {
        mensaje = `Felicidades, adivinaste el número secreto.`;
    } else {
        mensaje = `Ups, el número secreto es incorrecto, vuelve a intentarlo.`;
    }
    return mensaje;
};

const imprimirMensaje = (mensaje, adivinoNumero, listaDeNumeros) => {
    let contenido = "";
    if (adivinoNumero) {
        contenido = `<p>${mensaje}</p><p>Los números ingresados fueron ${listaDeNumeros.join(', ')}</p>`;
    } else {
        contenido = `<p>${mensaje}</p>`;
    }
    document.getElementById('msg').innerHTML = contenido;
}

const main = (numero, numeroSecreto) => {
    let adivinoNumero = sonNumerosIguales(numeroSecreto, numero);
    const msj = mensajeAdivinanza(adivinoNumero);
    listaDeNumeros.push(numero);
    console.log(numeroSecreto);
    imprimirMensaje(msj, adivinoNumero, listaDeNumeros);
}