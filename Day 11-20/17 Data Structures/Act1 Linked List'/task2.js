//Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class Node {
    constructor(value = null) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addToEnd(value) {
        const newNode = new Node(value)
        
        if (!this.head) {
            this.head = newNode

        } else {
            let current = this.head

            while (current.next) {

                current = current.next

            }
            current.next = newNode

        }
    }

    removeFromEnd() {
        if (!this.head) {
            console.log('list is empty')
            return
        }

        if (!this.head.next) {
            this.head = null
        } else {
            let current = this.head
            while (current.next.next) {
                current = current.next
            }
            current.next = null
        }
    }

}

let link = new LinkedList()

link.addToEnd(23)
link.addToEnd(56)
link.addToEnd(78)

