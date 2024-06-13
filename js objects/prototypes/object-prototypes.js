const myObject = {
  city: "Stellenbosch",
  greet(){
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();
myObject.toString();

const myDate = new Date(1995, 11, 17);

console.log(myDate.getFullYear());

myDate.getFullYear = function () {
  console.log("Something else!");
};

myDate.getFullYear();

const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet();

const personPrototype2 = {
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}


Object.assign(Person.prototype, personPrototype2);
const reuben = new Person("Reuben");
reuben.greet();

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name"));
console.log(Object.hasOwn(irma, "greet"));