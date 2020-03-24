// intro definiton of `this`: A keyword in Javascript which gives context to a function at runtime

// 1. example of thinking `this` is the function

// we want to count the number of times a function, foo, executes
function foo(number) {
  console.log("In foo:", number);

  this.count++;
}

// okay, b/c functions are objects
foo.count = 0;

for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

console.log("foo.count:", foo.count); // 0 ???
console.log("count var:", count); // NaN ??? Weird. We created a global variable, but why is it NaN? Why was a global created?

// `this` definitely does not refer to the function the keyword is used in.

// ------------------------------------------------------------------------------

// 2. examples of thinking `this` refers to lexical scope

// lexical scope: a convention used with many programming languages that sets the scope (range of functionality) of a variable so that it may only be called (referenced) from within the block of code in which it is defined.

// 2a. it accidentally works, under edge cases

// talk about using let/var/const v.s. no keyword; how this affects global object
// if no variable declaration keyword, code below works; if keyword, doesn't work
// note differences between adding to node vs browser global
count2 = 0;

console.log("init count2 var:", global.count2);

function bar(number) {
  console.log("In bar:", number);

  this.count2++;
}

for (let i = 0; i < 10; i++) {
  bar(i);
}

console.log("count2 var:", count2);
console.log("count2 is 10:", count2 === 10);

// 2b. it doesn't work

function bazz() {
  var count3 = 0;

  function fooBar(number) {
    console.log("In fooBar:", number);

    this.count3++;
  }

  for (let i = 0; i < 10; i++) {
    fooBar(i);
  }

  console.log("count3 var:", count3);
}

bazz();

// we can conclude that `this` does not refer to the lexical scope of/outside a function
