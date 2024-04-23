/**
 * @description computes the nth Fibonacci number by recursion, using the previous
 * two numbers as inputs.
 * 
 * @param { integer } num - integer value for which the Fibonacci sequence is being
 * computed.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description tests whether a given number is prime by exhaustively checking all
 * possible factors up to and including the square root of the number. If no factors
 * are found, the number is considered prime.
 * 
 * @param { number } num - integer value that is being tested for primality using the
 * given algorithm.
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
 * @description computes the factorial of a given number by recursively multiplying
 * it with the factorial of the preceding number, until reaching the base case of
 * `num = 0`, where the result is fixed at `1`.
 * 
 * @param { integer } num - base value for calculating the factorial function.
 * 
 * @returns { integer } the value of `num` multiplied by the result of calling
 * `factorial` with `num - 1` as argument.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input, splits it into individual characters, reverses
 * the order of those characters, and then reconstructs the original string by joining
 * the characters back together.
 * 
 * @param { string } str - string to be reversed in the function `reverseString`.
 * 
 * @returns { string } a reversed string of the input provided.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays by concatenating them into a single array, using
 * the spread operator ... to preserve the original elements of both arrays.
 * 
 * @param { array } arr1 - first array that will be merged with the second array
 * passed as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a new array that contains all elements from both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of integers by comparing adjacent elements and swapping
 * them if they are out of order, repeating this process until no more swaps are needed.
 * 
 * @param { array } arr - 2D array to be sorted.
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
     * @description defines and initializes objects of a class with a given name and species.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - animal's species in the constructor function.
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
