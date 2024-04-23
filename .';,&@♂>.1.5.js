/**
 * @description computes the nth Fibonacci number by recurrence, with input parameter
 * `num`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be generated.
 * 
 * @returns { integer } a sequence of numbers that follows the Fibonacci sequence.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime or not by iteratively testing
 * if it can be divided by any integer between 2 and sqrt(n) without leaving a remainder.
 * 
 * @param { integer } num - number being tested for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is prime
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
 * @description computes the factorial of a given number by recursively multiplying
 * the previous value by the current number and returning the result.
 * 
 * @param { integer } num - integer value for which the factorial is calculated in
 * the function.
 * 
 * @returns { integer } the factorial of the input number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing the order of those characters, and then rejoining them into a single string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string with the characters of the input string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates two arrays and returns their combined values in a new array.
 * 
 * @param { array } arr1 - 1st array that will be merged with `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the result of the `mergeArrays`
 * function.
 * 
 * @returns { array } a new array that contains all elements from both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by repeatedly switching adjacent elements
 * if they are out of order, until no more swaps are needed.
 * 
 * @param { array } arr - 2D array to be sorted by the bubble sort algorithm.
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
     * @description initializes an object's properties with the given name and species.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, assigning it to the `species` field of the object.
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
