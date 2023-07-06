def contains_duplicate(nums):
    check=[]
    for num in nums:
        if num in check:
            print(True)
            return
        else:
            check.append(num)
    print(False)

contains_duplicate([1,2,3,4])