/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - integer value for which the Fibonacci sequence is being
 * calculated.
 * 
 * @returns { integer } a sequence of numbers that follows the Fibonacci sequence pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively testing it
 * against all possible divisors, up to and including the square root of the number,
 * without relying on any precomputed results or complex algorithms.
 * 
 * @param { number } num - number being tested for primality.
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
 * @description computes the factorial of a given number recursively, using a single
 * line of code to perform the calculation.
 * 
 * @param { integer } num - 2nd argument to the function, which is used as the base
 * for calculating the factorial value.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting
 * it into individual characters, reversing their order, and rearranging them back
 * into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the input argument.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating its
 * elements in order.
 * 
 * @param { array } arr1 - 1st array to be merged with the 2nd array in the function
 * `mergeArrays`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the
 * `mergeArrays` function.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by comparing adjacent elements and swapping
 * them if they are in the wrong order, repeated until no more swaps are needed.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of integers based on the bubble sort algorithm.
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
     * @description initializes an object with two attributes: `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, and is stored as a property of the object.
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
