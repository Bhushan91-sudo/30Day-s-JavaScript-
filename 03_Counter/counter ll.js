/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 

Constraints:

-1000 <= init <= 1000
0 <= calls.length <= 1000
calls[i] is one of "increment", "decrement" and "reset"
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};

// Example usage:
const calls = ["increment", "reset", "decrement"];
const result = [];
const counter = createCounter(5);

calls.forEach(call => {
    switch (call) {
        case "increment":
            result.push(counter.increment());
            break;
        case "decrement":
            result.push(counter.decrement());
            break;
        case "reset":
            result.push(counter.reset());
            break;
        default:
            break;
    }
});

console.log(result); // Output: [6, 5, 4]

