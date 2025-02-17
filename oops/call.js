function setUserName ( username ){
    this.username = username
}
function createUser(username, email, password){
    setUserName.call(this, username)
    
    // when this is done , the excution scope is done of this function( setuser and all the 
    // variables are lost before they were assigned to the outer fucntion as we didnot hold the reference, of execution context)
    // thats why we are using .call, and we pass this( of outer ) as a parameter now it will solve the problem
    this.email = email
    this.password = password
}

const gautam = new createUser("gautam" , 'gautam@hehe.org', 1258)

console.log(gautam)