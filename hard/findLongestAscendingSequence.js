// Return length of the longest ascending sequence
function findLongestAscendingSequence(arr) {
    let length = 0;
    let lengthList = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            length++;
        }
        else {
            length++;
            lengthList.push(length);
            length = 0;
        }
    }
    return Math.max(...lengthList);
}

console.log(findLongestAscendingSequence([1, 2, 3, 4, 3, 2, 3, 4, 5])); //4