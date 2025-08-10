function multiplyMatrices(arr1, arr2) {
  let resultArr = [];
  if (arr1[0].length !== arr2.length) {
    throw new Error("Matrix are not compatible for multiplication");
  }

  // i represent first level of arr1
  for (let i = 0; i < arr1.length; i++) {
    let sum = 0;
    let secondDegreeArr = [];
    // j represent second level of arr2
    for (let j = 0; j < arr2[i].length; j++) {
      // k represent first level of arr2
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      secondDegreeArr.push(sum);
      sum = 0;
    }
    resultArr.push(secondDegreeArr);
    secondDegreeArr = [];
  }
  return resultArr;
}

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let arr2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

console.log(multiplyMatrices(arr1, arr2));
