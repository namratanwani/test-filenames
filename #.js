/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments num - 1 and num - 2, then returning the result.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be computed in
 * the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
    
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisibility by 2, 3, and consecutive integers from 5 to the square root of the number.
 * 
 * @param { integer } num - integer value that is being tested for primality using
 * the provided algorithm.
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
 * @description calculates the factorial of a given number using recursion, returning
 * the result in a single line of code.
 * 
 * @param { integer } num - integer value for which the factorial is calculated.
 * 
 * @returns { integer } the value of the factorial of a given integer, calculated recursively.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, joining them
 * back into a string using the original string's separator.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the input given.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating their elements
 * in a list-like manner.
 * 
 * @param { array } arr1 - 1st array to be merged with the 2nd array in the function.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that contains all elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by repeatedly exchanging adjacent elements
 * if they are in the wrong order, until no more swaps are needed.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of values.
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
     * @description initializes an object with a `name` and `species` property.
     * 
     * @param { string } name - name of the entity for which the constructor is being defined.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, providing a value to the `species` attribute of the object.
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
