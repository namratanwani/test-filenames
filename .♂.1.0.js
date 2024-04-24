/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments num - 1 and num - 2, then returns the result.
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
 * @description determines whether a given number is prime or not by testing for
 * divisibility and finding the first integer that divides it without a remainder.
 * 
 * @param { integer } num - 1-digit integer to be checked for primality.
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
 * @description computes the factorial of a given number by recursively multiplying
 * the previous result by the current number and subtracting one until reaching 0.
 * 
 * @param { integer } num - integer value that determines how many times the recursive
 * function call is performed.
 * 
 * @returns { integer } the value of `num!`, calculated recursively.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverts a given string by splitting it into individual characters,
 * reversing their order, and rejoining them into a single string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that is the reverse of the input string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays by concatenating them into a single array using
 * the spread operator.
 * 
 * @param { array } arr1 - 1st array that will be merged with `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the result of merging `arr1`.
 * 
 * @returns { array } an array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, compares adjacent elements, and swaps them
 * if they are in the wrong order.
 * 
 * @param { array } arr - array that is to be sorted by the bubble sort algorithm.
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
     * @description creates an object with `name` and `species` properties based on the
     * provided parameters.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the constructor
     * function, and it is assigned to a field called `species` within the function.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs an animal sound to the console.
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
