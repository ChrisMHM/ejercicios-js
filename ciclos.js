// let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(matriz[i][j]);
//     }
// }

// console.log('count++');
// let count = 1;

// while (count <= 5) {
//     console.log(count++);
// }

// console.log('count += 1');
// count = 1;

// while (count <= 5) {
//     console.log(count += 1);
// }

function factorial(numero) {
    if (numero == 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

console.log(factorial(8));