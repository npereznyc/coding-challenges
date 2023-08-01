
function plusOne(digits) {
    //convert array to string and get rid of commas:
    string=digits.toString().replaceAll(',','')
    console.log('string: ', string)
    
    //convert string to integer and increment by one:
    num=BigInt(string)+1n
    console.log('num: ', num)
    
    //convert integer to string
    numString=num.toString()
    console.log('numString: ', numString)
    
    //convert string to array and map over that array, converting each string element to a number:
    result=numString.split('').map((item)=>parseInt(item))

    return result
}
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

module.exports = plusOne;

//This solution only passes 71 / 111 testcases. Does not work with much larger numbers. For example:
//digits=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] 
//should return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4] 
//but is returning [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]

