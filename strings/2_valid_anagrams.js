// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false


function validAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0); // one slot per letter a-z

    for (let i = 0; i < s.length; i++) {
        // convert each character to an index 0-25 using char codes
        freq[s.charCodeAt(i) - 97]++;   // +1 for s's letter
        freq[t.charCodeAt(i) - 97]--;   // -1 for t's letter
    }

    // if s and t were true anagrams, every slot should be back to exactly 0
    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0) return false;
    }

    return true;





}





console.log(validAnagram("anagram", "nagaram"));
















