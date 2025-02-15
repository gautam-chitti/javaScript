// the prototype means that everything in js is prototype of an object , array , string everything even functions are prototype of 
// of our objects , so everything have what objects have 


// but this doesnot mean that objects will have everything , for example array will have everything of a object, but
// not the other way around
// we can also access prototype of anything by using .prototype

// console.log(Array.prototype)         do this inn console of browser
// we can add things to the prototype very easily as below

Array.prototype.gautam = function (){
    console.log(`Gautam in Arrays????`)
}
// the array one is specific to arrays but since everything is a obj, so obj is accessible by all
Object.prototype.gautamOb = ()=>{
    console.log(`It was Gautam All along`)
}

const myStr = 'hello'
const myArr = [0,1,2,3,4]
const myObj = {
    name : 'Sharma',
    phn : 2100
}

myStr.gautamOb()
myArr.gautamOb()
myObj.gautamOb()

// above will run without error


myArr.gautam()

// this one right above will work as it was injected to arrays but not its upper hierarchiy i.e objects
// so this will not work with anything else i.e below ones

// myStr.gautam()
// myObj.gautam() /// both will generate error

// so lets talk about inheritance 

const user = {
    name : 'gautam',
    email: 'gautamSharma@gmial.com'
}
const Teacher = {
    teach : true
}
const TeachingSupport ={
    helpTeacher : true
}
const TechSupport = {
    provideHelp : true,
    
}
TechSupport.__proto__ = user
TechSupport.name = 'Teacher1'
TechSupport.age = 22
/// this is inheritance , so techsupport willl also have all the properties as the user also thats why we can access
// and donot think .name is adding stuff to obj  like age , because if not specified it will have that of user as you
// can see about the email thing

console.log(TechSupport.name);
console.log(TechSupport.age);
console.log(TechSupport.email);
// console.log(Tech);

console.log(TechSupport) // but when did this this will not have email specified as it was not given/modifiedTo a new val

String.prototype.trueLen = function(){
    console.log(`val of this is ${this}`)
    console.log(`its trueLen is ${this.trim().length}`)

    const updateVal = this.trim()
    return updateVal
    // return 

}
let hell = 'gautam       '
hell.trueLen()
const newhell = hell.trueLen()
console.log(`New Returned word is ${newhell}`)
console.log(newhell.length)