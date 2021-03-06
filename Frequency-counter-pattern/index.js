
const checkOccurence = (arr1, arr2) => {
    if(arr1.length !== arr2.length)  return false
    let bool = false
    arr1.forEach((el) => {
        if (arr2.find(num => num === (el ^ 2))) {
            bool = true
        } else {
            bool = false
        }
    })
    return bool
}

// console.log(checkOccurence([1, 2, 3], [4, 9]))

/*** using Frequency counter algorithm ***/
const reFactoredcheckOccurence = (arr1, arr2) => {
    if(arr1.length !== arr2.length)  return false
    let arrObj1 = {}
    let arrObj2 = {}
    arr1.forEach(el => {
        arrObj1[el] = (arrObj1[el] + 1) || 1
    })
    arr2.forEach(el => {
        arrObj2[el] = (arrObj2[el] + 1) || 1
    })
    
    for (let key in arrObj1) {
        if (!(key ^ 2 in arrObj2) || arrObj2[key ** 2] !== arrObj1[key]) {
            return false
        } 
    }
    return true
}

// console.log(reFactoredcheckOccurence([1, 2, 3], [4, 9, 1]))

function validAnagram(str1, str2) {
  if(arr1.length !== arr2.length)  return false
  let obj1  = {}
  let obj2  = {}
  
  for(let char of str1) {
    obj1[char] = (obj1[char] + 1) || 1
  }
  for(let char of str2) {
    obj2[char] = (obj2[char] + 1) || 1
  }
  for(let char in obj1) {
    if(!(char in obj2) || obj1[char] !== obj2[char]) {
        return false
    }
  }
  return true
}

function sameFrequency(num1, num2){
  const numStr1 = String(num1)
  const numStr2 = String(num2)
  
  let obj1 = {}
  let obj2 = {}
  
  for(let char of numStr1) {
    obj1[char] = obj1[char] + 1 || 1
  }
  
  for(let char of numStr2) {
    obj2[char] = obj2[char] + 1 || 1
  } 
 for(let char in obj1) {
    if(obj1[char] !== obj2[char]) {
        return false
    }
 }
 return true
}


// console.log(sameFrequency(123, 123))

/*** Duplicate Arguments ***/
function areThereDuplicates() {
    let counterObj = {}
    for(let [_, arg] of Object.entries(arguments)) {
        counterObj[arg] = counterObj[arg] + 1 || 1
    }
    for(let char  in counterObj) {
        if(counterObj[char] > 1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates(1,2,3,3,4,5))

