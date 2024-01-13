// Palindrome
// Write a program that prompts for a word or sentence(it can be capitalized, have spaces and punctuation). Figure out if the sentence / word is a palindrome or not.Ignoring punctuation, spaces and capitalized letters.

const palindrome = word => {
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
        if (word[i] !== word[j])
            return false;
    }

    return true;
};

const getLetters = string => {
    const onlyLetters = string.replace(/[^a-zA-Z]/g, "");
    return onlyLetters.toLowerCase();
};

const insertHTML = (message, result) => {
    const msgDiv = document.querySelector("#msg");
    let finalMsg = "";
    result ? finalMsg += `<p>"${message}" is palindrome</p>` : finalMsg = `<p>${message} is not palindrome</p>`;
    console.log(finalMsg);
    msgDiv.innerHTML = finalMsg;
};

const main = () => {
    let inputMsg = prompt('Write a sentence to figure out whether it is a palindrome or not:');
    const onlyLetters = getLetters(inputMsg);
    let isPalindrome = palindrome(onlyLetters);
    insertHTML(inputMsg, isPalindrome);
};

main();