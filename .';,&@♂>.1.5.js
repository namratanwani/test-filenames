/**
 * @description computes the nth Fibonacci number by recurrence, where the previous
 * two numbers are used to compute the current number.
 * 
 * @param { number } num - 0-based index of the Fibonacci number to be computed, with
 * values ranging from 0 to 1 inclusive, which determines the output value returned
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisors, primality based on small numbers, and exhaustive search.
 * 
 * @param { number } num - 4-digit integer to be tested for primality using the
 * provided algorithm.
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
 * @description calculates the factorial of a given number by recursively calling
 * itself with the input value minus 1, until reaching 0, when it returns 1.
 * 
 * @param { integer } num - 0-based integer value for which the factorial is calculated.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting,
 * reversing, and joining back the characters.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that is the reverse of the input string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description takes two arrays as input and returns a new array that is the
 * concatenation of the elements of both arrays.
 * 
 * @param { array } arr1 - 1st array that will be merged with the 2nd array passed
 * as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array and compares adjacent elements, swapping
 * them if they are in the wrong order.
 * 
 * @param { array } arr - 1D array to be sorted by the bubble sort algorithm.
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
     * @description sets the `name` and `species` properties of an object to the input
     * parameters provided in the constructor call.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of an object that is being constructed, and
     * it is used to set the `species` property of the resulting object.
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
