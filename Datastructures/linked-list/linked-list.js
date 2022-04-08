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
    set push(val) {
        if(!this.head) {
            this.head = new Node(val)
            this.tail = this.head
        }
    }
}

let list = new SinglyLinkedList()
list.push("Josh")
console.log(list)