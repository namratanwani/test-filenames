/**
 * @description calculates the nth Fibonacci number given its argument `num`. It uses
 * a recursive approach where the function calls itself with smaller arguments until
 * it reaches the base case of `num <= 1`, at which point it returns the value directly.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to generate.
 * 
 * @returns { integer } the nth Fibonacci number, where `n` is the input parameter.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not. It checks the
 * number for divisibility by 2 and 3, and then uses a trial division approach to
 * check for primality based on factors of 5 and its multiples.
 * 
 * @param { integer } num - 2-digit positive integer for which the function checks
 * if it is prime or not.
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
 * case of 0 returning 1 and otherwise returning the product of the current number
 * and the factorial of its predecessor.
 * 
 * @param { integer } num - value of the factorial function being calculated, which
 * determines the recursive calculation performed by the function.
 * 
 * @returns { integer } the value of `num!`.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reverse by splitting it into
 * individual characters, reversing them, and joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating them
 * using the spread operator ... .
 * 
 * @param { array } arr1 - 1st array that will be merged with the 2nd array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays in
 * a single array.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, comparing adjacent elements and swapping
 * them if they are out of order. It repeats this process until no more swaps are needed.
 * 
 * @param { array } arr -
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
     * @description creates an instance of a class by assigning values to its properties
     * `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed and is assigned to
     * the `name` field of the object instance.
     * 
     * @param { string } species - species of an object, which is then assigned to the
     * `species` property of the constructed object.
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
