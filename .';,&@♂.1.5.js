/**
 * @description computes the nth Fibonacci number by recursive application of the
 * formula: `fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be calculated
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime by iteratively testing if
 * it has any factors other than 1 and itself. If none are found, it returns true.
 * 
 * @param { integer } num - 3-digit integer to be tested for primality.
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
 * @description calculates the factorial of a given number using recursive calculation.
 * 
 * @param { integer } num - integer value for which the factorial is calculated.
 * 
 * @returns { integer } the value of `num!`, where `num` is a positive integer.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a string by splitting it into individual characters, reversing
 * their order, and rebuilding the original string using the reversed characters.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the string reversed character by character, joined back into
 * a single string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates its two input arguments into a new array, returning the
 * resulting list.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array in the function.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, comparing adjacent elements and swapping
 * them if the second is greater than the first. This process continues until no more
 * swaps are needed. The function returns the sorted array.
 * 
 * @param { array } arr - 1D array to be sorted by the bubble sort algorithm.
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
     * @description sets properties `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, providing a value that is used to set the `species` property of the
     * resulting object.
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
