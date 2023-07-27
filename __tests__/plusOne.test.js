const plusOne = require('../plusOne')

test('Test with three integers', ()=> {
    expect(plusOne([1,2,3])).toEqual([1,2,4])
});

test('Test with four integers', ()=> {
    expect(plusOne([4,3,2,1])).toEqual([4,3,2,2])
});

test('Test with one integer', ()=> {
    expect(plusOne([9])).toEqual([1,0])
});