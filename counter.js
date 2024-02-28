function counter(n) {
    return function() {
        return n++;
    };
}

const myCounter = counter(10);

console.log(myCounter()); //Output: 10
console.log(myCounter()); //Output: 11
console.log(myCounter()); //Output: 12
