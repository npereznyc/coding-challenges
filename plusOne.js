
function plusOne(digits) {
    //convert array to string
    //convert string to integer
    //increment integer by one
    //convert integer to string
    //convert string to array
    string=digits.toString().replaceAll(',','')
    int=parseInt(string)+1
    intString=int.toString().replaceAll('',',')
    console.log(intString)
    result = intString.split()
}
plusOne([1,2,3])

module.exports = plusOne;