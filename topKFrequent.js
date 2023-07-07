function topKFrequent(nums, k){
    let result = []
    let obj = {}

    for(let i=0; i<nums.length; i++){
        let num=nums[i]
        if(obj[num]){
            obj[num]++
        } else {
            obj[num] = 1
        }
    }
    let sorted = Object.entries(obj).sort((a,b)=> b[1]-a[1])
    // The Object.entries() method in JavaScript returns an array of a given object's own[key, value] pairs.
    // .sort() is a JavaScript array method that sorts the elements of an array in-place and returns the array.
    // (a, b) => b[1] - a[1] is an arrow function that is passed to the sort method as a comparator function. This function is used to define the sort order.
    // a and b within the arrow function represent two elements being compared. In your case, since you're sorting an array of arrays, a and b are arrays themselves.
    // b[1] - a[1] means that the sort order is determined by subtracting the second element of array a from the second element of array b.
    for(let i=0; i<k; i++){
        result.push(parseInt(sorted[i][0]))
    }
    return result
}

topKFrequent([1,1,1,2,2,3], 2)

module.exports = topKFrequent;