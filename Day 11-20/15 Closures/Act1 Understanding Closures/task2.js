//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function outer(){
    let counter = 0

    function increment(){
        counter++
         return counter
    }

    function getValue() {
        return counter;
    }

    return {
        increment,
        getValue
    }
}

const incrementCounter = outer()

console.log(incrementCounter.increment())
console.log(incrementCounter.increment())
console.log(incrementCounter.increment())
console.log(incrementCounter.getValue())
