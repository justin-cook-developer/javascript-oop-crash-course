class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const justin = new Person("Justin", 22, "j@email.com");

console.log(justin);

class Person2 {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

    this.getOlder = () => {
      this.age++;
    };
  }
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

class Person3 {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getOlder() {
    this.age++;
  }
}

const blake = new Person3("Blake", 21, "blake@email.com");

// note that blake does not have a getOlder() function
console.log("\nblake:", blake);

console.log("\nblake's prototype:", Object.getPrototypeOf(blake));

const e = new Person3("e", 21, "e@email.com");

// all instances of Person3 have the same getOlder function... DRY and memory savings
console.log("\nblake.getOlder === e.getOlder", blake.getOlder === e.getOlder);

// make a User inherit from Person

class User extends Person3 {
  constructor(name, age, email) {
    super(name, age, email);
    this.following = [];
  }

  follow(user) {
    this.following.push(user);
  }
}

const ethan2 = new User("Ethan", 21, "e@email.com");

ethan2.getOlder();

ethan2.follow(new User("Justin", 22, "j@email.net"));

console.log(ethan2);
