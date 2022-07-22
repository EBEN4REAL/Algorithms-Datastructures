class Node {
    constructor(val) {
        this.next = null
        this.value = val
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        let newNode =  new Node(val)
        let temp = this.first
        this.first = newNode

        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }else {
            this.first.next = temp
        }
        
        return this.first
    }
    pop() {
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

const stackA = new Stack(1)
console.log(stackA.push(1))
console.log(stackA.push(2))
console.log(stackA.pop())
console.log(stackA.pop())
console.log(stackA.pop())
console.log(stackA.push(3))