// Euler's Totient function counts the number of integers 1 and n, where each number and n only share 1 as a common factor
function eulerTotient(n) {
    let factorList = [];
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) factorList.push(i);
    }

    // 1 integer share 1 as a common factor with n so it added directly
    let count = 1;
    let bool = true;
    for (let i = 2; i <= n; i++) {
        bool=true;
        for (let j = 0; j < factorList.length; j++) {
            if (i % factorList[j] == 0) {
                bool = false;
            }
        }
        if (bool) {
            console.log(i);
            count++;
        }
    }
    return count;
}

console.log(eulerTotient(10));