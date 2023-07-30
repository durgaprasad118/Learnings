const alphabets =["a","b","c","d","e","f"];
const numbers =[1,2,3,4,5,6];


// const A= alphabets[0];
// const B =alphabets[1];

// console.log(A);

// const [A,B]= alphabets;
// console.log(A,B);


// const[x,,y]=alphabets;
// console.log(x,y);

// const [p,q,...r]=alphabets
// console.log(r);

// const newArray = [...alphabets,...numbers]
// console.log(newArray);

// function SumMul(a,b){
//     return [a+b,a*b]
// }

// const [sum,mul,div="no division"]= SumMul(2,3);
// console.log(sum);
// console.log(mul);
// console.log(div);


// =>


const person1={
    name:"kyle",
    age:24,
    address:{
        city:"hyd",
        state:"one of them"
    }
}

const person2={
    name:"Sally",
    age:23,
    address:{
        city:"kolkata",
        state:"another"
    }
}


const {address:{city:cty,street="ramalayam"}}=person2;
console.log(street);

function print({name,age}){
    console.log(`I am ${name} and my age is ${age}`);
}

print(person2)


// console.log("Hello World")