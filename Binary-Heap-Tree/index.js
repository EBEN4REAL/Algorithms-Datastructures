

class BinaryHeap {
    constructor() {
        this.values = [55,39,41,18, 27, 12, 33]
    }
    insert(val) {
        this.values.push(val)
        this.bubbleUp(val)
        return this
    }
    bubbleUp(val) {
        let elIdx = this.values.length - 1
        let element = this.values[elIdx]
        
        while(elIdx > 0) {
            let parentIdx = Math.floor((elIdx - 1) / 2)
            let parent = this.values[parentIdx]
            if(element <= parent) break
            if(element > parent) {
                this.values[parentIdx] = element
                this.values[elIdx] = parent
                elIdx = parentIdx
                
            }
        }

    }
    extractMax() {
        let max = this.values[0]
        let currentIndex = 0
        const element = this.values[0]
        this.values[0] = this.values.pop()
        let len = this.values.length
        
        while(true) {
            let left = (2*currentIndex) + 1
            let right = (2*currentIndex) + 2
            let swap = null
            let leftValue, rightValue

            if(left < len) {
                leftValue = this.values[left]
                if(leftValue > element) {
                    swap = left
                }
            }
            if(right < len) {
                rightValue = this.values[right]
                if((swap == null && rightValue > element) || (swap !== null && rightValue > leftValue)) {
                    swap = right
                }
            }

            if(swap === null) {
                break
            }
            this.values[currentIndex] = this.values[swap]
            this.values[swap] = element
            currentIndex = swap
        }
        console.log(this)
        return max
    }
}

const heap = new BinaryHeap
// heap.insert(95)
// console.log(heap.insert(95))
console.log(heap.extractMax())