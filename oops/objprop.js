const user = {
    name : 'Gautam',
    age : 20,
    email : 'gautamchitti',
    sayhello : function(){
        console.log(`hello there`)
    }
}

const decipter = Object.getOwnPropertyDescriptor(user, 'name')
console.log(decipter);

Object.defineProperty(user, 'name', {
    // writable : false,
    enumerable: false
})
// const decipter2 = Object.getOwnPropertyDescriptor(user, 'name')
// console.log(decipter2)  // since enumerble is false cant iterate

for( let [key, value] of Object.entries(user)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)      /// name will not be there as its enumerable is false
    }
    
}