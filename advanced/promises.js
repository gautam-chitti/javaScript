const promiseOne = new Promise(function(resolve, reject){
    const error = true
    if(!error){
        resolve()     // btw resolve and reject can be named anything else
    }
    else{
        reject()
    }
})
promiseOne.then(() => console.log('happend')).catch(()=> console.log('error')).finally(() => console.log('finally'))                // this catches what will be return by resolve if no error occurs // this is thenable i.e can be 
                                // added with more thens in chain
///////catch   one will catch if there are any errors
///// finally will run eventually even after error happens

new Promise(function(abc, xyz){
    const error = true
    if(!error){
        setTimeout(()=>{
            abc({username: 'gautam', id : 1})     // this can also return data if any which can be gained by using chained then
            
        },1000)
    }
    else{
        xyz('abc went wrong')
    }
}).then(
    function(data){
    console.log(data)
    return data.username }
).then((username) => console.log(username)).catch((error) => console.log(error))

const newPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const err = true;
        if(!err){
            resolve({user:'gautam', data : 5})
        }
        else{
            reject("error Happened Blud")
        }
    },1000)
})
async function consumePromise(){
                
    try {
        const respone = await newPromise
        console.log(respone)
    } 
    catch (error) {
        console.log(error)
    }
}