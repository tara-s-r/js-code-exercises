//factorial of given number
function factorial (n) {
    var total = 1
    for (let i = 1; i <= n; i++) {
        total = total * i 
    }
    return total
}

//a fun extra, combinations
function choose (n, r) {
    return total = (factorial(n) / (factorial(n-r) * factorial(r)))
}

//tests
console.log(factorial(52)/Math.pow(factorial(13), 4))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(6))

//factorial without using loops (challege given to me) - didn't know it was a thing
function recursive (n) {
    if ((n == 0) || (n == 1)) {
        return 1
    }
    return n * recursive((n-1))
}

//tests for the recursive version
console.log(recursive(0))
console.log(recursive(1))
console.log(recursive(2))
console.log(recursive(6))