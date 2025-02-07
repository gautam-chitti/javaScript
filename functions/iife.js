// Immediately Invoked function expression 
// used to reduce the global scope  pollution

(function hell(){
    // named iife
    console.log("hello")
})();

// just wrap the function in () and add () after function
// here we definitly need to add the ; to end the scope
// it also can be done with the arrow

((name) => {
    // name iife
    console.log(`heloo ${name}`)
})('Gautam')   /// here the arguments will be passed though the one which is invokking the function // these function run as soon 
// as our js is run