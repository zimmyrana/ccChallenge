//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

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
    }
}

console.log(doDivide(23,0))
