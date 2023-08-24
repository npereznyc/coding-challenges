


function mergeSortedArray(nums1, m, nums2, n){
    //nested loop iterating over both arrays
    //if nums1[i] = nums2[j], use splice to add value from 2 into 1
    if (nums1[0] ===0){
        nums1.splice(0,1)
    }
    nums1=nums1.filter(Number)
    console.log('nums1: ', nums1)
    for(let i = 0; i<m-1; i++) {
        nums1.splice(n,n)
        
        for(let j=0; j<=n-1; j++){
            console.log('i=', nums1[i], 'j=', nums2[j])
            if(nums1[i] === nums2[j]){
                nums1.splice(i, 0, nums2[j])
                nums2.splice(j,1)
                console.log('nums1: ', nums1, 'nums2: ', nums2)
            }
        }
    }
    nums1.push(...nums2)

    console.log(nums1)
}

mergeSortedArray([1,0], 1, [2], 1)

module.exports = mergeSortedArray;