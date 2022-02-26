// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    if(num === 1 || num === 2) return 1
    let arr = [1, 1]
    for(let i=2; i<num; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[arr.length - 1]
}