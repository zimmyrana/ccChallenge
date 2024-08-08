//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outer(){
    let value = 78
    function inner(){
        console.log(value)
    }
    return inner
}

const getInner = outer()

getInner()

// outer()() we can also do this