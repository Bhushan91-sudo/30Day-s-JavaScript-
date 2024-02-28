function createHelloWorld() {
    return function() {
        return "Hello World"
    };
}

const f = createHelloWorld();
console.log(f());

console.log(f({}, null, 42)); //Output: "Hello World"