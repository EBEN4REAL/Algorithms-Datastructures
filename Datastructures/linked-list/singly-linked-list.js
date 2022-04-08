class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode =  new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
            console.log(this.tail.next)
        }
        this.length++
        return this
    }
    pop () {
        if(!this.head) {
            return undefined
        }
        let current = this.head
        let tail = current
        while(current.next) {
            tail = current
            current = current.next
        }
        this.length--
        this.tail = tail
        this.tail.next = null
        return current
    }
    shift() {
        if(!this.head) {
            return undefined
        }
        let current = this.head
        this.head = current.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return current
    }
    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    
}

let list = new SinglyLinkedList()
list.push("EBEN")
console.log(list.shift())
console.log(list)
