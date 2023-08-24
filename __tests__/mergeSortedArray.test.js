const mergeSortedArray = require('../mergeSortedArray')

test('Test with 3 elements per array', ()=> {
    expect(mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3)).toEqual([1,2,2,3,5,6])
});

test('Test with empty second array', ()=> {
    expect(mergeSortedArray([1],1,[],0)).toEqual([1])
});

test('Test with empty first array', ()=> {
    expect(mergeSortedArray([0],0,[1],1)).toEqual([1])
});