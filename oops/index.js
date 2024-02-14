// const person = {
//   name: "John Doe",
//   age: 29,
//   city: "New York",
//   getFirstName() {
//     return this.name.split(" ")[0];
//   },
// };

// console.log(person.getFirstName());

// class Person {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
//   getFirstName = () => this.name.split(" ")[0];
// }

// const user1 = new Person("aa", 25, "Goalpara");

// console.log(user1.getFirstName());

// class Student extends Person {
//   constructor(name, age, city, collage) {
//     super(name, age, city);
//     this.collage = collage;
//   }
//   getCollageName = () => this.collage;
// }

// const student = new Student("simanta ray", 25, "Goalpara", "Cit kok");

// console.log(student.getFirstName());
// console.log(student.getCollageName());

// class Person {
//   #dob;
//   constructor(name, mail, dob) {
//     this.name = name;
//     this.mail = mail;
//     this.#dob = dob;
//   }
//   getAge = () => {
//     const today = new Date();
//     const birthDate = new Date(this.#dob);
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (
//       monthDiff < 0 ||
//       (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       return age - 1;
//     }
//     return age;
//   };
// }

// const person1 = new Person("john", "s@gmail.com", "1900-10-15");

// const person2 = new Person("john", "s@gmail.com", "2000-10-15");

// console.log(person1.getAge()); //123
// console.log(person2.getAge()); //23

// class Person {
//   #dob;
//   constructor(name, mail, dob) {
//     this.name = name;
//     this.mail = mail;
//     this.#dob = dob;
//   }
//   getAge = () => {
//     const today = new Date();
//     const birthDate = new Date(this.#dob);
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (
//       monthDiff < 0 ||
//       (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       return age - 1;
//     }
//     return age;
//   };
// }

// class Student {
//   constructor() {
//     this.person = new Person("string", "string", "2000-10-15");
//   }

//   getAge = () => this.person.getAge();
// }

// const student1 = new Student();

// console.log(student1.getAge()); //23

class Engine {
  start() {
    console.log("Engine started");
  }

  stop() {
    console.log("Engine stopped");
  }
}

class Wheels {
  constructor(count) {
    this.count = count;
  }

  rotate() {
    console.log("Wheels rotating");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.wheels = new Wheels(4);
  }

  start() {
    this.engine.start();
  }

  rotate() {
    this.wheels.rotate();
  }
}

const car1 = new Car();

car1.start(); // Output: "Engine started"
car1.rotate(); // Output: "Wheels rotating"
