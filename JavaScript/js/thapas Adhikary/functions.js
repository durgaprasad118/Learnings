// declaration and defining a function is same 

function func(){
    console.log("Hey dp!")
}

func();
// Parameter => we pass in function declaration
function sum(a,b){
    return a+b;
}
// argument => when we pass actual value while calling the function 
let add = sum(1,3);
console.log(add);


// function Expression

const fun = function(){
    console.log(`This is a function expression`);
}

fun();


// default parameters

function calc(a=1,b=1){
    return a*b;
}
console.log(calc());


// rest parameters => any number of arguments as array
// only one rest parameter
// rest parameter should be at the end
function collectThings(x,z,...y){
    console.log(x);
    console.log(y);
}
collectThings(2,3,4,5,6,6,7)


// arrow function
const sub = (a,b)=>{
    return a-b;
}

console.log(sub(2,1));
// if arrow function has one line then curly braces can be omitted
const mul =(a,b)=> a*b;
console.log(mul(3,5));

// if arrow function has one line and only one parameter then curly braces and parenthesis can be omitted
const one = x=> x*4;
console.log(one(3));





// nested functions
function outer(){
    console.log(`its outer`);
    function inner(){
        console.log(`inner function`);
    }
    inner();
}

outer();



// function
/*
-variable declared inside a function cant be accessed outside
- a function can acess all the variables defined in the scope
-

*/ 


function dosmt(){
    let x =10;
    let y= 20;
    let z =30;
    console.log(x,y,z);
}

dosmt()


// closure

/*
=> 
=>
*/ 
function out(x){
    function inn(y){
        return x+y;
    }
    return inn;
}

const outCall = out(10);
console.log(outCall(4));
console.log(out(2)(3));



// pure function => if input is same it gives same output

function greet(name){
    return `hello ${name}`
}
console.log(greet("Dp"));


// iife => imediatly invoked function expression
// executes right after it is defined


(function(){
    console.log(`IIFE`);
})();