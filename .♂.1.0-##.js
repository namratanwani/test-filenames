/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments num - 1 and num - 2, and returning their sum.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to generate, with
 * values between 1 and 0 inclusive resulting in the recursive formula's computation.
 * 
 * @returns { integer } a sequence of numbers that follows the Fibonacci pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively testing whether
 * it can be divided by any integer between 5 and the square root of the number without
 * finding a divisor. If no such divisor is found, the number is prime; otherwise,
 * it is not prime.
 * 
 * @param { number } num - integer value that is being tested for primality using the
 * given algorithm.
 * 
 * @returns { boolean } a boolean indicating whether the input number is prime or not.
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
 * @description computes the factorial of a given number using recursion.
 * 
 * @param { integer } num - integer value for which the factorial is to be calculated.
 * 
 * @returns { integer } the value of the factorial of a given number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description transforms a given string by reversing its characters and reconstructing
 * it into a new string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that is the reversal of its input argument.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating their elements
 * in a single pass.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array.
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
 * @description sorts an array of elements by comparing adjacent elements and swapping
 * them if they are in the wrong order, repeatedly iterating through the array until
 * no more swaps are needed.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of elements.
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
     * @description sets properties `name` and `species` for an object instance, initializing
     * its state.
     * 
     * @param { string } name - name of the entity being constructed.
     * 
     * @param { string } species - species of the object being constructed in the constructor
     * function, and is used to assign the appropriate value to the `species` field of
     * the object.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs the message "Animal sound" to the console.
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
