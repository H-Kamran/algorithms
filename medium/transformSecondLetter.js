//Converting second letter to uppercase
function transformSecondLetter(sentence) {
  sentenceArray = sentence.split(" ");
  let resultArr = sentenceArray.map((word) => {
    if (word.length >= 2) {
      return word[0] + word[1].toUpperCase() + word.slice(2);
    }
    return word;
  });
  return resultArr.join(" ");
}

console.log(transformSecondLetter("this is a given sentence"));
