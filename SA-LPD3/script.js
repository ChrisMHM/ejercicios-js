// Crear un programa en JavaScript que realice lo siguiente:
// Input
// Solicitar por prompt o input un número.
//     Output
// Imprimir por consola o DOM el factorial del número recibido.
// Identificar si los números ingresados son de tipo number, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
// El factorial de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número, ejemplo 4! = 1x2x3x4 = 24.
// Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
// Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.

const solicitarNumero = () => {
    let numero = 0;
    while (true) {
        const input = prompt(`Ingresa el número a calcular su factorial`);
        if (!isNaN(parseInt(input))) {
            numero = parseInt(input);
            break;
        }
        alert(`Error, ${input} no es un número`);
    }
    return numero;
};

const calcularFactorial = (numero) => {
    let factorial = 1;

    if (numero === 0) {
        return 1;
    }

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return factorial;
}

const mensaje = (numero, factorial) => {
    return `El factorial de ${numero} es ${factorial}`;
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
    const numero = solicitarNumero();
    const factorial = calcularFactorial(numero);
    const msj = mensaje(numero, factorial);
    imprimirMensaje(msj);
}

main();