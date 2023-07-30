/*
(adds or removes elments from the array => **modifies original array)
push- adds element to the end of the array

pop- removes element from the end of the array

shift- removes element from the start of the array

unshift- adds element to the start of the array
*/



// slice()

/*
***Doesnt modify the original array

=> returns selected elements in array as new array
=> (start,end(not inclusive))
*/ 
let arr=[1,2,3,4];
let sliced = arr.slice(0,3);
console.log(sliced);
console.log(arr);//original array remains same



// splice() 

/*
##*modifies original array

(start,how many to be removed, items to be added)
=> removes or adds elements to the array
*/ 
let array = ["apple","pine","custard","banana","grapes"];
// array.splice(2,2,"straw","guava","mango");
array.splice(0,array.length)
console.log(array);


// concatenation => ***#doesnt change the original array 
// =>returns a new array joining two or more arrays



//fill()
/*
##*Overwrites the original array

=> fills specified elements in a array with a value
=> start and end can be specified => if not all will be filled with given string or anything
=> if only start is specified then from there till end they only will be specified
*/  


let x =[2,3,4,5];
x.fill("kutti",2);
console.log(x);


// reverse()

/*
=> modifies original array
=> reverses  the orders of the elements
*/ 
let pebl=[5,6,7,8];
let revd = pebl.reverse();
console.log(revd);



// sort => sorts as string so use comparator function
let arr3=[1,5,6,2,3];
function sortt(a,b) {
    return b-a;
}
arr3.sort(sortt);
console.log(arr3);

