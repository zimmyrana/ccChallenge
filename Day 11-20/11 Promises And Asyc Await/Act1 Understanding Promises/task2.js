// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

let promise = new Promise((resolve,reject)=>{
    if(false){
        resolve('promise resolved')
    } else {
        setTimeout(()=>{
            reject('promise rejected')
        },2000)
    }
})

promise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.error(msg)
})