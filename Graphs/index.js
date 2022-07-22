class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
        return this
    }
    removeEdge(v1, v2) {
        this.adjacencyList
    }
}

const graph = new Graph()
console.log(graph.addVertex("yaba"))
console.log(graph.addVertex("lagos"))
console.log(graph.addVertex("lekki"))
console.log(graph.addEdge('yaba', 'lagos'))