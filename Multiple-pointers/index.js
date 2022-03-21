function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] > 0) {
            right--
        } else {
            left++
        }
    }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))

/*** Count  unique values***/
function countUniqueValues(arr){
    let i  = 0
    for (let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    
    return i + 1
}
// console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 3, 5]))

/*** Duplicate Arguments ***/
function areThereDuplicates() {
    let p1 = 0
    let sortedValues = Object.values(arguments).sort()

    for (let p2 = 1; p2 < sortedValues.length; p2++) {
        if (sortedValues[p1] === sortedValues[p2]) {
            return true
        } else {
            p1++
        }
    }
    return false
}

// console.log(areThereDuplicates(1,2,3,3,4,5))

function averagePair(arr, avg){
    if(!arr.length) return false
    let p1 = 0
    let p2 = arr.length - 1
    while(p1 < p2) {
        if(((arr[p1] + arr[p2]) / 2) === avg ) {
            return true
        }else if(((arr[p1] + arr[p2]) / 2) > avg) {
            p2--
        }else {
            p1++
        }
    }
    return false
}
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))