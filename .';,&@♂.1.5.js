/**
 * @description calculates the nth Fibonacci number by recurrence, with a base case
 * of num <= 1 and recursive calls fibonacci(num - 1) + fibonacci(num - 2).
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
 * @description determines whether a given number is prime by checking for divisors
 * and using trial division to confirm primality.
 * 
 * @param { integer } num - number to be tested for primality.
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
 * @description calculates the factorial of a given number by recursively multiplying
 * it by the factorial of the previous number until reaching the base case of `num =
 * 0`.
 * 
 * @param { integer } num - positive integer value that is being factored, and it is
 * used to calculate the result of the factorial function.
 * 
 * @returns { integer } the value of `num!`, computed using recursive computation.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a string by splitting it into individual characters, reversing
 * them, and then joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the string with characters reversed in order.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description takes two arrays as input and returns a new array that contains all
 * the elements of both arrays.
 * 
 * @param { array } arr1 - first array to be merged with the second array in the
 * function `mergeArrays`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of elements by comparing adjacent elements and swapping
 * them if they are out of order.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of the input elements.
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
     * @description initializes an object with a `name` and `species` property.
     * 
     * @param { string } name - name of the entity being constructed.
     * 
     * @param { string } species - animal species of the object being constructed, and
     * is used to determine the characteristics and behaviors of the object.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description consoles logs the string "Animal sound".
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
