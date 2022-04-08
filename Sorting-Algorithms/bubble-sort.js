const sort = arr => {
    let noSwaps
    for(let i=arr.length; i>0; i--) {
        for(let j=0; j<i-1; j++) {
            noSwaps = false
            if(arr[j] > arr[j+1]) {     
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
                noSwaps = true
            }
        }
        if(noSwaps) break
    }
   
    return arr
}

console.log(sort([1,5,2,4,8,6]))