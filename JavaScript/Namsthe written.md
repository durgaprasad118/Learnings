

- [Execution Context](#eExecution-context)
  - [Working](#working)
- [Hoisting](#hoisting)
- [Functions and variable Environments](#functions-and-variable-environments)
- [Shortest JS program](#shortest-js-program)
- [undefined vs not defined](#undefined-vs-not-defined)
- [Loosely typed/ weakly typed language](#loosely-typed-weakly-typed-language)
- [scope](#scope)
- [let and const are also hoisted](#let-and-const-are-also-hoisted)
- [Temporial Dead ZOne](#temporial-dead-zone)
- [Errors](#errors)
- [Block](#block)
- [Closures](#closures)

## Execution Context

- Everything in JS happens in EC
  - Two components 1. `Memory Component or Variable Environment` - Memory component has all the variables and functions in key value pairs - For function `whole function is  attached` - for variables `undefined` 2. `Code component or Thread of Execution` - Code component is the place where code is executed one line at a time
- JS is synchronous (one command at a time) and single-threaded(in a specific synchronous order)

### Working

- Whenever a js program is ran a `GEC` is created
- `function ` => whole code
- `variable` => undefined
- for every function invoked a brand new `ec` is created

## Hoisting

- It is a concept which enables us to extract values of variables and functions even before
  initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

## Functions and variable Environments

```js
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
//10
//100
//1
```

- Flow
  1. GEC is pushed to call stack
     > GEC
  2. In first phase `x:undefined` for a and b entire function body is attached
  3. In second phase for functions separate ec is created and `x=1`
  4. after `a()` is called
     > GEC, a()
  - Local a , first `x:undefined` and then in phase 2 assigned with `x=10` and printed in console
  - after that nothing to do so EC is removed from both GEC and from call stack
    > GEC
- cursor moves to b()
  > GEC, b()
- same process
  > GEC is delted and removed from stack
- Program ends

## Shortest JS program

- Empty file is the shortest JS program
- JS engine creates something known as 'window'. It is an object, which is created in the global space. It contains lots of functions and variables. These functions and variables can be accessed from anywhere in the program. JS engine also creates a this keyword, which points to the window object at the global level. So, in summary, along with GEC, a global object (window) and a this variable are created
- At global level `this == window`

```js
var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
```

## undefined vs not defined

> When variable is declared but not assigned value, its current value is undefined. But when the variable itself is not declared but called in code, then it is not defined.

- In the memory allocation phase JS assigns each variable a placeholder called `undefined`
- `undefined is when memory is allocated for the variable but no value has not been assigned`
- If the variable is not declared at all => `not defined`

```js
console.log(x); // undefined
var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined
```

## Loosely typed/ weakly typed language

- It doesn't attach any data type to the variables

## scope

- Scope in Javascript is directly related to Lexical Environment
- `Lexical Environment`- local memory + lexical environment of it's parent
- ** An inner function can access variables which are in outer functions even if inner function is nested deep. In any other case, a function can't access variables not in its scope**

## let and const are also hoisted

- var
  - function scoped
  - var adds itself to the window object
- let and const

  - block `{}` scoped
  - let and const does't add to the window object
  - let and const in `ES6`

- `var` is inside Global Space and `let and const` are in separate memory space called `script` which allows them to access only after assigning some value to it

## Temporial Dead ZOne

- cause of `Reference Error`
- Time since when the let variable was hoisted until it is initialized some value

## Errors

- Types of Error: Syntax, Reference, and Type.
  - Uncaught ReferenceError: x is not defined at ...
    - This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.
  - Uncaught ReferenceError: cannot access 'a' before initialization
    - This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.
  - Uncaught SyntaxError: Identifier 'a' has already been declared
    - This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.
  - Uncaught SyntaxError: Missing initializer in const declaration
    - This Error signifies that we haven't initialized or assigned value to a const declaration.
  - Uncaught TypeError: Assignment to constant variable
    - This Error signifies that we are reassigning to a const variable.

## Block

- `Block aka compound statement`- to group JS statements together with `{}`

```js
var a =100
let b=200;
{
  var a = 10;
  let b = 20;
  const c = 30;
  // Here let and const are hoisted in Block scope,
  // While, var is hoisted in Global scope.
}
console.log(a)//10 due to shadowing
```


- iMportant in the above code 
- GLOBAL - a
- Block - b,c
- Script - b of let


## Closures
- A function bundled along with it's lexical scope is called `closure`
- JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory.When it does not find it there, it goes to the memory of its lexical parent. See Below code, Over here function y along with its lexical scope i.e. (function x) would be called a closure

```js
function x() { 
var a = 7; 
function y() { 
console.log(a); 
    } 
return y; 
} 
var z = x(); 
console.log(z);  // value of z is entire code of function y. 
```
- In above code, When y is returned, not only is the function returned but the entire closure (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a inside x()

- **A closure is a function that has access to its outer function scope even after the function has returned.Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned**

- Advantages
  - Currying
  - Data hiding and encapsulation
  - setTimeouts
  - Memoize
- Disadvantages
  - Over cunsumption of memory
  - Memory leak
  - Freeze browser
