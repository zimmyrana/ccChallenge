//Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

class Stack{
    constructor(){
        this.ele = []
    }

    push(value){
        this.ele.push(value)
    }

    pop(){
        if(this.ele.length === 0){
            console.log('stack is empty')
            return null
        }
        return this.ele.pop()
    }

    pick(){
        if(this.ele.length === 0){
            console.log('stack is empty')
            return null
        }
        return this.ele[this.ele.length - 1]
    }
}

let string = 'hello'
let arr = []

const stack = new Stack()

for (let i = 0; i < string.length; i++) {
        stack.push(string[i])
}

for (let i = 0; i < stack.ele.length; i++) {
    let char
    char = stack.pop()
    arr.push(char)
}

console.log(arr.join(''))
