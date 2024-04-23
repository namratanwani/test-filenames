/**
 * @description computes the nth Fibonacci number by recurrence, starting with the
 * initial values 0 and 1.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute,
 * determining the resulting sequence of numbers returned by the function.
 * 
 * @returns { `int`. } the nth Fibonacci number, calculated using the recursive formula.
 * 
 * 		- If `num` is 1 or less, the output is simply `num`.
 * 		- Otherwise, the output is the sum of the fibonacci numbers of degrees 1 and 2
 * (i.e., `fibonacci(num - 1)` and `fibonacci(num - 2`)).
 * 
 * 	The returned value is an integer, which can be used for further mathematical
 * operations or for other purposes.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by iteratively
 * testing divisors up to the square root of the input number and checking for factors.
 * 
 * @param { integer } num - 2-digit integer value being tested for primality using
 * various methods, starting with smaller numbers and increasing the test range until
 * the number is confirmed to be prime or identified as composite.
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
 * @description calculates the factorial of a given number by recursively calling
 * itself with the input minus one until it reaches the base case of `num = 0`, where
 * it returns 1.
 * 
 * @param { integer } num - 3-digit number whose factorial is being calculated.
 * 
 * @returns { integer } the value of the given number's factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing them, and then joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates two arrays by spreading their elements into a new array
 * using the spread operator....
 * 
 * @param { array } arr1 - 1st array that will be merged with the second array upon
 * execution of the `mergeArrays()` function.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function
 * `mergeArrays`.
 * 
 * @returns { array } a concatenation of both input arrays in a single array.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by repeatedly swapping adjacent elements
 * if they are out of order, and repeats this process until no more swaps are needed.
 * 
 * @param { array } arr - 2D array that is to be sorted using the bubble sort algorithm.
 * 
 * @returns { array } a sorted array of the input values.
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
     * @description initializes an object with a given name and species.
     * 
     * @param { string } name - name of the entity being constructed.
     * 
     * @param { string } species - species of the object being constructed and assigns
     * it to the `species` field of the constructor's output.
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
