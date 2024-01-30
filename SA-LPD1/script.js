// Crear un programa en Javascript que realice lo siguiente:
//  -Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
//  -Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//  -Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
//  -Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
// Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// Entradas:
// 4, 4, 2.
// Salida:
// 4, 4, 2.
// 2, 4, 4
// Pruébalo con las combinaciones de números que se te ocurran

const solicitarNumeros = () => {
    const numeros = [];

    for (let i = 0; i < 3; i++) {
        let numero = parseInt(prompt(`Variable ${i + 1}: `));
        numeros.push(numero);
    }

    return numeros;
};

const numeroMayor = (numeros) => {
    let mayor = Number.MIN_VALUE;
    numeros.forEach(numero => mayor = numero > mayor ? numero : mayor);
    return mayor;
};

const numeroMenor = (numeros) => {
    let menor = Number.MAX_VALUE;
    numeros.forEach(numero => menor = numero < menor ? numero : menor);
    return menor;
};

const numeroCentral = (numeros) => {
    let centro = 0;
    const indiceMayor = numeros.indexOf(numeroMayor(numeros));
    const indiceMenor = numeros.indexOf(numeroMenor(numeros));
    let i = 0;

    numeros.forEach(numero => {
        if (i !== indiceMayor && i !== indiceMenor) {
            centro = numero;
        }
        i++;
    });

    return centro;
};

const sonIguales = numeros => {
    return numeros[0] === numeros[1] && numeros[1] === numeros[2];
};

const mensaje = (mayor, menor, centro) => {
    let mensaje = '';

    mensaje += `${mayor}, ${centro}, ${menor}\n`;
    mensaje += `${menor}, ${centro}, ${mayor}`;

    return mensaje;
};

const mostrarMensaje = (mensajes) => {
    console.log(mensajes);
    let contenido = '';
    mensajes.split('\n').forEach(mensaje => {
        contenido += `<p>${mensaje}</p>`;
    });
    document.getElementById('msg').innerHTML = contenido;
};

const main = () => {
    const listaNumeros = solicitarNumeros();
    let mensajeRespuesta = "";
    let menor = 0;
    let mayor = 0;
    let central = 0;

    if (sonIguales(listaNumeros)) {
        mensajeRespuesta = 'Los tres números son iguales';
    } else {
        menor = numeroMenor(listaNumeros);
        mayor = numeroMayor(listaNumeros);
        central = numeroCentral(listaNumeros);
        mensajeRespuesta = mensaje(mayor, menor, central);
    }

    mostrarMensaje(mensajeRespuesta);
};

main();

