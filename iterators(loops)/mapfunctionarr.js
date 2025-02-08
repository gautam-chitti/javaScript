// const myNumber = [1,2,4,5,6,7,8,9,10]
// const newNumbers = myNumber.map( ( num ) => num + 10) // unlike forEach map automatically return value if stored in a vairable
// console.log(newNumbers);

// // method chaning can also be done
// const newNumber2 = myNumber.map((nums)=> nums + 10).map((num) => num + 5).filter((nums) => nums>15)
//                      // first map gets 1,2,4 , second map will get the nex value i.e 11,12,13 , and filter will filter output of the second map
//                      // i.e 16, 17,18,19
// console.log(newNumber2)

const sumOfarr = [1,2,3,4,5]
const initialValSum = 0
const sumWithInitial = sumOfarr.reduce(
    (acc, curr) => acc + curr, initialValSum
)
// acc for first will get the value of initialval passed then after that the , result i.e acc+curr will be assigned everytime 
// to acc with next iteration, i.e the above will give us sum of all element in an array

console.log(sumWithInitial);

const mulOfarr = sumOfarr

const initialValMul = 1
const mulWithInitial = mulOfarr.reduce((acc,curr)=> acc*curr, initialValMul)
console.log(mulWithInitial);
