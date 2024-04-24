/**
 * @description calculates the nth Fibonacci number by recursion, using the previous
 * two numbers to calculate the current number.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to generate, and
 * its value determines the number of terms to include in the sum.
 * 
 * @returns { integer } the nth Fibonacci number for a given integer `num`.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by performing a series of
 * tests, including checking for divisibility by 2 and 3, and then using a trial
 * division method to check for divisibility by other numbers.
 * 
 * @param { integer } num - 2-digit positive integer to be tested for primality.
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
 * @description calculates the factorial of a given number by recursively calling
 * itself with the input minus 1 until it reaches 0, and then returns the result.
 * 
 * @param { integer } num - 0-based integer value for which the factorial is being calculated.
 * 
 * @returns { integer } the value of the given integer multiplied by the factorial
 * of its integer-1.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing their order, and reassembling them into a new string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed and joined back into a single string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description merges two arrays into a single array by concatenating them with the
 * `...` operator.
 * 
 * @param { array } arr1 - 1st array to be merged with the 2nd array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively compares adjacent elements in an array, swapping them if
 * they are out of order based on a comparison operator.
 * 
 * @param { array } arr - 2D array to be sorted.
 * 
 * @returns { array } a sorted array.
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
     * @description creates an instance of a class by assigning values to its properties,
     * `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed in the constructor
     * function.
     * 
     * @param { string } species - species of the object being constructed, and is used
     * to store that information as a property of the `constructor` function.
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
