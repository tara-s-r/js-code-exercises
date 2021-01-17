//Check if any of the integers less than or equal to sqrt(n) can divide n.
function isPrime(n) {
    if (n == 0) {
        return false;
    }

    var reply = true
    var root = Math.sqrt(n)
    for (let i = 2; (i <= root) && (n % i === 0); i++) {
        //check starting from i+2 since 0 and 1 divide everything
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