// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise1 resolved')
    }, 1000)
})
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise2 resolved')
    }, 2000)
})
let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise3 resolved')
    }, 3000)
})

promise1.then((msg1)=>{
    console.log(msg1)
    return promise2
}).then((msg2)=>{
    console.log(msg2)
    return promise3
}).then((msg3)=>{
    console.log(msg3)
}).catch(err=>{
    console.log('Error fetching data:',err)
})