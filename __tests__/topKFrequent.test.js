const topKFrequent = require('../topKFrequent')

test('Test', ()=> {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2])
})

test('Test with one integer', ()=> {
    expect(topKFrequent([1], 1)).toEqual([1])
})

test('Test with 3 frequent numbers', ()=> {
    expect(topKFrequent([1,1,1,1,2,2,2,3,3,4], 3)).toEqual([1,2,3])
})

