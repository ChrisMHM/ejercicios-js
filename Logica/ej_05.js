// Factorial
// Write a program that prompts for an intenger number n.Where  1 <= n.Solve this using recursion.

const factorial = (numero) => {
    if (numero == 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
};

const insertHTML = (inputNumber, factorialRes) => {
    const msgDiv = document.querySelector("#msg");
    let finalMsg = `Factorial of ${inputNumber} using recursion is ${factorialRes}`;
    console.log(finalMsg);
    msgDiv.innerHTML = finalMsg;
};

const main = () => {
    let inputNumber = parseInt(prompt('Input a number to figure out its factorial:'));
    const factorialRes = factorial(inputNumber);
    insertHTML(inputNumber, factorialRes);
};

main();