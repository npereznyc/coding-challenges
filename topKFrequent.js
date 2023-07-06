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
    for(let i=0; i<k; i++){
        result.push(parseInt(sorted[i][0]))
    }
    return result
}

topKFrequent([1,1,1,2,2,3], 2)

module.exports = topKFrequent;