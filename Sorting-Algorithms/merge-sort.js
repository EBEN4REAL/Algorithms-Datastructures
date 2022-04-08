const mergeArrays = (arr1, arr2) => {
    let mergedArray = []
    let p1 = 0
    let p2 = 0

    while(p1 < arr1.length && p2<arr2.length) {
        if(arr1[p1] < arr2[p2])  {
            mergedArray.push(arr1[p1])
            p1++
        }else {
            mergedArray.push(arr2[p2])
            p2++
        }
    }

    while(p1 < arr1.length) {
        mergedArray.push(arr1[p1])
        p1++
    }

    while(p2 < arr2.length) {
        mergedArray.push(arr2[p1])
        p2++
    }
    
    return mergedArray
}

const mergeSort = arr => {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let first =  mergeSort(arr.slice(0, mid))
    let second = mergeSort(arr.slice(mid))
    console.log(first)
    console.log(second)
    return mergeArrays(first, second)
}

console.log(mergeSort([1,2,6,20,5,3,50]))