//  Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. 

let promise = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{
            resolve('promise resolved')
        },2000)
    } else {
        reject('promise rejected')
    }
})

promise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})