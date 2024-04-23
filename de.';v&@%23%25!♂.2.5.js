/**
 * @description calculates the nth Fibonacci number given its argument `num`. It uses
 * a recursive approach, calling itself with smaller arguments until reaching 1, when
 * it returns the original value directly.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be computed.
 * 
 * @returns { integer } the nth Fibonacci number for a given integer `num`.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks if a given number is prime by iteratively testing factors up
 * to sqrt(num) and checking for divisibility. If no factors are found, the number
 * is prime.
 * 
 * @param { integer } num - number being tested for primality.
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
 * @description computes the factorial of a given integer `num` by recursively calling
 * itself with the argument `num - 1` until it reaches 0, at which point it returns
 * the result.
 * 
 * @param { integer } num - value that the function will calculate the factorial of.
 * 
 * @returns { integer } the value of the given number factored into a product of
 * previous factorials.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting
 * it into individual characters, reversing their order, and joining them back into
 * a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that is the reverse of the input string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating their
 * elements in a listwise manner.
 * 
 * @param { array } arr1 - 1st array that will be merged with the 2nd array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the contents of `arr1`.
 * 
 * @returns { array } a concatenation of both input arrays in a single array.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively compares adjacent elements in an array and swaps them if
 * they are out of order, repeating this process until no more swaps are needed.
 * 
 * @param { array } arr - 1D array to be sorted by the bubble sort algorithm.
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
     * @description establishes properties for an object based on user input.
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
