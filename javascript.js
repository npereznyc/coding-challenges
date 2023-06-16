//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

//instantiate empty array for result
//instatntiate empty object
//loop over arry and populate object
//Use Object.entries().sort to sort the key/value pairs in the object.


function frequent(nums, k){
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
    for(let i=0; i<k; i++){
        result.push(sorted[i][0])
    }
    console.log(result)
}

frequent([1,1,1,2,2,3], 2)