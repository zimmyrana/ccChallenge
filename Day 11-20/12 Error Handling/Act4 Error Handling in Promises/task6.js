//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise = new Promise((resolve,reject)=>{
    if(Math.random()>0.5){
        resolve('promise resolved')
    } else {
        reject('promise rejected')
    }
})

promise.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})