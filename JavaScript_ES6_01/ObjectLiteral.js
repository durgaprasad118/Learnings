
function addressMaker(city,state){
    const newAddress = {city:city,state:state}
    console.log(newAddress);
}
addressMaker("Hyd","Telangana")


// if  they key is same as the value we can write as below
function AdressFormer(city,state){
    const newAddress = {city,state}
    console.log(newAddress);
}
AdressFormer("Vizag","Andra Pradesh")
// Answer:
// { city: 'Vizag', state: 'Andra Pradesh' }