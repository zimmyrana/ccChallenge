//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order. 

class Queue {
    constructor() {
        this.ele = []
    }

    enqueue(value) {
        this.ele.push(value)
    }

    dequeue() {
        return this.ele.length ? this.ele.shift() : null
    }

    peek() {
        return this.ele.length ? this.ele[0] : null
    }

    isEmpty(){
        return this.ele.length === 0
    }

}

const printQueue = new Queue()

function addJob(job){
    console.log(`job ${job} added to printer`)
    printQueue.enqueue(job)
}

function processJob(){
    if(printQueue.isEmpty()){
        console.log('queue is empty')
    } else {
        const job = printQueue.dequeue()
        console.log(`processing job ${job} from printer`)
    }
}

addJob("doc1.pdf");
addJob("img1.jpg");
addJob("doc2.docx");

processJob();
processJob();
processJob();

