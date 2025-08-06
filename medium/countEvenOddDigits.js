function countEvenOddDigits(numStr) {
  let arr = numStr.split("");
  let evenCounter = 0,
    oddCounter = 0;
  for (num of arr) {
    if (num % 2 == 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }
  return [evenCounter, oddCounter];
}

console.log(countEvenOddDigits("1234567890"));
