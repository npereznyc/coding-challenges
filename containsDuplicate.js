// Given an integer array (nums), return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
    //instantiate empty array (check) to keep track of integers
    //iterate over nums, checking if the number at the current index is already in the check array
    //if it is, return true. If not, return false.

    let check = []
    for(let i=0; i<nums.length; i++){
        if(check.includes(nums[i])){
            return true
        } else {
            check.push(nums[i])
        }
    }
    return false
}

module.exports = containsDuplicate;