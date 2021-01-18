//Check if any of the integers less than or equal to sqrt(n) can divide n.
function isPrime(n) {
    if (n == 0) {
        return false;
    }

    var reply = true
    var root = Math.sqrt(n)
    for (let i = 2; (i <= root) && (reply == true); i++) {
        //check starting from 2 since 0 and 1 divide everything
        if (n % i === 0) {
            reply = false
        }
    }
    return reply
}

//attempt at recursion (after finding out about it lol), checks to see if any primes are divisors
function recursive (n) {
    if (n == 0) {
        return false;
    }
    if ((n == 1) || (n == 2)) {
        return true;
    }
    var ans = true
    var root = Math.sqrt(n)
    for (let i = 2; (i <= root) && (ans == true); i++) {
        if ((recursive(i) == true) && (n % i === 0)) {
            ans = false
        }
    }
    return ans
}

// some tests to check
console.log(isPrime(9), "//", recursive(9)) //false
console.log(isPrime(1), "//", recursive(1)) //true
console.log(isPrime(0), "//", recursive(0)) //false
console.log(isPrime(17), "//", recursive(17)) //true
console.log(isPrime(100), "//", recursive(100)) //false
console.log(isPrime(10000000000000), "//", recursive(10000000000000)) //false
console.log(isPrime(-3), "//", recursive(-3)) //true
console.log('is this a prime?', isPrime(12), "//", recursive(12)) //false
console.log(isPrime(35), "//", recursive(35)) //false
console.log(isPrime(23), "//", recursive(23)) //true

//note-to-self: look to see if pollard's p-1 method would work!