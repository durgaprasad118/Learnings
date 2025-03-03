function xy() {
    return 1;
}
//Function to add two numbers
function add(a, b) {
    let res = a + b;
    return res;
}

/*
 *
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
*/
function processNumbers(numbers) {
    let res = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isEven(numbers[i])) {
            res.push(multiply(numbers[i], 2));
        } else {
            res.push(add(numbers[i], 5));
        }
    }
    return res;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let processedNumbers = processNumbers(numbers);

console.log('Original numbers:', numbers);
console.log('Processed numbers:', processedNumbers);

function processStrings(strings) {
    let result = [];
    for (let i = 0; i < strings.length; i++) {
        let result = strings[i].toUpperCase();
        console.log('Processing string:', result);
    }
    return result;
}

let strings = ['apple', 'banana', 'cherry'];
let processedStrings = processStrings(strings);

console.log('Processed strings:', processedStrings);
Hello;
