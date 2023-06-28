const containsDuplicate = require('../containsDuplicate')

test('Test with one duplicate', ()=> {
    expect(containsDuplicate([1,2,3,1])).toEqual(true)
});

test('Test with no duplicates', ()=> {
    expect(containsDuplicate([1,2,3,4])).toEqual(false)
});

test('Test with many duplicates', ()=> {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true)
});