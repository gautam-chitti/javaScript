// scope 
// var doesnot have the concept of scope i.e if var was used inside a scope{ var a =100} it will also be usable outside that too
// so we use the let and const , const cannot be changed but let can be

const hell = 70
if(true){
    var hello = 70
    
}
// hell = 90
console.log(hello);
console.log(hell);
// if there is a nested function then the child function can used the varabiles declared in the parent function , but parent cant
// some ways of defining funtions 



// addone(5)  this will return 6 and will work
function addone(nu){
    return nu + 1
}  /// if we are using this we can refer the function before the actual description of the function 


// because we are holding the function in a variable here we cannot call the function before the actual code of it 
// addtwo(5)  this will generate an error

// this concept is called hoistig but we will do it in details later
const addtwo = function(num){
    return num+2
}



// arrow functions 

const user = {
    username : 'gautam',
    price: 999,

    welcomeUser: function(){
        console.log(this);
        console.log(`${this.username}, welcome hehe`)  // here we will use this to refer to the current context
    }
    
    
}
user.welcomeUser()

user.username = " Gauti "
user.welcomeUser() // this allows us to change this 

console.log(this);

// this log empty cause we are currently in node enviornment but if done in console of broweser we will get window object
// as window is the global object

// when this will be placed inside a function it will give us a lot of thing
// we can only use this.username etc etc only in object and not in functions as it doesnot  support that
function hey(){
    let userName = "gautam"
    console.log(this.userName) // this will be undefined
}
hey()
// arrow functions
