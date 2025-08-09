/* Function finds the shortest transformation sequence from a start word to an end word.
1. Only one letter can be changed at a time.
2. Each new word, including end word, must be presented in worlist.*/

// All possible one letter transformations for a word
function findListOfTransformations(beginWord, wordList) {
    let possibleTransformations = [];
    for (element of wordList) {
        let difference = 0;
        for (let i = 0; i < beginWord.length; i++) {
            if (beginWord[i] !== element[i]) {
                difference++;
                if (difference > 1) break;
            }
        }
        if (difference === 1) possibleTransformations.push(element);
    }
    return possibleTransformations;
}

// Finds all paths, Depth-First Search.
function findSequences(beginWord, endWord, wordList, sequenceList, sequence, visited) {
    if (beginWord === endWord) {
        sequenceList.push([...sequence]);
        return;
    }

    let transformations = findListOfTransformations(beginWord, wordList);

    for (let nextWord of transformations) {
        if (!visited.has(nextWord)) {
            visited.add(nextWord);
            sequence.push(nextWord);

            findSequences(nextWord, endWord, wordList, sequenceList, sequence, visited);

            visited.delete(nextWord);
            sequence.pop();
        }
    }
}

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    let sequenceList = [];
    let sequence = [beginWord];
    let visited = new Set([beginWord]);


    findSequences(beginWord, endWord, wordList, sequenceList, sequence, visited);

    let shortPath = sequenceList[0].length;
    for (element of sequenceList) {
        if (element.length < shortPath) shortPath = element.length;
    }
    return shortPath;
}

// Find directly shortest path, it search level by level, Breadth-First Search.
function ladderLength2(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    let queue = [[beginWord, 1]]; // [word, steps]
    let visited = new Set([beginWord]);

    while (queue.length > 0) {
        let [word, steps] = queue.shift();

        if (word === endWord) return steps;

        for (let nextWord of findListOfTransformations(word, wordList)) {
            if (!visited.has(nextWord)) {
                visited.add(nextWord);
                queue.push([nextWord, steps + 1]);
            }
        }
    }
    return 0;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("lead", "gold", ["load", "goad", "bead"]));
console.log(ladderLength2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength2("lead", "gold", ["load", "goad", "bead"]));