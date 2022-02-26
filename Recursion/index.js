const factorial = num => {
    let fact = 1
    for (let i = num; i>0; i--) {
        fact *= i
    }
    return fact
}
  
console.log(factorial(5))

/*** Using Recursion 1 ***/

const factorialRecursive = (num, fact = 1) => {
    if (num === 1) {
        return fact
    }
    return factorialRecursive(num -1, fact *= num)
}

console.log(factorialRecursive(6))

/*** Using Recursion 2 ***/

const factorialRecursive2 = (num) => {
    if (num < 0 ) return 0;
    if (num <= 1) {
        return 1
    }
    return num * factorialRecursive2(num -1)
}

console.log(factorialRecursive2(6))

/*** Using Recursion 2 ***/
function power(base,exp) {
    if(exp === 0) return 1; 
    let result  = base
    function compute(exp) {
        if(exp === 1) return
        result *= base
        compute(exp - 1)
    }
    compute(exp)
    return result;
}

// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    let result = 1
    function compute(data) {
        if(data.length < 1) return 
        result *= data[0]
        compute(data.slice(1))
    }
    compute(arr)
    return result
}

// recursiveRange(6) // 21
function recursiveRange(num){
    if(num === 1) return 1
    return num + recursiveRange(num - 1)
}

/*** Fibonnacci Recursive  ***/
function fib(num){
    if(num <= 2) return 1
    return fib(num -1) + fib(num - 2)
}