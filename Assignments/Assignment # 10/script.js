

//------------------- Task 1: Object Creation-------------------------
//----------------- Create an empty object and assign it to a variable--------------------

//  Create an empty object
//let emptyObject = {};

//console.log(emptyObject);

// --------------- Create an object with properties for name, age, and profession-------------

// let person = {
//  name: "Usama",
//  age: 22,
//  profession: "Student",
// };
// console.log(person);

//----------------------Task 2: Object Properties------------------------

// -----------Access and print the values of properties from an object----------

// const person = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//  height: "5.9 feet"
// };
//   //Accessing and printing properties
// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);
// console.log(person.height);

//------------ Modify the value of a property in an object----------

// person.name = "saim";
// person.age = 23;
// person.occupation = "bussiness_man";
// person.height = "six_feet";
// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);
// console.log(person.height);

//-----------Adding a new property--------------
// person.email = "saim123@gmail.com";
// console.log(person.email);
// console.log(person);

//Task 3: Object Methods

//Create an object method that prints a message to the console.
//Create a method that calculates and returns a value based on object properties.

// const person = {
//  name: "Usama",
//  age: 22,
//  occupation: "Student",
//  greet: function () {
//    console.log(`Hello, my name is ${this.name}.`);
//  },
//  calculateYearOfBirth: function (currentYear) {
//    return currentYear - this.age;
//  },
// };

// // -------Calling the greet method
// person.greet();

// //---------- Calling the calculateYearOfBirth method
// const currentYear = 2024;
// const yearOfBirth = person.calculateYearOfBirth(currentYear);
// console.log(`The Year of my Birth is: ${yearOfBirth}`);




//Task 4: Object Iteration

//Iterate over the properties of an object and print their values.
//Iterate over the properties of an object and perform a specific action for each property.

//const person = {
//    name: "Usama",
//    age: 25,
//    occupation: "Software Developer",
//    email: "john.doe@example.com"
//};

// Function to capitalize string values
//function capitalize(str) {
//    return str.charAt(0).toUpperCase() + str.slice(1);
//}

// Iterating over the properties and printing their values
//console.log("Original object:");
//for (const key in person) {
//    if (person.hasOwnProperty(key)) {
//        console.log(`${key}: ${person[key]}`);
//    }
//}

// Iterating over the properties and performing a specific action
//for (const key in person) {
//    if (person.hasOwnProperty(key)) {
//        const value = person[key];
//        if (typeof value === 'string') {
//            person[key] = capitalize(value);
//        }
//    }
//}

// Printing the updated object
//console.log("\nUpdated object with capitalized string values:");
//for (const key in person) {
//    if (person.hasOwnProperty(key)) {
//        console.log(`${key}: ${person[key]}`);
//    }
//}

//Task 5: Object Comparison

//Compare two objects to check if they have the same properties and values.
//Compare two objects to check if they refer to the same object in memory.

//function deepEqual(obj1, obj2) {
//  if (obj1 === obj2) {
//    return true;
//  }

//  if (
//    typeof obj1 !== "object" ||
//    typeof obj2 !== "object" ||
//    obj1 === null ||
//    obj2 === null
//  ) {
//    return false;
//  }

//  const keys1 = Object.keys(obj1);
//  const keys2 = Object.keys(obj2);

//  if (keys1.length !== keys2.length) {
//    return false;
//  }

//  for (const key of keys1) {
//    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//      return false;
//    }
//  }

//  return true;
//}

//const obj1 = {
//  name: "Usama,
//  age: 25,
//  occupation: "Student",
//};

//const obj2 = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//};

//const obj3 = {
//  name: "Ali",
//  age: 35,
//  occupation: "Teacher",
//};

//const objA = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//};

//const objB = objA;
//const objC = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//};

//console.log("Deep equality check:");
//console.log(deepEqual(obj1, obj2));
//console.log(deepEqual(obj1, obj3));

//console.log("\nReference equality check:");
//console.log(objA === objB);
//console.log(objA === objC);

//Task 6: Object Nesting

//Create an object that contains another object as one of its properties.
//Access and modify properties of a nested object.

//const person = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//  address: {
//    street: "1 street",
//    city: "Fasalabad",
//    province: "Punjab",
//    zip: "12345",
//  },
//};

// Accessing properties of the nested object
//console.log("Original address:");
//console.log(person.address.street);
//console.log(person.address.city);
//console.log(person.address.province);
//console.log(person.address.zip);

// Modifying the nested object's properties
//person.address.street = "456 Elm St";
//person.address.city = "Othertown";
//person.address.province = "Otherprovince";
//person.address.zip = "67890";

// Accessing the modified properties to verify the changes
//console.log("\nModified address:");
//console.log(person.address.street);
//console.log(person.address.city);
//console.log(person.address.province);
//console.log(person.address.zip);

//Task 7: Object Prototypes

//Create a prototype object and use it to create multiple instances of objects.
//Add a method to the prototype object and observe its effect on the instances.

// Constructor function for creating person objects
// function Person(name, age, occupation) {
//  this.name = name;
//  this.age = age;
//  this.occupation = occupation;
// }

// Adding a method to the Person prototype
//Person.prototype.greet = function () {
//  console.log(`Hello, my name is ${this.name}.`);
//};

// Creating multiple instances of the Person object
//const person1 = new Person("Usama", 30, "Student");
//const person2 = new Person("Ali", 25, "Teacher");

