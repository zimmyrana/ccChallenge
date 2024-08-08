//Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createId(){
    let id = 100

    function generateId(){
        id++
        return id
    }

    return generateId

}

let id = createId()

console.log(id())
console.log(id())
console.log(id())