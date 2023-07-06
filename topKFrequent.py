def top_k_frequent(nums, k):
    #empty object to keep track of how many times each integer appears in the array
    #empty array to hold result
    #iterate over array. check for current integer. if it's in the object, increment it's number. if it's not, add it.
    #sort the object key:value pairs (arrays) in descending order
    #iterate from 0 to k and on each iteration, push the current value into the result array

    result = []
    obj = {}

    for num in nums:
        if obj.get(num):
            obj[num]+=1
        else:
            obj[num]=1
    
    sorted_list = sorted(obj.items(), key=lambda x:x[1], reverse=True)
    #obj.items() returns a list of (key, value) pairs from the dictionary obj. 
    #sorted(...) sorts this list. It takes two optional arguments: key, a function that returns the value to sort by, and reverse, a boolean that specifies whether to sort in ascending (the default) or descending order.
    #key=lambda x: x[1] specifies that the sorting should be based on the second element of each pair (the value), and reverse=True specifies that the sorting should be in descending order. 
    for i in range(k):
        result.append(sorted_list[i][0])

    print(result) 

top_k_frequent([1,1,1,2,2,3], 2)