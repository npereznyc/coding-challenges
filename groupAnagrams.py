def group_anagrams(strs):
    # instantiate empty dictionary - sorted elements will be keys. array of unsorted elements that match will be value
    # iterate through array
    # sort each element in the array
    # check if sorted element is in dictionary
    # if it is, push the original element into the value array
    # if it's not, add the sorted element to the dictionary

    strs_obj={}
    for str in strs:
        sorted_str=''.join(sorted(str))
        if strs_obj.get(sorted_str):
            strs_obj[sorted_str].append(str)
        else:
            strs_obj[sorted_str]= [str]
    print(list(strs_obj.values()))


group_anagrams(["eat","tea","tan","ate","nat","bat"])