// Flat array
// Write a program that takes the following nested matrix and flattens it(makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

// let multiDimension = [1, [2, 3, [4, 5, [6]]]] = [1, 2, 3, 4, 5, 6]
let multiDimension = [1, [2, 3, [4, 5, [6]]]];
console.log(multiDimension[0]);
// console.log(multiDimension[1]);
console.log(multiDimension[1][0]);
console.log(multiDimension[1][1]);
// console.log(multiDimension[1][2]);
console.log(multiDimension[1][2][0]);
console.log(multiDimension[1][2][1]);
console.log(multiDimension[1][2][2][0]);

[1,
    [2, 3,
        [4, 5,
            [6]
        ]
    ]
]

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 2; j++) {
        for (let k = multiDimension[i][j].length - 1; k > 0; k--) {
            for (let l = multiDimension[i][j][k].length - 1; l > 1; l--) {
                // [1][2][2][0]
                const content = multiDimension[i][j][k][l]; //6
                console.log(content);
            }
            // [1][2][0]
            // [1][2][1]
            const content = multiDimension[i][j][k];
            console.log(content);
        }
        const content = multiDimension[i][j];
        console.log(content);
    }
    const content = multiDimension[i];
    console.log(content);
}