//Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value = null) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(2)

node1.next = node2

console.log(node1.value)
console.log(node1.next.value)
// console.log(node2.next.value) //null