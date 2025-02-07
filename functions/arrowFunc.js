// Arrow function we can remove function keyword and just add arrow after the ()
// this  will also be not working in the arrow functions 

// const hey = function(){ }
// instead write as

// const hey = () =>{

//  let userN = 'gautam'
//  console.log(this.userN)

// }
// hey()

// we can also use implicit return i.e we will not need to write the code in ( ) , if the actual code of function is of one line
// neither we will need to write the return key word it can be written as
const addSum = (num1, num2) => num1 + num2
console.log(addSum(5,6));

// this can also be written as below 
const addSumm = (num1, num2) => (num1 + num2)  // if written in ( ) we donot need to write return , if {} we need to
// what is use of (), if we want to return an object which is in {}, we simply cannot in implicit methond, cause
// it will think of scope so if we want to we can just use a () around it example
const Objreturn = ( username) => ({greet: `hello ${username}`})
console.log(Objreturn("gautam"));

// also help full in loops


// const myarr = [2,3,4,5,6,7,8]

// myarr.forEach(()=>{})
    const obj = {
        value: 10,
        arrowFunc: () => console.log(this.value), // `this` refers to outer scope (not `obj`)
        normalFunc: function () { console.log(this.value); } // `this` refers to `obj`
    };
    
    obj.arrowFunc(); // Undefined (depends on outer scope)
    obj.normalFunc(); // 10
    