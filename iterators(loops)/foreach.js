
const arr = ['gautam', 20 , 'gautam@mail.com']

console.log('arrow function indside for each');


arr.forEach((item)=> console.log(item))                // the function passed as the argument is called callback or higher order
// these function always have a item they  are bringing with them
// these callback functions donot have any name
  

// another function
console.log('written a func inside foreach using function keyword');
 
arr.forEach(function (item){
    console.log(item);
    
})


// another way
console.log('an actual function passed');

function hehe(item){
    console.log(item);
    
}

arr.forEach(hehe)

 console.log(' for each not only gets items but also there index , and full arr list ');
 

arr.forEach((item, index, hehearr) => {
console.log(`item : ${item}, index : ${index} , full arraylist: ${hehearr}`)
})