// Property Descriptors
// these allow you to have fine grain control over the behavior of object properties

const myObj = {
  a: 3,
};

console.log(
  "Property descriptor for property 'a':",
  Object.getOwnPropertyDescriptor(myObj, "a")
);

// writable: allow/disallow the changing of the value of a property
Object.defineProperty(myObj, "b", {
  value: 4,
  writable: false,
  enumerable: true,
  configurable: true,
});

myObj.b = "no can do buckeroo";

console.log("myObj.b:", myObj.b); // 4

// enumerable: control whether a property is visible during iteration
Object.defineProperty(myObj, "c", {
  value: 5,
  writable: true,
  enumerable: false,
  configurable: true,
});

for (const key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log("A key of myObj:", key);
  }
}

console.log("keys of myObj:", Object.keys(myObj));

console.log("myObj.c:", myObj.c);

// configurable: allow/disallow a property's configuration to be modified
Object.defineProperty(myObj, "d", {
  value: 6,
  writable: true,
  enumerable: true,
  configurable: false,
});

// can't delete "d" from myObj
delete myObj.d;

console.log("myObj.d:", myObj.d);

// TypeError: cannot redefine property d
// Object.defineProperty(myObj, "d", {
//   value: "no sir",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

console.log("myObj.d:", myObj);

// ---------------------------------------------------------------------------------

// Getters and Setters

// bad use of getters and setters
const newObj = {};

Object.defineProperty(newObj, "a", {
  get() {
    return 2;
  },
  set(val) {
    // do nothing; you cannot set this property
  },
});

console.log("newObj.a:", newObj.a);

newObj.a = 3;

console.log("newObj.a:", newObj.a);

// better use of getters and setters
const person = {};

Object.defineProperty(person, "age", {
  get() {
    return this._age_;
  },
  set(val) {
    if (typeof val !== "number") {
      throw new Error("age can only be a number");
    }

    if (val < 0) {
      throw new Error("age must be non-negative");
    }

    this._age_ = val;
  },
});

person.age = 3;

console.log("person.age with getter:", person.age);
