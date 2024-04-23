/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments num - 1 and num - 2, and then adding the results together.
 * 
 * @param { number } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { `int`. } a calculated Fibonacci sequence number.
 * 
 * 	1/ If `num` is less than or equal to 1, the function returns the direct value of
 * `num`.
 * 	2/ Otherwise, the function calculates and returns the sum of `fibonacci(num - 1)`
 * and `fibonacci(num - 2)`.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively testing if it
 * can be divided by any number less than its square root without leaving a remainder.
 * If no division occurs, the number is prime.
 * 
 * @param { number } num -
 * 
 * @returns { boolean } a boolean indicating whether the given number is prime.
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
 * calls itself until reaching the base case of `num = 0`, where it returns the result
 * directly.
 * 
 * @param { integer } num - 3-digit positive integer value that the function calculates
 * the factorial of.
 * 
 * @returns { integer } the value of the factorial of a given integer, calculated recursively.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, joining them
 * back into a string to produce the original text in reverse order.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that is the reverse of the input string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating them
 * using the spread operator ...
 * 
 * @param { array } arr1 - 1st array to be merged with the second array passed as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function
 * `mergeArrays`.
 * 
 * @returns { array } a new array that contains all elements from both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array and compares adjacent elements, swapping
 * them if they are out of order based on a greater-than comparison.
 * 
 * @param { array } arr - 1D array to be sorted.
 * 
 * @returns { array } a sorted array of numbers.
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
     * @description creates an object with two properties: `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - animal's species.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description outputs the message "Animal sound" to the console.
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
