
/*** Naive solution ***/
function maxSubArray(arr, num) {
    if (arr.length < num) {
        return null
    }
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let sum = 0
        for (let j = 0; j < num; j++) {
            sum += arr[i + j]
        }
        if (sum > max) {
            max = sum
        }
    }
    return max
}
// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

/*** Using sliding window solution ***/
function maxSubArraySum(arr, num) {
    if (arr.length < num) {
        return null
    }
    let max = 0
    let sum = 0
    for (let i = 0; i < num; i++){
        max += arr[i]
    }
    sum = max
    for (let j = num; j < arr.length; j++) {
        sum = sum + arr[j] - arr[j - num]
        if (sum > max) {
            max = sum
        }
    }
    return max
}
// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))


/*** Using sliding window solution ***/
function maxSubarraySum(arr, num){
    if(num > arr.length) return null
    let max = arr.slice(0, num).reduce((acc,cur) => acc += cur, 0)
    
    let sum = max

    for(let i=num; i<arr.length; i++) {
        sum = sum + arr[i] - arr[i - num]
        if(sum > max) {
            max = sum
        }
    }
    if(max === 0) return null
    return max

}
console.log(maxSubarraySum([100,200,300,400], 2))
