const user = new Object();
 user.id ="123abc";
user.name ="dp";
user.lcn = "Hyderabad"
console.log(user);




const regularUser ={
    email:"someone@gmail.com",
    fullName:{
        fN:"durga",
        lN:"prasad"
    }
}


console.log(regularUser?.fullName?.fN);




const obj1 = {
    1:"a",
    2:"b",
}


const obj2 = {
    3:"c",
    4:"d"
}


const obj3 = {...obj1,...obj2};
const obj4 =Object.assign({},obj1,obj2,regularUser);//we can also combine objects in this way
console.log(obj4);


console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));//converts every key value to array

console.log(obj4.hasOwnProperty('3'));//check whether key exists or not






// destructuring 
const course={
    name:"reactjs",
    price:"2000",
    instrctor:"Saini"
}

const{instrctor:inst}=course;
console.log(inst);