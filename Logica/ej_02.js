// Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

const highestValue = () => {
    let max = Number.MIN_VALUE;

    for (let index = 0; index < 10; index++) {
        let number = parseInt(prompt('Value: '));
        if (number > max) {
            max = number;
        }
    }

    console.log(`Highest value: ${max}`);
};

highestValue();