/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } a series of numbers in the Fibonacci sequence.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description verifies whether a given number is prime by checking for divisibility
 * by 2, 3, and other numbers up to the square root of the input. If none of these
 * checks return true, the function returns `true`.
 * 
 * @param { integer } num - 2-digit number to be checked for primality.
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
 * @description computes the factorial of a given number by recursively calling itself
 * with the input reduced by 1 until it reaches 0, returning the final result.
 * 
 * @param { integer } num - positive integer for which the factorial is calculated.
 * 
 * @returns { integer } the value of the given number's factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters by splitting,
 * reversing, and joining back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the input argument.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating its elements
 * in order.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with `arr1`.
 * 
 * @returns { array } a concatenated array of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array and performs a bubble sort, swapping adjacent
 * elements if they are in the wrong order.
 * 
 * @param { object } arr - 2D array to be sorted.
 * 
 * @returns { array } a sorted array of elements.
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
     * @description establishes an object's properties.
     * 
     * @param { string } name - name of the creature being constructed.
     * 
     * @param { string } species - animal's species in the constructor function of the code.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description outputs "Animal sound" to the console.
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
