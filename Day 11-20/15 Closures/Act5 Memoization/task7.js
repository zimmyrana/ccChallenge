//Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function add(num){
    let sum = 0
    for(i=0;i<=num;i++){
        sum += i
    }
    return sum
}

function memoize(fn){
    const cache = {}
    return function(arg){
        if(arg in cache){
            console.log('cache')
            console.log(cache)
            return cache[arg]
        } else {
            console.log('exe first time')
            let result = fn(arg)
            cache[arg] = result
            return result
        }
    }

}

let flash = memoize(add)


console.time()
console.log(flash(5))
console.timeEnd()

console.time()
console.log(flash(6))
console.timeEnd()

console.time()
console.log(flash(5))
console.timeEnd()

console.time()
console.log(flash(7))
console.timeEnd()