/**
 * @description calculates the nth Fibonacci number using a recursive approach, where
 * the function calls itself twice with arguments reduced by 1 until the base case
 * is reached when the input is 1 or less.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute and
 * determines the corresponding value to return.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively checking if it
 * is divisible by any integer from 2 to the square root of the number. If no such
 * division occurs, the number is prime.
 * 
 * @param { integer } num - 3-digit number to be tested for primality.
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
 * @description calculates the factorial of a given integer `num` by recursively
 * multiplying `num` and its previous factorial.
 * 
 * @param { integer } num - base value for the calculation of the factorial, which
 * is calculated by multiplying `num` by the factorial of `num - 1`.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reverse version by splitting
 * it into individual characters, reversing them, and joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed, i.e., the characters are arranged
 * in reverse order.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays by concatenating them into a single array using
 * the spread operator `[...]`
 * 
 * @param { array } arr1 - 1st array to be merged with the second array in the function
 * `mergeArrays`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a concatenation of `arr1` and `arr2`.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of integers by comparing adjacent elements and swapping
 * them if they are in the wrong order, repeating this process until no more swaps
 * are needed.
 * 
 * @param { array } arr - 2D array to be sorted by bubble sort algorithm.
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
     * @description establishes an object's properties `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed in the constructor
     * function.
     * 
     * @param { string } species - species of an object constructed by the `constructor`
     * function, assigning it to a field named `species` within the object.
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
