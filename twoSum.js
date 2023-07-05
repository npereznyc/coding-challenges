// Given an array of integers (nums) and an integer (target), return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target){
    //instantiate array (check) with nums[0]
    //loop over nums, starting at index 1. If check[0]+nums[i]==target, push nums[i] into check. Return check.
    //else: continue
    let numsMap= new Map()
    for(let i=0; i<nums.length; i++){
       let x = target-nums[i]
       if (numsMap.has(x)) {
           return [numsMap.get(x),i]
       }
       numsMap.set(nums[i], i)
    } 
}

twoSum([2,7,11,15], 9)

module.exports = twoSum;