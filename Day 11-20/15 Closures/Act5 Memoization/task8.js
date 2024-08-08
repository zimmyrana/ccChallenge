//Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(num) {
    if (num === 0) {
        return 1
    } else {
        let fact = 1
        for (i = num; i > 0; i--) {
            fact = i*fact
        }
        return fact
    }
}

function memoize (factFn){
    const cache = {}
    return function (arg){
        if(arg in cache){
            console.log(cache)
            console.log('from cache:')
            return cache[arg]
        } else {
            console.log('calculating first time:')
            let result = factFn(arg)
            cache[arg] = result
            return result
        }
    }
}

const flash = memoize(factorial)

console.time()
console.log(flash(5))
console.timeEnd()

console.time()
console.log(flash(0))
console.timeEnd()

console.time()
console.log(flash(5))
console.timeEnd()

