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