class User {
    constructor(userName, email, password){
        this.username = userName
        this.email = email
        this.password = password
    }
    encryptPass(){
        return `${this.password}abc`
    }

}

const hehe = new User('gautam', 'gautamchitti@gmail.com', "12348")
console.log(hehe.encryptPass())


// behind the scene

function UserF(userName, email, password){
    this.username = userName;
    this.email = email;
    this.password = password
}
UserF.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const newUser = new UserF('sharma', 'sharmachitti', 12434)
console.log(newUser.encryptPassword());
