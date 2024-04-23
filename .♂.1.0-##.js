/**
 * @description calculates the nth Fibonacci number given its index as input, using
 * a recursive approach where it calls itself with smaller indices until it reaches
 * the base case of 1 or less when it returns the input directly.
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
 * @description determines whether a given number is prime or not by checking if it
 * is smaller than 3, if it is even and if it can be divided by any numbers between
 * 1 and 6 without leaving a remainder. If none of these conditions are met, the
 * number is returned as a prime.
 * 
 * @param { integer } num - number being tested for primality.
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
 * @description calculates the factorial of a given integer value using recursive calculation.
 * 
 * @param { integer } num - 0-based index of a sequence of integers that is being
 * factored, with a return value of 1 when `num` equals 0 and a return value of `num`
 * multiplied by the factorial of the previous term when `num` is non-zero.
 * 
 * @returns { integer } the value of the given number factored into a product of the
 * previous numbers in the sequence.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverts a given string by reversing its characters and reconstructing
 * the original sequence using the `join()` method.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays by concatenating their elements in a new array,
 * using the spread operator...
 * 
 * @param { array } arr1 - 1st array to be merged with `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array, `arr1, in the
 * `mergeArrays()` function.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively compares adjacent elements in an array, swapping them if
 * they are out of order based on a comparison of their values.
 * 
 * @param { array } arr - 2D array that is being sorted by the bubble sort algorithm.
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
     * @description initializes an object's properties with values provided as arguments:
     * `name` and `species`.
     * 
     * @param { string } name - name of the creature being constructed and is assigned
     * to the `name` field of the constructor.
     * 
     * @param { string } species - animal's species in the constructor function of the
     * `Animal` class.
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
