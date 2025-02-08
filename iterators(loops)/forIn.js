// as for and forof not useful with objects we can use for in 

const ob = {
    name : 'gautam',
    age : '20',
    mail : 'gautam@mail.com'
}
for (const key in ob) {
    console.log(`${key} with value ${ob[key]}`);
    
}

const arr = ['gautam', 20 , 'gautam@mail.com']
for (const key in arr) {
    // console.log(key);  // array also hay key , i.e its index position , it will only print 0,1,2 instead of 'gautam', 20 , 'gautam@mail.com'
    console.log(arr[key])
}
const map = new Map()
map.set('In',"India")
map.set('Us', ' United States')
map.set('Fr', "France")   
for (const key in map) {
    console.log(`map  key ${key}`) // this wont be working at all
}