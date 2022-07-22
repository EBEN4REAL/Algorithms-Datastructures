class Node {
    constructor(val) {
        this.next = null
        this.value = val
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let newNode =  new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }else {
            this.first.next = newNode
        }
        this.size++
        return this.first
    }
    dequeue() {
        let temp = this.first
        if(!this.first) return null
        if(this.size === 1) {
            this.first = null
        }else {
            this.first = temp.next
        }
        this.size--
        return temp.value
    }
}

const QueueA = new Queue()
console.log(QueueA.enqueue("EBEN"))
console.log(QueueA.enqueue("JOSH"))
console.log(QueueA.dequeue())
console.log(QueueA.dequeue())
console.log(QueueA.dequeue())
