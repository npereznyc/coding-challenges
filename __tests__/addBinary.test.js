const addBinary = require('../addBinary')

test('Test with small binaries', ()=> {
    expect(addBinary("11", "1")).toEqual('100')
});

test('Test with larger binaries', ()=> {
    expect(addBinary("1010", "1011")).toEqual("10101")
});

// test('Test with many duplicates', ()=> {
//     expect(addBinary([1,1,1,3,3,4,3,2,4,2])).toEqual(true)
// });