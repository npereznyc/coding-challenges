// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s,t){
    //convert string to array
    //sort array
    //convert back to string
    //if the strings match, return true. If not, return false.

    let sArr=s.split("")
    let tArr=t.split("")

    if(sArr.sort().toString('') === tArr.sort().toString('')){ //either toString() or join() works here
        return true
    } else {
        return false
    }
}

isAnagram('anagram', 'nagaram')

module.exports = isAnagram;