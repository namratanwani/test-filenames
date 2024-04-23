/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute,
 * determining the corresponding value to return from the recursive function calls.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description verifies whether a given number is prime or not by checking if it is
 * equal to 1, if it is less than 3, or if it is divisible by 2 or 3. If the number
 * is not divisible by any of these factors, the function checks for divisibility by
 * numbers between 5 and the square root of the input number using trial division.
 * 
 * @param { integer } num - 4-digit positive integer for which the function checks
 * if it is prime or not.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is prime.
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
 * @description computes the factorial of a given number recursively, with base case
 * handling zero values and recursive calculation for non-zero values.
 * 
 * @param { integer } num -
 * 
 * @returns { integer } the factorial of the input number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverts a given string by splitting it into individual characters,
 * reversing their order, and rebuilding the original string using the joined characters.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description takes two arrays as input and returns a new array that is the
 * concatenation of the elements of both arrays.
 * 
 * @param { array } arr1 - first array that is being merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array and compares adjacent elements, swapping
 * them if they are out of order based on their values.
 * 
 * @param { array } arr - 2D array to be sorted.
 * 
 * @returns { array } a sorted array of integers based on the provided input.
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
     * @description creates an object with name and species properties.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the
     * `constructor` function, and is stored as a property of the object.
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
