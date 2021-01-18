//return the nth fibonacci number, index starts at 0
function fib(n) {
    var a = 0
    var b = 1
    for (let i = 1; i <= n; i++) {
        var total = a+b
        b = a
        a = total
    }
    return a
}

//tests
console.log(fib(0)) // 0
console.log(fib(1)) // 1
console.log(fib(10)) // 55
console.log(fib(20)) // 6765

//next step: try the recursive version! this was another challenge given to me by my mentor
function fibbing(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    return fibbing(n-1) + fibbing(n-2)
}

//more tests
console.log(fibbing(0)) // 0
console.log(fibbing(1)) // 1
console.log(fibbing(10)) // 55
console.log(fibbing(20)) // 6765