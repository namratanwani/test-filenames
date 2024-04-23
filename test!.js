/**
 * @description calculates the nth Fibonacci number using a recursive approach, where
 * it calls itself with input arguments `num - 1` and `num - 2`, until reaching the
 * base case of `num <= 1`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } a sequence of numbers that follow the Fibonacci sequence pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime by testing various factors,
 * including divisibility by 2 and 3, as well as checking for any known prime numbers
 * within a certain range.
 * 
 * @param { integer } num - 1-based integer value to be checked for primality using
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
 * @description calculates the factorial of a given integer, recursively calling
 * itself until it reaches the base case of `num = 0`, where it returns `1`.
 * 
 * @param { integer } num - number being factored, and it is used to determine the
 * value of the returned factorial.
 * 
 * @returns { integer } the value of the factorial of a given number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting
 * it into individual characters, reversing them, and joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed and joined back into a single string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating them in the
 * order they are provided.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array in the function.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the
 * `mergeArrays` function.
 * 
 * @returns { array } a concatenation of both input arrays in a single array.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, comparing adjacent elements and swapping
 * them if the second is larger than the first. This process continues until no more
 * swaps are needed, at which point the function returns the sorted array.
 * 
 * @param { array } arr -
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
     * @description creates an object with properties `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of an object being constructed, and is used
     * to set the `species` field of the constructed object.
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
