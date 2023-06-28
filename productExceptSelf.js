// Given an integer array (nums), return an array (answer) such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(nums) {

    if(nums.length ===1){
        return [NaN]
    }
    let answer = []

    let leftProduct = 1
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftProduct
        console.log(answer)
        leftProduct *= nums[i]
    }

    let rightProduct = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct
        rightProduct *= nums[i]
    }

    for(let i=0; i<answer.length; i++){
        if(answer[i]===-0){
            answer[i]=0
        }
    }
    return answer
}

module.exports = productExceptSelf;