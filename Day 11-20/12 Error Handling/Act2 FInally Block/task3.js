// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

const divide = (numer, denomin) => {
    if (denomin === 0) {
        throw new Error('divide by zero Error')
    } else {
        return numer / denomin
    }
}

function doDivide(numer,denomin){
    try{
        return divide(numer,denomin)
    } catch(err){
        return err.message
    } finally {
        console.log('finally executed')
        /*Writing a return statement inside a finally block in JavaScript can lead to some potentially confusing behavior. The finally block is executed after the try and catch blocks, regardless of whether an exception was thrown or caught. If you include a return statement in a finally block, it will override any return value from the try or catch blocks. This means that the value returned by the finally block will take precedence. */
    }
}

console.log(doDivide(23,24))