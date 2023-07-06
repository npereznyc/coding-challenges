def isAnagram(s,t):

    sorted_s=sorted(s)
    sorted_t=sorted(t)

    if sorted_s == sorted_t:
        print(True) 
    else:
        print(False) 
    
isAnagram('rat', 'car')