//A cousing prime is a pair of  prime numbers whose difference is 4
// [3,7], [7,11], [13,17]

function isPrime(num) {
    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function nthCousinPrime(n) {
    let nthcousingPrimePair = [];
    let i = 3;
    while (n > 0) {
        if (isPrime(i) && isPrime(i + 4)) {
            nthcousingPrimePair=[i,i+4];
            n--;
        }
        i++;
    }
    return nthcousingPrimePair;
}

console.log(nthCousinPrime(4));