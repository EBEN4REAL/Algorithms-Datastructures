const sort = arr => {
    for(let i=0; i<arr.length; i++) {
        let min = i
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        if(i !== min) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}

console.log(sort([1,0,5,2,4,8,6]))