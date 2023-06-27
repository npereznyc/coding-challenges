const productExceptSelf = require('../productExceptSelf')

test('Test with positive numbers', ()=> {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
});

test('Test with negative numbers and zero', ()=>{
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0])
});

test('Test with one element', ()=> {
    expect(productExceptSelf([1])).toEqual([NaN])
});

test('Test with two elements', ()=> {
    expect(productExceptSelf([1,2])).toEqual([2,1])
})