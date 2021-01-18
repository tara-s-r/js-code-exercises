//Check if any of the integers less than or equal to sqrt(n) can divide n.
function isPrime(n) {
    if (n == 0) {
        return false;
    }

    var reply = true
    var root = Math.sqrt(n)
    for (let i = 2; (i <= root) && (n % i === 0); i++) {
        //check starting from 2 since 0 and 1 divide everything
        reply = false
    }
    return reply
}

// some tests to check
console.log(isPrime(1)) //true
console.log(isPrime(0)) //false
console.log(isPrime(17)) //true
console.log(isPrime(100)) //false
console.log(isPrime(10000000000000)) //false
console.log(isPrime(-3)) //true
console.log('is this a prime?', isPrime(12)) //false

//attempt at recursion (after finding out about it lol), checks to see if any primes are divisors
function recursive (n) {
    if (n == 0) {
        return false;
    }
    if ((n == 1) || (n == 2)) {
        return true;
    }
    var ans = true
    for (let i = 2; (recursive(i) == true) && (n % i === 0); i++) {
        ans = false
    }
    return ans
}

// some tests to check
console.log(recursive(1)) //true
console.log(recursive(0)) //false
console.log(recursive(17)) //true
console.log(recursive(100)) //false
console.log(recursive(10000000000000)) //false
console.log(recursive(-3)) //true
console.log('is this a prime?', recursive(12)) //false

//note-to-self: look to see if pollard's p-1 method would work!