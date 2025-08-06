const fibonacci = function(ok) {
    let fib = [0, 1];
    for (let i = 2; i <= ok; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[ok];
};

// Do not edit below this line
module.exports = fibonacci;
