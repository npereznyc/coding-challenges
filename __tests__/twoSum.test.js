const twoSum = require('../twoSum')

test('Test with 4 integers', ()=> {
    expect(twoSum([3, 5, 2, 7], 10)).toEqual([0,3])
})

test('Test with 3 integers', ()=> {
    expect(twoSum([3,2,4], 6)).toEqual([1,2])
})

test('Test with 2 integers', ()=> {
    expect(twoSum([3,3], 6)).toEqual([0,1])
})

test('Test with possible multiple orders', ()=> {
    const result = twoSum([3,5,2,6], 8).sort((a, b) => a - b);
    const expected = [0,1].sort((a, b) => a - b);
    expect(result).toEqual(expected);
})