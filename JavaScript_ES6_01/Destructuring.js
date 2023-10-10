const player = {
  name: 'Lebron James',
  club: 'LA',
  address: {
    city: 'Los angeles',
  },
}
const {
  name,
  club,
  address: { city },
} = player

// insted of doing
// const name = player.name we can do the above
// const city = player.address.city




const student ={
    name:'dp',
    class:{
        dept:{
            one:"Mechanical"
        }
    }
}
const {hello="oki",class:{dept:{one:Two}}}= student;
console.log(hello);
console.log(Two);

