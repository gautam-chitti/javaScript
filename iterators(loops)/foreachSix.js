const arr = ['gautam', 20 , 'gautam@mail.com']


// if for used to save value in a variable , it cannot return a  value

const value = arr.forEach((item)=>{
      return item
})
console.log(value) // will be undefined

const myNums = [1,3,4,9,7,8,45,7]

const newNums  = myNums.filter((num) => num > 4)   // this is kind of forEach ? but can be used to return value based on a conditon
// keep in mind if added {} it mean you have started a scope so will need to write return
const newNum2  = myNums.filter((num) => {
    return num > 4})


// this can be done with the for each too but it cannot add the stuff directly we must do the following

const newNums3 = []
myNums.forEach(element => {
    if ( element > 2){
        newNums3.push(element)
    }
});

console.log(newNums)