//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

let makeError = () =>{
    throw new Error('Hahaha Error')
}

handleError = () => {
    try{
        makeError()
    } catch (err){
        console.log(err.message)
    }
}

handleError()