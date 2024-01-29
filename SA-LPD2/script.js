// Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
// Debe imprimir ambos resultados por consola o por el DOM.
// Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.

const solicitarTemperaturaCelsius = () => {
    let temperatura = 0;
    while (true) {
        const input = prompt(`Temperatura en Celsius`);
        if (!isNaN(parseInt(input))) {
            temperatura = parseInt(input);
            break;
        }
        alert(`Error, ${input} no es un número`);
    }
    return temperatura;
};

const celsiusAFahrenheit = (celsius) => {
    return (celsius * (9.0 / 5.0)) + 32;
}

const celsiusAKelvin = (celsius) => {
    return celsius + 273.15;
}

const mensaje = (celsius, fahrenheit, kelvin) => {
    const mensajeFah = `${celsius} C son ${fahrenheit} F`;
    const mensajeKel = `${celsius} C son ${kelvin} K`;
    let mensaje = mensajeFah + '\n' + mensajeKel;

    return mensaje;
};

const imprimirMensaje = (mensajes) => {
    console.log(mensajes);
    let contenido = '';
    mensajes.split('\n').forEach(mensaje => {
        contenido += `<p>${mensaje}</p>`;
    });
    document.getElementById('msg').innerHTML = contenido;
}

const main = () => {
    const celsius = solicitarTemperaturaCelsius();
    const fahrenheit = celsiusAFahrenheit(celsius);
    const kelvin = celsiusAKelvin(celsius);
    const msj = mensaje(celsius, fahrenheit, kelvin);
    imprimirMensaje(msj);
}

main();