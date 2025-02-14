// oop is programming paradigm , 
// javascript is prototype based 
// classes were added in es6 which are not really anything but just sugar coating 
// this was just for that the js code becomes more organised and resuseable

const user = {
    username : " Gautam ",
    logincount : 8,
    signedIn : true,
    getdetails: function() {
        console.log(this.username)
    }
}
user.getdetails()

// the keyword new tells that it should have its own context and this is called constructor function

function User(username, logincount, isloggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isloggedIn = isloggedIn;

    return this;   // if not even written it does this implicitly but we should write this

}

const userOne = User('Gautam', 1, true)
const userTwo  = User('Sharma', 2, false)

console.log(userOne) // as can see this overwrites i.e userTwo has overwritten one so thats why we use new key word

const userThree = new User("gautam", 1, true)

console.log(userOne)
console.log(userTwo)
console.log(userThree) /// its visible that userOne and two will be same but not userThree cause new keyword was used