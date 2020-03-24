// arrow functions do not abide by the 4 `this` rules

// arrow functions use only a `lexical this`
// aka arrow functions take the `this` binding of the scope in which they were defined

function foo() {
  // console.log(this);
  return () => {
    console.log("In arrow function:", this.a);
  };
}

const arrow = foo();

arrow();

const obj1 = {
  a: 3,
};

const obj2 = {
  a: 4,
};

const returnedArrow = foo.call(obj2);

// returnedArrow();

returnedArrow.call(obj1); // logs 3

const random = {
  a: "random",
  returnedArrow,
};

random.returnedArrow();

// this is why I returned arrow functions to unsubscribe the listeners in EventEmitter
