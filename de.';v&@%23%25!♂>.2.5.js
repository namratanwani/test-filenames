/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be calculated,
 * with values less than or equal to 1 returning the corresponding number directly
 * and values greater than 1 computing the sequence recursively.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks if a given number is prime by iterating through a series of
 * logical tests, ultimately returning `true` if the number is prime and `false` otherwise.
 * 
 * @param { number } num - 1-based integer value that is being tested for primality
 * using the provided algorithm.
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
 * @description calculates the factorial of a given number recursively, with base
 * case of 0 returning 1 and general case returning the product of the number and its
 * factorial of the previous value.
 * 
 * @param { number } num - 2-adic valuation of the result of the recursive call to `factorial`.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting
 * it into individual characters, reversing their order, and joining them back into
 * a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed and joined back into a single string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating the elements
 * of each array.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array passed as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function
 * `mergeArrays`.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, comparing adjacent elements and swapping
 * them if they are in the wrong order (based on a comparison operator).
 * 
 * @param { array } arr - 1D array to be sorted by the bubble sort algorithm.
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
     * @description establishes the properties of an object upon creation.
     * 
     * @param { string } name - name of the object being constructed and is assigned to
     * the `name` property of the object.
     * 
     * @param { string } species - species of the object being constructed in the constructor
     * function, and is assigned to the `species` field of the object.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description consoles logs the string "Animal sound".
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
