
function plusOne(digits) {
    //convert array to string and get rid of commas:
    string=digits.toString().replaceAll(',','')
    //convert string to integer and increment by one:
    int=parseInt(string)+1
    //convert integer to string
    intString=int.toString()
    //convert string to array and map over that array, converting each string element to a number:
    result=intString.split('').map((item)=>parseInt(item,10))
    
    return result
}
plusOne([1,2,3])

module.exports = plusOne;