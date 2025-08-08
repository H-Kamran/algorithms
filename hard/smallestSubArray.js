/* Find the length of the smallest subarray with sum equal to given value
For example, for the array [5, 4, 5, 7, 8, 5] with a target sum of 15
The possible subarrays are [5, 5, 5] with a length of 3 and [7,8] with a length of 2.
*/

// Recursive function to find all subarrays that sum up to 'x'
function getSubArrays(arr, x, sum, subArray, subArrayList) {
    for (let i = 0; i < arr.length; i++) {
        // Add current element to sum and temporary subArray
        sum += arr[i];
        subArray.push(arr[i]);

        // If current sum is less than target, explore further subarrays recursively
        if (sum < x && arr.length > 1) {
            let remainingArr = arr.slice(i + 1);
            getSubArrays(remainingArr, x, sum, subArray, subArrayList);
        }
        // If current sum exactly equals target, add a copy of the current subarray to the final list
        else if (sum === x) {
            subArrayList.push(subArray.slice());
        }

        // Remove current element from sum and temporary subArray
        sum -= arr[i];
        subArray.pop();
    }
}

function smallestSubArray(arr, x) {
    let sum = 0;
    let subArray = [];
    let subArrayList = [];
    getSubArrays(arr, x, sum, subArray, subArrayList);

    // If no subarrays found, return 0
    if (subArrayList.length === 0) return 0;

    // Find the length of the shortest subarray in the list
    let minLength = subArrayList[0].length;
    for (element of subArrayList) {
        if (element.length < minLength) minLength = element.length;
    }

    return minLength;
}

console.log(smallestSubArray([2, 3, 1, 2, 4, 3], 7)); // 2