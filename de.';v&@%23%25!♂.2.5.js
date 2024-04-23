/**
 * @description calculates the nth Fibonacci number by using a recursive approach,
 * where the previous numbers are passed as arguments to the function.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute, with
 * values less than or equal to 1 returned directly and values greater than 1 computed
 * as the sum of the previous two terms in the sequence.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisibility by 2, 3, and other numbers up to the square root of the input number.
 * If no factors are found, the number is returned as prime.
 * 
 * @param { number } num - 4-digit number to be tested for primality.
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
 * @description computes the factorial of a given integer `num`. It uses recursion
 * to calculate the factorial by multiplying the previous value by the next smaller
 * integer until reaching 1 when `num` is 0.
 * 
 * @param { integer } num - for which the factorial is being calculated.
 * 
 * @returns { integer } the value of the given number's factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting
 * it into individual characters, reversing them, and then joining them back into a
 * string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of characters, with each character in the
 * original string placed in reverse order.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays by returning a new array that contains all elements
 * from both input arrays, in the order they were provided.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array in the function.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively sorts an array by comparing adjacent elements and swapping
 * them if they are out of order, repeating the process until no more swaps are needed.
 * 
 * @param { array } arr - 2D array that is to be sorted by the `bubbleSort()` function.
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
     * @description creates an object with two properties: `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, and is used to assign the appropriate value to the `species` property
     * of the resulting object.
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
