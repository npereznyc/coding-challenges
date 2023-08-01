function addBinary(a,b) {
    //convert binary strings to numbers
    //add numbers
    //convert sum to binary string

    let numberA=BigInt('0b'+ a)
    let numberB=BigInt('0b'+ b)
    console.log(numberA, numberB)

    let sum=numberA+numberB
    let binarySum=sum.toString(2)

    console.log(binarySum)
    return binarySum
}

addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011')

module.exports = addBinary;