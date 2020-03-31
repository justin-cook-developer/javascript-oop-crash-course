// Inheritance with Constructor Functions

// Inheritance: a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
// This allows code resuse and some interesting benefits in typed languages.

// If we have a Person
// a User is a more specialized person, so a User extends Person
// an Employee is a more specialized person, so an Employee extends Person

// an Admin is a User, so an Admin will extend a User

//                   Person
//   User                            Employee
//   Admin

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getOlder = function() {
  this.age++;
};

let justin = new Person("justin", 22);

console.log("justin:", justin);
console.log("justin's prototype:", Object.getPrototypeOf(justin));

// Create an Employee than inherits from Person
function Employee(name, age, salary) {
  // remember how .call works
  // this is the equivalent of `extends` with Constructor Functions for properties
  Person.call(this, name, age);
  console.log("after Person.call:", this);
  this.salary = salary;
}

// creating a "prototype chain"
// the prototype object of Employee's own prototype will be Person.prototype
// so all Employee instances can use People functions

// Function.prototype: .call, .apply, .bind
Employee.prototype = Object.create(Person.prototype);

// Object.prototype
// Function.prototype
// Person.prototype
// Employee.prototype

console.log("\nEmployee's prototype 1:", Employee.prototype);
Employee.prototype.constructor = Employee;
console.log("Employee's prototype 2:", Employee.prototype);

console.log(
  "\nEmployee prototype's prototype:",
  Object.getPrototypeOf(Employee.prototype)
);

// add a function to Employee's prototype
Employee.prototype.increaseSalary = function(amount) {
  this.salary += amount;
};

justin = new Employee("Justin", 22, 1);

console.log("\njustin.age before getOlder():", justin.age);

justin.getOlder();

console.log("justin.age after getOlder():", justin.age);

justin.increaseSalary(100000);

console.log("\njustin.salary:", justin.salary);


// off the cuff stuff
function Laborer(name) {
  this.name = name;
}

Laborer.minimumWage = 12;

console.log(Laborer.minimumWage);