// Calling the greet method on the instances
//person1.greet();
//person2.greet();

//Task 8: Object Serialization

//Convert an object to a JSON string using JSON.stringify().
//Parse a JSON string and convert it back to an object using JSON.parse().

//const person = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//  address: {
//    street: "123 Main Street",
//    city: "Faislabad",
//    province: "Punjab",
//    zip: "12345",
//  },
//};

// Convert the object to a JSON string
//const jsonString = JSON.stringify(person);

//console.log("JSON String:");
//console.log(jsonString);

// Parse the JSON string back into an object
//const parsedObject = JSON.parse(jsonString);

//console.log("\nParsed Object:");
//console.log(parsedObject);

//Task 9: Object Destructuring

//Use object destructuring to extract specific properties from an object.

//const person = {
//  name: "Usama",
//  age: 30,
//  occupation: "Student",
//  address: {
//    street: "123 Main Street",
//    city: "Faisalabad",
//    province: "Punjab",
//    zip: "12345",
//  },
//};

// Basic destructuring
//const { name, age, occupation } = person;
//console.log(name);
//console.log(age);
//console.log(occupation);

// Destructuring nested objects
//const {
//  address: { street, city, province, zip },
//} = person;
//console.log(street);
//console.log(city);
//console.log(province);
//console.log(zip);

// Renaming variables while destructuring
//const { name: personName, age: personAge, occupation: jobTitle } = person;
//console.log(personName);
//console.log(personAge);
//console.log(jobTitle);

// Providing default values
//const { salary = 50000 } = person;
//console.log(salary); //

//Task 10: Object Property Enumeration

//Use Object.keys() to get an array of all the property names of an object.

//const person = {
//  name: "Usama",
//  age: 25,
//  occupation: "Student",
//  address: {
//    street: "123 Main Street",
//    city: "Faislabad",
//    Province: "Punjab",
//    zip: "12345",
//  },
///};

// Using Object.keys() to get an array of all property names
//const keys = Object.keys(person);

//console.log("Main object property names:");
//console.log(keys);

// Iterating over the main object property names
//keys.forEach((key) => {
//  console.log(`${key}: ${person[key]}`);
//});

// Using Object.keys() to get an array of nested object property names
//const addressKeys = Object.keys(person.address);

//console.log("\nNested object (address) property names:");
//console.log(addressKeys);

// Iterating over the nested object property names
//addressKeys.forEach((key) => {
//  console.log(`${key}: ${person.address[key]}`);
//});

//Task 11: Object Inheritance

//Create a parent object and a child object that inherits properties and methods from the parent.

//const parent = {
//  name: "Parent",
//  age: 50,
//  greet: function () {
//    console.log(`Hello, my name is ${this.name}.`);
//  },
//};

// Creating a child object that inherits from parent
//const child = Object.create(parent);
//child.name = "Child";
//child.age = 25;

// Using inherited properties and methods
//child.greet();
//console.log(child.age);

// Parent properties and methods are still accessible
//parent.greet();
//console.log(parent.age);

// Adding a new method to the parent object
//parent.sayGoodbye = function () {
//  console.log(`${this.name} says goodbye!`);
//};

// The child object can use the new method as well
//child.sayGoodbye();
//parent.sayGoodbye();

//Task 12: Object Privacy

//Create private properties in an object using closures or symbols.

//function PersonWithClosure(name, age) {
//  let _name = name;
//  let _age = age;

//  this.getName = function () {
//    return _name;
//  };

//  this.getAge = function () {
//    return _age;
//  };

//  this.setName = function (newName) {
//    _name = newName;
//  };

//  this.setAge = function (newAge) {
//    _age = newAge;
//  };

//  this.greet = function () {
//    console.log(`Hello, my name is ${_name} and I am ${_age} years old.`);
//  };
//}

// Creating an instance with closures

//const personWithClosure = new PersonWithClosure("Ali", 35);
//console.log(personWithClosure.getName());
//console.log(personWithClosure.getAge());
//personWithClosure.setName("Usama");
//personWithClosure.setAge(25);
//console.log(personWithClosure.getName());
//console.log(personWithClosure.getAge());
//personWithClosure.greet();

// Using symbols
//const _nameSymbol = Symbol("name");
//const _ageSymbol = Symbol("age");

//class PersonWithSymbol {
//  constructor(name, age) {
//    this[_nameSymbol] = name;
//    this[_ageSymbol] = age;
//}

//  getName() {
//    return this[_nameSymbol];
//  }

//  getAge() {
//    return this[_ageSymbol];
//  }

//  setName(newName) {
//    this[_nameSymbol] = newName;
//  }

//  setAge(newAge) {
//    this[_ageSymbol] = newAge;
//  }

//  greet() {
//    console.log(
//      `Hello, my name is ${this[_nameSymbol]} and I am ${this[_ageSymbol]} years old.`
//    );
//  }
//}

// Creating an instance with symbols
//const personWithSymbol = new PersonWithSymbol("Ali", 35);
//console.log(personWithSymbol.getName());
//console.log(personWithSymbol.getAge());
//personWithSymbol.setName("Usama");
//personWithSymbol.setAge(25);
//console.log(personWithSymbol.getName());
//console.log(personWithSymbol.getAge());
//personWithSymbol.greet();