class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor(age) {
    super();
    this.age = age;
    // this.greet = function () {
    //   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    // };
  }

  // greet = () => {
  //   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  // };

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// function Person(age) {
//   this.age = age;
//   this.name = 'Max';
// }

// Person.prototype.greet = function () {
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
// };

// Person.describe = function () {
//   console.log('Creating persons...');
// };

// // Person.prototype = {
// //   printAge() {
// //     console.log(this);
// //   },
// // };
// Person.prototype.printAge = function () {
//   console.log(this);
// };

// const person = new Person(32);
// const person2 = new person.__proto__.constructor(2);

// console.log(Object.prototype);

// const person1 = new Person(32);
// const person2 = new Person(33);

// const button = document.getElementById('btn');
// button.addEventListener('click', person1.greet.bind(person1));

const course = { title: 'JavaScript - The complete Guide', rating: 5 }; // new Object()

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true,
    },
  }
);
// student.name = 'Max';
Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});
console.log(student);
course.printRating();
student.printProgress();
