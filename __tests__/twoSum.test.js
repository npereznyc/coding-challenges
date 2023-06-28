const twoSum = require('../twoSum')

test('Test with 4 integers', ()=> {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
})

test('Test with 3 integers', ()=> {
    expect(twoSum([3,2,4], 6)).toEqual([1,2])
})

test('Test with 2 integers', ()=> {
    expect(twoSum([3,3], 6)).toEqual([0.1])
})