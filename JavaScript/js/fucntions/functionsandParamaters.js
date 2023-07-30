function sayHello(){
    console.log("Hello");
}
// sayHello();



function addTwoNumbers(a,b){
    let sum= a+b;
    return sum;
}

let answer = addTwoNumbers(2,4);
console.log(answer);

function cal(...num){
    return num;
}


console.log(cal(1,2,3,4,5,6));