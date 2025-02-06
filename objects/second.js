// destructuring of objects in js 

const course = {
    courseName : "hehe",
    price : "999",
    instructor : "chitti"
}
const {instructor: ins} = course // destructured the object here

console.log(ins);

// array can be destructured too 

// json structure is written below here keys and the values are both are string ;

{
    "login" : "gautam",
    "price" : "free"
}
