const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
person.height;

const person1 = {
  name: "Chris",
  introduceSelf(){
    console.log(`Hi! I'm ${this.name}.`)
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`)
  }
}

function createPerson(name) {
  const obj = {};
  obj,name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const salva = createPerson("Salva");
salva.introduceSelf();
 const frankie = createPerson("Frankie");
 frankie.introduceSelf();

 const myNotification = new Notification("Hello");
 