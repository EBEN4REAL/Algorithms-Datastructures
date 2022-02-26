
function binarySearch(arr, num){
    let p1 = 0
    let p2 = arr.length - 1
    let mid = Math.floor((p1 + p2) / 2)
    
    while (p1 <= p2) {
        if(arr[mid] === num) {
            return mid
        }
        else if(arr[mid] > num) {
            p2 = mid - 1
        }else if(arr[mid] < num) {
            p1 = mid + 1
        }
        mid = Math.floor((p1 + p2) / 2) 
    }
    return -1
}

console.log(getIndex([1,2,3, 4 ,5,6,7,8,9], 7))