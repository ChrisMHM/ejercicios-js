// Sum of Resistors in Series

// Calculate the sum of all resistors connected in series.
//     Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1 | + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

const sumResistances = resistanceValues => {
    let sum = 0;  // Acumulador

    resistanceValues.forEach(resistance => {
        if (resistance < 0) {
            resistance *= -1;  // resistance = resistance * -1;
        }
        sum += resistance;
    });

    return sum;
};

console.log(sumResistances([-1, 5, 6, 3]) + " ohms");
console.log(sumResistances([14, 3.5, 6]) + " ohms");
console.log(sumResistances([8, 15, 100]) + " ohms");

// Number divided into halves

// Given a number, return the number divided into its halves in an array.
//     Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.

const numDiv = number => {
    const halvesArray = [];
    const half = number / 2;

    while (number != 0) {
        halvesArray.push(half);
        number -= half;
    }

    return halvesArray;
};

console.log(numDiv(4));
console.log(numDiv(10));
console.log(numDiv(55));
console.log(numDiv(-1));
console.log(numDiv(3.5));

// Secret Society

// Find the name of a secret society based on the first letter of each member's name.
// Las letras tienen que estar en orden alfabético.

// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// PRCJMR
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

// "Esperanza" = ['E', 's', 'p', 'e', ...]

const secretName = members => {
    let societyCapitals = [];
    let society = "";

    members.forEach(member => {
        societyCapitals.push(member[0]);
    });

    societyCapitals.sort();

    societyCapitals.forEach(letter => {
        society += letter;
    });

    return society;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));

// Online status

// Display online status for a list of users.

//     Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

const onlineStatus = users => {
    let finalStatus = '';
    let firstUser = '';
    let secondUser = ''
    const totalUsers = users.length;

    switch (totalUsers) {
        case 0:
            finalStatus = '0 online';
            break;
        case 1:
            firstUser = users[0];
            finalStatus = `${firstUser} online`;
            break;
        case 2:
            firstUser = users[0];
            secondUser = users[1];
            finalStatus = `${firstUser} and ${secondUser} online`;
            break;
        default:
            firstUser = users[0];
            secondUser = users[1];
            finalStatus = `${firstUser}, ${secondUser} and ${totalUsers - 2} more online`
            break;
    }

    return finalStatus;
};

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus([]));
console.log(onlineStatus(['mockIng99']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', 'ozonemotion']));

// Array of Multiples

// Create a function that takes two parameters(number, length) and returns an array of length containing multiples of the number.

//     Examples:
// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.


const arrayMultiplos = (number, length) => {
    const array = [];
    const value = number;

    for (let index = 0; index < length; index++) {
        array.push(number);
        number += value;
    }

    return array;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

// Positive dominance in Array

// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.

//     Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

const positiveDom = values => {
    let positive = 0;
    let negative = 0;
    let balance = 0;

    values.forEach(value => {
        if (value >= 0) {
            positive++;
        } else {
            negative--;
        }
    });

    console.log(positive);
    console.log(negative);
    balance = positive + negative;

    if (balance > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));

// Antipodal Average

// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts *.If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.

// Example:
// - For the array`[1,2,3,5,22,6]`, the result should be`[3.5, 12, 4]`.

