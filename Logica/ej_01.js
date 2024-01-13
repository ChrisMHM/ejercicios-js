// User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

const username = prompt('Username: ');
const age = prompt('Age: ');
const favoriteMovies = prompt('Movies: ');
const arrayMovies = favoriteMovies.split(", ");
const output = `Hello, ${username}.\nYou are ${age} years old.\nThe film ${arrayMovies[0]} is one of my favorites.`;
console.log(output);