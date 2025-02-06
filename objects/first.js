// symbol can  are created as 
const symbol = Symbol('jet')
const user = {
    [symbol] : 'key1',
    age : 19
}
console.log(user[symbol])
console.log(user.age)

// single ton object
const tinderUser = new Object()

// literal 
const tinderUser2  = {}
tinderUser2.id = "123abc"
tinderUser2.name = "Sammy"
tinderUser2.isLoggedIn = false
// console.log(tinderUser2);

const regularUser = {
    email : "some@gmial.com",
    fullName: {
        userFullName: {
            firstName : "gautam",
            lastName : "sharma"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

// optional chaining
// console.log(regularUser.fullName?.userFullName.firstName);

const ob1 ={ 1 : 'a', 2:"b"}
const ob2 ={ 3 : 'c', 4:"d"}
// const ob3 ={ ob1, ob2} // this we add 2 object in ob3
const ob3 = Object.assign({}, ob1,ob2) // this means that all ob1 and ob2 RE GOING TO THE EMPTY TARGET {} , else the first one is taken as the target
console.log(ob3)
const ob4 = {...ob1, ...ob2}

// values from databases
const users = [
        {},
        {},
        {},
        {}
]

// getting keys
console.log(Object.keys(tinderUser2))
console.log(Object.values(tinderUser2)) // both will return arrays of those 

console.log(tinderUser2.hasOwnProperty('isLoggedIn'))