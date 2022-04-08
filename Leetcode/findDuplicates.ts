function findDuplicate(nums: number[]): number {
    let sortedNums = nums.sort()
    
    for(let i=0; i<sortedNums.length; i++) {
        if(sortedNums[i] === sortedNums[i+1]) {
            return sortedNums[i]
        }
    }
};