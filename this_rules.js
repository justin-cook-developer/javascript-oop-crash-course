// better definition of `this`: `this` is a binding given to a function at runtime, based on how the function is invoked (call-site).
// under the hood, each function invocation adds an activation record to the call stack, and each activation record for a function
// holds a `this` value.

// ---------------------------------------------------------------------------------

// Rule 1: Default binding: `this` refers to the global object
// the catch all when no other `this` rules apply

// an example of when this applies, is the invocation of a plain function

function foo() {
  console.log("In foo:", this.a);
}

// "use strict" in a function makes `this` = undefined for default binding
function foo2() {
  "use strict";
  console.log("In foo2:", this.a);
}

a = "On the global object";

// `this` defaults to the global object for the below invocation
foo(); // logs "In foo: On the global object"

// TypeError is thrown; `this` is undefined in foo2 for this invocation
// foo2();

// ---------------------------------------------------------------------------------

// Rule 2: Implicit binding: when the call-site has a context object
// aka when the function is a property of an object

const obj1 = {
  a: "In obj1",
  // same function as above, but in an object
  foo,
};

// this is the call site; foo is called as a property of obj1
// note the '.' to the left of the function invocation
obj1.foo(); // logs "In foo: In obj1"

const obj2 = {
  obj1,
};

// the implicit binding always refers to the object directly to the left of the '.' preceding the function invocation
obj2.obj1.foo(); // still logs "In foo: In obj1"

// losing the implicit binding
// random is just a reference to foo
const random = obj1.foo;
// `this` defaults back the global object b/c of rule 1, we do not have a context object
random();

// ---------------------------------------------------------------------------------

// Rule 3: Explicit binding: using `.call`, `.apply`, `.bind`; which exist on all functions
// these functions allow you to pass a `this` context as their first parameter

function weirdAdd(rhs) {
  return this.lhs + rhs;
}

const obj3 = {
  lhs: 2,
};

const obj4 = {
  lhs: 3,
};

// `.call` and `.apply` execute the function immediately

// `.call`'s first parameter is the `this` context; all other parameters are forwarded to weirdAdd
console.log("using .call:", weirdAdd.call(obj3, 2)); // logs 4

// `.apply`'s first parameter is the `this` context; the second parameter is an array of arguments to be forwarded to weirdAdd
console.log("using .apply:", weirdAdd.apply(obj4, [3])); // logs 6

// `.bind` does not invoke the function immediately, but returns a new function with a set `this` context
const boundWeirdAdd = weirdAdd.bind(obj4); // boundWeirdAdd's `this` will be obj4
console.log("using .bind w/o currying:", boundWeirdAdd(4)); // logs 7

// you can also curry a function with `.bind`
const weirdAddToInvokeLater = weirdAdd.bind(obj4, 2);
console.log("using .bind w currying:", weirdAddToInvokeLater()); // logs 5

// ---------------------------------------------------------------------------------

// Rule 4: the `new` keyword and "Constructor Functions"

// applying the `new` keyword to a function invocation, does the following
// 1. creates a new, empty object
// 2. the newly constructed object is [[Prototype]] linked
// 2. sets the function's `this` context to be that object
// 3. unless the function returns it's own alternate object, the new invoked function call will automatically return the newly constructed object

function yeet(a) {
  this.a = a;
}

const objWithA = new yeet(3);

console.log("objWithA:", objWithA);

// ---------------------------------------------------------------------------------

// NOTE: the `this` rules apply in this order; with 1 having the least precedence and 4 having the most
