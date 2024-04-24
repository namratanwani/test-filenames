/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be computed
 * by the function.
 * 
 * @returns { integer } a sequence of numbers that follow the Fibonacci pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by checking if it
 * is smaller than 1, divisible by 2 or 3, and if none of its factors are found through
 * a trial division method.
 * 
 * @param { integer } num - integer to be tested for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is prime
 * or not.
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

/**
 * @description calculates the factorial of a given number by recursively multiplying
 * it by the factorial of the preceding number until reaching 0 or the starting number.
 * 
 * @param { integer } num - positive integer value that is multiplied by its proper
 * factorial to produce the result of the `factorial` function.
 * 
 * @returns { integer } the value of the factorial of a given number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * then reversing the order of those characters, and finally joining them back into
 * a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed, represented as a concatenation
 * of its individual characters in reverse order.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating their
 * elements in a list-like manner.
 * 
 * @param { array } arr1 - 1st array that will be merged with the 2nd array passed
 * as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the 1st array in the function
 * `mergeArrays`.
 * 
 * @returns { array } a concatenation of the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively compares adjacent elements in an array, swapping them if
 * they are out of order based on a specified comparison function.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of numbers.
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

class Animal {
    /**
     * @description initializes an object with a `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, and is assigned to the `species` property of the object.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs the string "Animal sound" to the console.
     */
    makeSound() {
        console.log("Animal sound");
    }
}

const myAnimal = new Animal("Leo", "Lion");

console.log(fibonacci(10));
console.log(isPrime(17));
console.log(factorial(5));
console.log(reverseString("hello"));
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(bubbleSort([5, 3, 8, 1, 2]));
console.log(myAnimal);
myAnimal.makeSound();
