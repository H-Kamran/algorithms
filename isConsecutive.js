//Consecutive sequence is a set of numbers where each number follows the previous one without any gaps.
function isConsecutive(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  arr3.sort();
  for (let i = 0; i < arr3.length - 1; i++) {
    if (arr3[i] + 1 !== arr3[i + 1]) return false;
  }
  return true;
}

console.log(isConsecutive([2, 6], [4, 3, 5]));
console.log(isConsecutive([5], [7, 6, 8, 6]));
