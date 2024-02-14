## Intro to Object-Oriented Programming

The core concept of OOP is to **_separate_** **concerns** and **responsibilities** into **entities**.

Each **_entities_** are coded as a **objects** and will group a set of information(**properties**) and actions(**methods**) that can be performed by the entities.

OOP is very useful on a large scale projects, as it facilitates code modularity and organization.

### Objects in JS

In js, an **object** is a fundamental data type that represent a collection of key-value pairs.

##### Object Literals

```
const person ={
        name:"John Doe",
        age:29,
        city:"New York"
}
```

##### Object Methods

```
const person = {
        name: "John Doe",
        age: 29,
        city: "New York",
        getFirstName() {
                return this.name.split(" ")[0];
        },
};
```

### Classes in JS

**Classes** provide a _blueprint_ for creating objects with the same properties and methods, streamlining the process of creating multiple instances with similar characteristics.

##### Class Definition

```
class Person {
        constructor(name, age, city){
                this.name=name;
                this.age=age;
                this.city=city
        }
        getFirstName=()=>this.name.split(" ")[0]
}
```

##### Using Class

```
const user1= new Person("Alice Doe",25,"xxxx")

console.log(user1.getFirstName()) // Alice
```

> a class is a definition of a _type_ of a custom data-structure that includes both data and behaviors.

> a class must be instantiated with `new` keyword.

> the `this` keyword points to the class itself and is used to define the class properties within the constructor methods.

#### Principles of OOP

##### Inheritance

Inheritance allows to inherit properties and methods from other objects, enabling code reuse and creating hierarchical relationships between objects.

```
class Person {
        constructor(name, age, city) {
                this.name = name;
                this.age = age;
                this.city = city;
        }
        getFirstName = () => this.name.split(" ")[0];
}

class Student extends Person {
        constructor(name, age, city, collage) {
        super(name, age, city);
        this.collage = collage;
        }
        getCollageName = () => this.collage;
}

const student = new Student("Alice", 25, "xxxx", "yyyy");

console.log(student.getFirstName()); //Alice
console.log(student.getCollageName()); //yyyy
```

> if a child class inherits any properties from its parent, it must first assign the parent properties by calling the `super()`keyword in its constructor.

> child classes can override the parents properties and methods.

##### Encapsulation

Encapsulation in OPP means controlling what information an object shares and what it keeps private. This done by using public and private keywords, but in js we every properties and methods are public.

To make a private method or property we use the `#` keyword.

```
class Person {
        #dob;
        constructor(name, mail, dob) {
                this.name = name;
                this.mail = mail;
                this.#dob = dob;
        }
        getAge = () => {
        const today = new Date();
        const birthDate = new Date(this.#dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 ||(monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1;
        }

        return age;

}

const person1 = new Person("Jhon", "j0@gmail.com, "xx-xx-xx");

console.log(person1.dob);// undefine
```

> even thought we cant use `dob` out side we can call it inside the class itself in `getAge` method.
> encapsulation is useful in case where we need certain properties or method for internal working of the object.

##### Abstraction

Abstraction means that a class should only represent information relevant to the problem's context. It involves hiding the complex implementation details of a class and exposing only the necessary features or functionalities to the outside.

##### Polymorphism

In short polymorphism means **_many forms_**, the ability of one method to return different values according to certain condition.

```
const person1 = new Person("john", "s@gmail.com", "1900-10-15");

const person2 = new Person("john", "s@gmail.com", "2000-10-15");

console.log(person1.getAge()); //123
console.log(person2.getAge()); //23
```

> getAge returns different values depending on the value of object it is called on.

#### Object Composition

Object composition refers to the concept of building complex objects by combining simpler objects together, by using composition we can assign properties and methods to objects in a more flexible way then **inheritance\***
allows.

##### Why composition

With class **inheritance**, child classes inherit all the properties and methods, creating tight coupling and making it difficult to modify the subclasses without affecting others in the hierarchy. To avoid this, **object composition** can be used, allowing us to decide which properties and methods we want in the new class.

```
class Student {
        constructor() {
        this.person = new Person("string", "string", "2000-10-15");
        }

        getAge = () => this.person.getAge();
}

const student1 = new Student();

console.log(student1.getAge()); //23
```

In the `Student` class, the `Person` class's getAge method is used through composition. The Student class does not inherit from the `Person` class, but within the `Student` class, we can call the `getAge` method.

```
class Engine {
        start() {
                console.log("Engine started");
        }

        stop() {
                console.log("Engine stopped");
        }
}

class Wheels {
        constructor(wheelsCount) {
                this.wheelsCount = wheelsCount;
        }

        rotate() {
                console.log("Wheels rotating");
        }
}

class Car {
        constructor(wheelsCount) {
                this.engine = new Engine();
                this.wheels = new Wheels(wheelsCount);
        }

        start() {
                this.engine.start();
        }

        rotate() {
                this.wheels.rotate();
        }
        //Car only have two methods start and rotate
}

const car1 = new Car(8);

car1.start(); // Output: "Engine started"
car1.rotate(); // Output: "Wheels rotating"

```

In summary, OOP is a _programming paradigm_ that emphasizes the use of objects to encapsulate data and behavior, modeling real-world entities. OOP enables developers to organize code effectively, manage complexity, and enhance flexibility and reusability.
