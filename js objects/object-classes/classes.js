//classes and constructors
class Person {
  name;

  constructor(name){
    this.name = name;
  }


  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`)
  }
}

const giles = new Person("Giles");

giles.introduceSelf();
//omitting constructors
class Animal {
  sleep(){
    console.log("zzzzzzzz")
  }
}

const spot = new Animal();

spot.sleep();

//inheritance
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }


  introduceSelf(){
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 -1) + 1);
    console.log(grade);
  }
};

const walsh = new Professor("Walsh", "Professor");
walsh.introduceSelf();

walsh.grade("my paper");

// encapsulation
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

//Private Methods;
 class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod(){
    console.log("You called me?");
  }
 }

 const myExample = new Example();

 myExample.somePublicMethod();

 