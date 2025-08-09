/* Convert given bird name to standardized four-letter code  based on rules:
1. If the bird name consists of only one word, uses first four letters
2. If two words, use the first two letters of each word.
3. If more than two, use first letter from first three words and first letter of last word.
*/
function birdCode(name) {
    let words = name.split(" ");
    switch (words.length) {
        case 1:
            return (words[0].slice(0, 4)).toUpperCase();
            break;
        case 2:
            return (words[0].slice(0, 2) + words[1].slice(0, 2)).toUpperCase();
            break;
        default:
            return (words[0][0] + words[1][0] + words[2][0] + words.at(-1)[0]).toUpperCase();
    }
}

console.log(birdCode("Northern Cardinal"));