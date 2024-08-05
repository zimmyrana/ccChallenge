//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5){
            resolve('promise resolved')
        } else {
            reject('promise rejected')
        }
    }, 2000)
})

const handleError = async () =>{
    try{
        const result = await promise
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

handleError()