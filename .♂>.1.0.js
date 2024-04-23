/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } a sequence of numbers that follows the Fibonacci sequence pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by testing various
 * factors, including divisibility by 2 and 3, and checking for divisors using trial
 * division.
 * 
 * @param { number } num - 8-bit integer value to be checked for primality.
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
 * @description calculates the factorial of a given number by recursively calling
 * itself with the input minus 1 until it reaches 0, at which point it returns 1.
 * 
 * @param { integer } num - 2-dimensional mathematical object being factored, which
 * is multiplied by itself until it reaches 0 or 1, at which point the factorial
 * function returns 1.
 * 
 * @returns { integer } the value of the factorial of a given integer `num`.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing their order, and rejoining them into a new string.
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
 * @param { array } arr1 - first array to be merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by repeatedly shuffling it, comparing
 * adjacent elements, and swapping them when they are in the wrong order.
 * 
 * @param { array } arr - 1D array that is being sorted by the `bubbleSort()` function.
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
     * @description initializes an object with a name and species attribute.
     * 
     * @param { string } name - name of the entity for which the constructor is being defined.
     * 
     * @param { string } species - animal's species in the constructor function of the
     * Animal class.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs the message "Animal sound" to the console.
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
