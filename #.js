/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * input values `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be computed
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
    
}

/**
 * @description checks whether a given number is prime by performing a series of
 * tests, including checking for divisibility by 2 and 3, and checking if there are
 * any integers between 1 and the square root of the number that divide it. If none
 * of these tests return true, the function returns `true`.
 * 
 * @param { integer } num - 5-digit number to be checked for primality.
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
 * @description calculates the factorial of a given integer `num`. It recursively
 * calls itself with the input reduced by 1 until it reaches the base case of `num =
 * 0`, where it returns the result directly.
 * 
 * @param { integer } num - number to find the factorial of, and its value determines
 * the output of the function.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting,
 * reversing, and joining the characters back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string with the letters of the input string arranged in
 * reverse order.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates two input arrays into a single array by combining their
 * elements in a list-like manner.
 * 
 * @param { array } arr1 - 1st array that will be merged with the second array passed
 * as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the contents of `arr1`.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, compares adjacent elements, and swaps them
 * if the second is greater than the first. This process continues until no more swaps
 * are needed. The function returns the sorted array.
 * 
 * @param { array } arr - 2D array that is being sorted by the bubble sort algorithm.
 * 
 * @returns { array } a sorted array of the original input values.
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
     * @description initializes an object with the given name and species properties.
     * 
     * @param { string } name - name of the creature being created.
     * 
     * @param { string } species - animal's species to which the constructor is assigned.
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
