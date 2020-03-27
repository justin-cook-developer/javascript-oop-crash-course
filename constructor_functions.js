// Constructor Functions: one JS OOP way to create objects

function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

const justin = new Person("Justin", 22, "justin@email.net");

console.log("This is Justin:", justin);

// ---------------------------------------------------------------------------------

// Adding a method to each person

function Person2(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.getOlder = () => {
    this.age++;
  };
}

const mitch = new Person2("Mitch", 20, "mitch@email.gov");

console.log("\nmitch:", mitch);

console.log("\nmitch.age before getOlder():", mitch.age);

mitch.getOlder();

console.log("mitch.age after getOlder():", mitch.age);

const ethan = new Person2("Ethan", 21, "ethan@email.com");

console.log("\nethan:", ethan);

// are the getOlder functions the same?
console.log(
  "\nmitch.getOlder === ethan.getOlder:",
  mitch.getOlder === ethan.getOlder
);

// each instance of Person2 has it's own getOlder function, that's a lot of memory...
// getOlder() is not specific to any one Person2; it is reusable due to the dynamic nature of this
// where else could we put this method???

// ---------------------------------------------------------------------------------

// Prototypes: Using Prototypes to DRY up objects created by Constructor Functions

// a Constructor Function's prototype is where the methods for instances of that Constructor Function reside

// look @ Array's prototype in the browser w/ Object.getPrototypeOf()
// every instance of Array ( [] or new Array(10) ) has the methods on Array's prototype

// let's make a new Person Constructor Function with getOlder() on the prototype
function Person3(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

// notice that getOlder is no longer an arrow function b/c the this binding would be incorrect
Person3.prototype.getOlder = function() {
  this.age++;
};

const blake = new Person3("Blake", 21, "blake@email.com");

// note that blake does not have a getOlder() function
console.log("\nblake:", blake);

console.log("\nblake's prototype:", Object.getPrototypeOf(blake));

const e = new Person3("e", 21, "e@email.com");

// all instances of Person3 have the same getOlder function... DRY and memory savings
console.log("\nblake.getOlder === e.getOlder", blake.getOlder === e.getOlder);
