// Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm(message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".

const mensaje = (time) => {
    const msgDiv = document.querySelector("#msg");
    const msg = `Time for bed after ${time} seconds.`
    msgDiv.innerHTML = `<p>${msg}</p>`;
    console.log(msg);
}

const main = () => {
    const time = parseInt(prompt('Set your alarm. How much time?'));
    const milisec = time * 1000;
    setTimeout(() => mensaje(time), milisec);
};

main();