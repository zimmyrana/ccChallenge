//Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

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
        this.ele.pop()
    }

    pick(){
        if(this.ele.length === 0){
            console.log('stack is empty')
            return null
        }
        return this.ele[this.ele.length - 1]
    }
}

const stack = new Stack()

console.log(stack.pick())

stack.push('plate1')

console.log(stack.pick())

stack.push('plate2')
stack.push('plate3')
stack.push('plate4')
stack.push('plate5')

console.log(stack.pick())

stack.pop()
stack.pop()

console.log(stack.pick())