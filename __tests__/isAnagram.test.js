const isAnagram = require('../isAnagram')

test('Test with anagram', ()=> {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true)
});

test('Test without anagram', ()=> {
    expect(isAnagram('rat', 'car')).toEqual(false)
});