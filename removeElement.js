function removeElement(nums, val) {
    //iterate over array from the end to the beginning so that when I run .splice, the removed elements don't affect the other elements in the array.

        for (let i = nums.length-1; i >=0; i--) {
            console.log(`Iteration ${i + 1}: ${nums}`)
            if (nums[i] === val) {
                nums.splice(i, 1)
            }
        }  

        console.log(nums)
    };

    removeElement([0,1,2,2,3,0,4,2], 2)