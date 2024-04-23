/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number, calculated recursively.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by recursively checking if its
 * factors are within a certain range, and then verifying that it does not have any
 * other factors within that range.
 * 
 * @param { integer } num - 4-digit integer value to be tested for primality.
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
 * @description calculates the factorial of a given integer `num`. It recursively
 * calls itself with the input subtracted by 1 until it reaches the base case of `num
 * = 0`, where it returns the result directly.
 * 
 * @param { integer } num - integer value that is being factored into its factorial
 * by the function.
 * 
 * @returns { integer } the value of the factorial of a given integer, calculated recursively.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing their order, and joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string with the characters of the original input reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates two input arrays by returning a new array with all
 * elements from both arrays.
 * 
 * @param { array } arr1 - first array to be merged with the second array passed as
 * `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the
 * `mergeArrays` function.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by repeatedly exchanging adjacent elements
 * if they are out of order based on a comparison function.
 * 
 * @param { array } arr - 1D array whose elements are being sorted using the bubble
 * sort algorithm.
 * 
 * @returns { array } a sorted array of integers.
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
     * @description initializes an object with two properties: `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed, which is assigned
     * to the `name` field of the object instance created by the constructor.
     * 
     * @param { string } species - species of the object being constructed in the constructor
     * function, and is assigned to a member variable called `species`.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs an animal sound to the console.
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
