// We encode number to alphabets with different combinations
function encode(encodedArr, s, alphabetArr, encodedElement) {
    // If we achieve to the end of string we add result to encodedArr
    if (s.length === 0) {
        encodedArr.push(encodedElement);
        return;
    }
    // Else we continue encoding
    else {
        // We encode next number
        encodedElement += alphabetArr[s[0] - 1];

        let remainings = s.slice(1);
        encode(encodedArr, remainings, alphabetArr, encodedElement);

        // We remove last added part
        encodedElement = encodedElement.slice(0, -1);

        // We also encode two numbers combined
        if (s[1] !== undefined && s.slice(0, 2) <= 26) {
            encodedElement += alphabetArr[s.slice(0, 2) - 1];
            let remainings = s.slice(2);
            encode(encodedArr, remainings, alphabetArr, encodedElement);
            encodedElement = encodedElement.slice(0, - 1);
        }
    }

}

// We get result of encode function and return number of combinations
function numDecodings(s) {
    let alphabetArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    let encodedArr = [];
    let encodedElement = "";
    encode(encodedArr, s, alphabetArr, encodedElement);
    return encodedArr.length;
}

console.log(numDecodings("12321")); // [ 'ABCBA', 'ABCU', 'AWBA', 'AWU', 'LCBA', 'LCU' ]