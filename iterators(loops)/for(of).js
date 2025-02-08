// for of
const arr = [1,2,3]
for (const element of arr) {
    // console.log(element)
}

const greet = " hello Gautam"
for (const element of greet) {
    // console.log(element)
}

// Maps
const map = new Map()
map.set('In',"India")
map.set('Us', ' United States')
map.set('Fr', "France")                         // unique key value pair , unlike objects order is maintained

map.set('In',"India") // this wont effect as duplicate not allowed

console.log(map)

for (const element of map) {
     console.log(element) // this will return arrays of key and value together 
    
}
for (const [key , value] of map) { // hence we are decinstructing the element to be key and value
    console.log(`${key} with value ${value}`)
     
    
} // you may think it might work work on objects too , but the objects are unordered so they are not iterateable
