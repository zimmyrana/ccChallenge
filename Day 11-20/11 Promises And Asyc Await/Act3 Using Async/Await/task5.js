// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

let promise =  new Promise((resolve,reject)=>{
    let num = Math.random()
    console.log(num)
    if(num > 0.5)
    {
        resolve('promise resolved')
    } else{

        reject('error fetching data')
    }
})

let dataFromServer = async () =>{
    try {
        const data = await promise
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

dataFromServer()