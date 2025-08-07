/* Thue-Morse sequence is defined such that each term in the sequence
corressponds to the number of sets bits (1s) in the binary representation of the index.
For example, for n=4,
For index 0, binary representation is 0, number of 1s is 0
For index 1, binary representation is 1, number of 1s is 1
For index 2, binary representation is 10, number of 1s is 1
For index 3, binary representation is 11, number of 1s is 2
For index 4, binary representation is 100, number of 1s is 1
Thus the sequence [0,1,1,2,1]
*/

function getNumberMorse(num) {
    let binary = num.toString(2);
    let numOfOnes = 0;
    for (n of binary) {
        if (n == 1) numOfOnes++;
    }
    return numOfOnes;
}
function thueMorseSequence(n) {
    let sequence = [];
    for (let i = 0; i <= n; i++) {
        sequence.push(getNumberMorse(i));
    }
    return sequence;
}

// let a = 3;
console.log(thueMorseSequence(8)); // [0, 1, 1, 2, 1, 2, 2, 3, 1]