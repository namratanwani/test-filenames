/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments num - 1 and num - 2, then returning the result.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by testing its
 * divisibility using various methods, including checking for factors and performing
 * trial division.
 * 
 * @param { integer } num - integer value to be tested for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is prime.
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
 * @param { integer } num - 3-adic number being factored, and its value determines
 * the outcome of the calculation performed by the function.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting
 * it into individual characters, reversing their order, and reconstructing the
 * original string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that represents the reverse of the input string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating them
 * using the spread operator.
 * 
 * @param { array } arr1 - 1st array that will be merged with the second array passed
 * as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with `arr1`.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively sorts an array of integers by comparing adjacent elements
 * and swapping them if they are out of order.
 * 
 * @param { array } arr - 1D array that is to be sorted by the `bubbleSort()` function.
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
     * @description sets properties `name` and `species` for an object.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - species of an object being constructed in the `constructor`
     * function, assigning it to a property of the object's class called `species`.
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
