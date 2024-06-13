const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString)

const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting)

const one = 'Hello, ';
const two = 'how are you?';

const joined = `${one}${two}`;
console.log(joined)

const button = document.querySelector('button');

function greet(){
  const name = prompt('what is your name?');
  const greeting = document.querySelector('#greeting');
  greeting.textContent = `hello ${name}, nice to see you!`;
}

button.addEventListener('click', greet);