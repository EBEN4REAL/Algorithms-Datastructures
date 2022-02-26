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
    if (num === 1) {
        return 1
    }
    return num * factorialRecursive2(num -1)
}

console.log(factorialRecursive2(6))
