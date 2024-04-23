/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * input values `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be calculated
 * in the recursive function.
 * 
 * @returns { integer } the Fibonacci sequence up to the input number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
    
}

/**
 * @description checks whether a given number is prime or not by iterating through
 * numbers and checking if they are divisible by any factor, including itself and
 * factors of 2 and 3. If no such factors are found, the number is returned as prime.
 * 
 * @param { integer } num - number being tested for primality in the provided function.
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
 * @description calculates the factorial of a given integer `num`. It uses recursive
 * formula to compute the result, starting with the base case of `num = 0`, where the
 * result is `1`, and then iteratively calling itself with the decremented `num - 1`
 * until the base case is reached.
 * 
 * @param { integer } num - 2nd argument passed to the function and it is used to
 * calculate the product of the previous term and the current term using recursive
 * function call, which results in returning the value of the factorial of that number.
 * 
 * @returns { integer } the value of the given integer `num` raised to the power of
 * its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, then reconstructs
 * the original string by joining the reversed characters back together.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the input argument.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating their elements
 * in order.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array.
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
 * @description iterates through an array and compares adjacent elements, swapping
 * them if they are out of order based on their values.
 * 
 * @param { object } arr - 2D array that is to be sorted using the bubble sort algorithm.
 * 
 * @returns { array } a sorted array of values.
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
     * @description creates an object with `name` and `species` properties.
     * 
     * @param { string } name - name of the object being constructed and is assigned to
     * the `name` property of the resulting object.
     * 
     * @param { string } species - species of an object being constructed, and is stored
     * as a property of the constructor's return value.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs an "Animal sound" message to the console.
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
