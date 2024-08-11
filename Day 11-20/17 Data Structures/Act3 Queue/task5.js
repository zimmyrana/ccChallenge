//Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
        this.ele = [];
    }

    enqueue(value) {
        this.ele.push(value);
    }

    dequeue() {
        return this.ele.length ? this.ele.shift() : null;
    }

    peek() {
        return this.ele.length ? this.ele[0] : null;
    }

    isEmpty() {
        return this.ele.length === 0;
    }
}




