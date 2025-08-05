// A palindrome is a string that reads the same way forwards and backwards.
function isPalindrome(str){
    strReversed=str.split('').reverse().join('');
    return str === strReversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 