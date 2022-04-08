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

/*** Using Recursion 2 and closure ***/
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

function reverse( str, result=""){
    let resultStr = result

    resultStr += str.slice(-1)[0]
    if(str.length == 1) {
        return resultStr
    }
    
    return reverse(str.slice(0, str.length - 1), resultStr)
}

/*** Reads the same forward and backward  ***/
function isPalindrome(str){
    function reverse( str, result=""){
      let resultStr = result
  
      resultStr += str.slice(-1)[0]

      if(str.length == 1) return resultStr
      
      return reverse(str.slice(0, str.length - 1), resultStr)
    }

    return reverse(str) === str
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function isOdd(num) {
    return num % 2 !== 0 
}

function someRecursive(arr, isOdd, boolArr=[]){
    if(arr.length === 1) {
        if(isOdd(arr[0])) {
            boolArr.push(true)
        }
        return boolArr.includes(true)
    }
    if(isOdd(arr[0])){
        boolArr.push(true)
    }else {
        boolArr.push(false)
    }

    return someRecursive(arr.slice(1), isOdd, boolArr)
}


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
function flatten(oldArr){
    let arr = []
    for(let i=0; i<oldArr.length; i++) {
        if(Array.isArray(oldArr[i])) {
            arr = arr.concat(flatten(oldArr[i]))
        }else {
            arr.push(oldArr[i])
        }
    }
    console.log(arr)
    return arr
}

/*** naiver solution  ***/
function capitalizeFirst (arr) {
    return arr.map(el =>  `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
}

/*** Using Recursion  ***/
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 
function nestedEvenSum (obj) {
    let total = 0
    for(let key in obj) {
        if(typeof obj[key] === 'number'  && obj[key] % 2 === 0) {
            total += obj[key]
        }else if(typeof obj[key] === 'object') {
            total += nestedEvenSum(obj[key])
        }
    }
    return total
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
function capitalizeWords (arr) {
    let ret = []
    if(arr.length === 1) {
        ret.push(arr[0].toUpperCase())
        return ret
    }else {
        let x = arr.shift()
        ret.push(x.toUpperCase())
        return ret.concat(capitalizeWords(arr))
    }
}


/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
*/

function stringifyNumbers(obj) {
    let newObj = {}
    
  for(let key in obj) {
      if(typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString()
      }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key])
      }else {
        newObj[key] = obj[key]
      }
  }
  return newObj
}
// {≠
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
function collectStrings(obj) {
    let arr = []
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            arr.push(obj[key])
        }else if(typeof obj[key] === 'object') {
            arr = arr.concat(collectStrings(obj[key]))
        }
    }
    return arr
}
collectStrings(obj) // ["foo", "bar", "baz"])