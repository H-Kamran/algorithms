// Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generate all permutations of an array of digits
function getPermutations(arr) {
    if (arr.length === 1) return [arr];

    let perms = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        let remainingPerms = getPermutations(remaining);

        for (let j = 0; j < remainingPerms.length; j++) {
            perms.push([current].concat(remainingPerms[j]));
        }
    }
    return perms;
}

// check if all permutations of number's digits are prime
function isPermutablePrime(number) {
    if (number < 2) return false;

    const digits = number.toString().split('');
    const perms = getPermutations(digits);

    // Use a Set to avoid duplicate numbers (like if digits repeat)
    const uniqueNumbers = new Set(perms.map(p => parseInt(p.join(''), 10)));

    for (const num of uniqueNumbers) {
        if (!isPrime(num)) {
            return false; // If any permutation is not prime, return false
        }
    }
    return true; // All permutations are prime
}

// Examples:
console.log(isPermutablePrime(113)); // true (113, 131, 311 all prime)
console.log(isPermutablePrime(123)); // false
