class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    search(val) {
        const node = new Node(val)
        if(!this.root) {
            return false
        }
        let root = this.root
        while(true) {
            if(val === root.value) {
                return true
            }else if(val > root.value) {
                if(!root.right) {
                    return false
                }else {
                    root = root.right
                }
            }else {
                if(!root.left) {
                    return false
                }else {
                    root = root.left
                }
            }
        }
    }
    BFS() {
        let currentNode = this.root
        const  queue = []
        const  values = []
        queue.push(currentNode)
        while(queue.length) {
            currentNode = queue.shift()
            values.push(currentNode.value)
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return values
    }
    DfsPreorder() {
        let current = this.root
        const values = []
        function traverse(node) {
            values.push(node.value)
            if(node.left) {
                traverse(node.left)
            }
            if(node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        return values
    }
    DfsPostorder() {
        let current = this.root
        const values = []
        function traverse(node) {
            values.push(node.value)
            if(node.left) {
                traverse(node.left)
            }
            if(node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        return values
    }
    DfsInorder() {
        let current = this.root
        const values = []
        function traverse(node) {
            node.left && traverse(node.left)
            values.push(node.value)
            node.right && traverse(node.right)
        }
        traverse(current)
        return values
    }
    insert(val) {
        const newNode = new Node(val)
        if(!this.root) {
            this.root = newNode
            return this
        }else {
            let root = this.root
            while(true) {
                if(val === root.value) return false
                if(val > root.value) {
                    if(root.right) {
                        root = root.right
                    }else {
                        root.right = newNode
                        return this
                    }
                }else {
                    if(root.left) {
                        root = root.left
                    }else {
                        root.left = newNode
                        return this
                    }
                }
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.root = new Node(20)
tree.root.right = new Node(25)
tree.root.left = new Node(15)
console.log(tree.insert(12))
console.log(tree.insert(50))
console.log(tree.insert(22))
console.log(tree.insert(30))
console.log(tree.DfsPreorder())