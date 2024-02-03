// Each Node for Queue
class Node {
    constructor(value){
        this.value = value
        this.next = null 
    }
}

// Queue Class
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // Enqueue Method
    enqueue(value){
        let newNode = new Node(value)

        if(!this.first) {
            this.first = newNode 
            this.last =  newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this.size++
    }

    // Dequeue Method
    dequeue(){
        if(!this.first) return null
    
        let tempValue = this.first
        // When only One ELement left
        if(this.first === this.last) return this.last = null
        this.first = this.first.next
        this.size--

        return tempValue
    }

    // Peek Method - Peek at the top Element
    peek(){
        return this.first?.value
    }

    // isEmpty Method - Check if the queue is Empty
    isEmpty(){
        return this.first === null
    }

    // Size Method
    queueSize(){
        return this.size 
    }

    // Print Method - Pring the whole Queue
    print(){
        let currentNode = this.first
        let strList = ''
        while(currentNode){
           strList += currentNode.value + ", " 
            currentNode = currentNode.next
        }
        return strList
    }


}

let queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
queue.enqueue(500)

queue.dequeue()

console.log(`Queue Size: ${queue.queueSize()}`)
console.log(`First In the Queue: ${queue.peek()}`)
console.log(`Queue isEmpty: ${queue.isEmpty()}`)
console.log(`Print the Queue: ${queue.print()}`)

console.log(queue)