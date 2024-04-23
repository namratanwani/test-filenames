/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with input values `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be computed
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively testing divisors
 * and checking for factors using trial division and the residual factor test.
 * 
 * @param { integer } num - 4-digit number to be tested for primality.
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
 * @description computes the factorial of a given number using recursion, with base
 * case handling the input of 0 and recursive calls computing the factorial of the
 * remaining numbers.
 * 
 * @param { integer } num - 2nd argument passed to the `factorial()` function, which
 * is used to calculate and return the factorial of the specified number.
 * 
 * @returns { integer } the value of the given integer `num` raised to the power of
 * its factorial.
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
 * @returns { string } the original string with its characters reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating their elements
 * in a single pass.
 * 
 * @param { array } arr1 - 1st array to be merged with the `arr2` parameter.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the
 * `mergeArrays` function.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively compares adjacent elements in an array and swaps them if
 * they are not in ascending order. It repeats this process until no more swaps are
 * necessary, returning the sorted array.
 * 
 * @param { array } arr - 2D array to be sorted.
 * 
 * @returns { array } a sorted array of the given input.
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
     * @description sets properties `name` and `species` for an object.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - animal's species in the constructor function of the class.
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
