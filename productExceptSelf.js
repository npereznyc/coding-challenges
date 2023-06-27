function productExceptSelf(nums) {

    if(nums.length ===1){
        return [NaN]
    }
    let answer = []

    let leftProduct = 1
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftProduct
        leftProduct *= nums[i]
    }

    let rightProduct = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct
        rightProduct *= nums[i]
    }

    for(let i=0; i<answer.length; i++){
        if(answer[i]===-0){
            answer[i]=0
        }
    }
    return answer
}

module.exports = productExceptSelf;