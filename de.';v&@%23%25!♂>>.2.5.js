/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments num - 1 and num - 2, and then combining their results.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be computed.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisibility by 2, 3, and any other integer between 5 and the square root of the
 * number. If none of these conditions are met, the number is considered prime.
 * 
 * @param { integer } num - 3-digit number to be checked for primality.
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
 * @description calculates the factorial of a given number using recursion, returning
 * the result as a product of the input number and the recursorily calculated factorial
 * of the input minus one.
 * 
 * @param { integer } num - integer value that is being factored, and it determines
 * the result of the computation performed by the `factorial` function.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing their order, and reconstructing the string back to its original form.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates two arrays by returning a new array that contains all
 * elements from both input arrays.
 * 
 * @param { array } arr1 - 1st array to be merged with the 2nd array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays in
 * a single list.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array and performs a bubble sort by swapping
 * adjacent elements if they are out of order.
 * 
 * @param { array } arr - 2D array that is being sorted using the bubble sort algorithm.
 * 
 * @returns { array } a sorted array of integers based on the provided input.
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
     * @description creates an instance of a class by setting its properties 'name' and
     * 'species'.
     * 
     * @param { string } name - name of the object being constructed and is assigned to
     * the `name` field of the constructor.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, and assigns it to the `species` field of the object.
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
