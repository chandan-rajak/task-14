// 1. Filter out negative numbers
function filterNegatives(arr) {
    return arr.filter(num => num >= 0);
}
console.log("Filtered non-negative:", filterNegatives([1, -2, 3, -4, 5]));

// 2. Get difference from 13, return double the absolute difference if number > 13
function diffFrom13(n) {
    return n > 13 ? 2 * Math.abs(n - 13) : 13 - n;
}
console.log("Difference from 13 (input 10):", diffFrom13(10));
console.log("Difference from 13 (input 20):", diffFrom13(20));

// 3. Fibonacci series
function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log("Fibonacci series (10 terms):", fibonacciSeries(10));

// 4. Sum of multiples of 3 and 5 under a given number
function sumMultiplesOf3And5(limit) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log("Sum of multiples of 3 and 5 under 1000:", sumMultiplesOf3And5(1000));

// 5. Cube of a number using Function object
const cube = new Function('n', 'return n * n * n;');
console.log("Cube of 3:", cube(3));