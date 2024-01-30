// Identificar si los números ingresados son de tipo number, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
// Debe imprimirse la serie de Fibonacci dependiendo del número, es decir, si el programa recibe un 10, debe mostrar 10 números de la serie de Fibonacci.
// La serie de Fibonacci es una secuencia infinita de números naturales; a partir del 0 y del 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que la sucesión de Fibonacci del numero 10 es: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
// Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.

const solicitarNumero = () => {
    let numero = 0;
    while (true) {
        const input = prompt(`Ingresa el número a calcular su serie de Fibonacci`);
        if (!isNaN(parseInt(input))) {
            numero = parseInt(input);
            break;
        }
        alert(`Error, ${input} no es un número`);
    }
    return numero;
};

const calcularFibonacci = (numero) => {
    let anterior = 0;
    let actual = 1;
    let fibonacci = 0;
    let serieFibonacci = [anterior, actual];

    if (numero === 0) {
        serieFibonacci.pop();
        return serieFibonacci;
    }

    for (let i = 0; i < numero - 2; i++) {
        fibonacci = anterior + actual;
        anterior = actual;
        actual = fibonacci;
        serieFibonacci.push(fibonacci);
    }

    return serieFibonacci;
}

const mensaje = (numero, serieFibonacci) => {
    let serie = serieFibonacci.join(', ');
    console.log(serie);
    return `La serie de Fibonacci de ${numero} es ${serie}`;
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
    const serieFibonacci = calcularFibonacci(numero);
    const msj = mensaje(numero, serieFibonacci);
    imprimirMensaje(msj);
}

main();