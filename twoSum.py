def twoSum(nums,target):
    nums_dict={}
    for i in range(len(nums)):
        x=target-nums[i]
        if nums_dict.get(x) is not None:
            print([nums_dict[x], i]) 
        nums_dict[nums[i]] = i

twoSum([2,7,11,15], 9)