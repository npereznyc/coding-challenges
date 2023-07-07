def longest_consecutive(nums):
    num_set=set(nums)
    longest=0

    for num in num_set:
        if num-1 not in num_set:
            current_num=num
            current_sequence=1
        
        while current_num+1 in num_set:
            current_num+=1
            current_sequence+=1
        
        longest=max(longest, current_sequence)

    return longest