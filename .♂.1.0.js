/**
 * @description computes the nth Fibonacci number by recursion, using a base case of
 * num <= 1 and recurrence relation fibonacci(num - 1) + fibonacci(num - 2).
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be calculated,
 * with values less than or equal to 1 resulting in the corresponding Fibonacci number
 * being returned directly, and otherwise causing the function to recursively call
 * itself to compute the previous two Fibonacci numbers and then sum them to produce
 * the final result.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by recursively iterating until
 * finding a divisor or reaching the limit of the recursion. If no divisor is found,
 * it returns true indicating the number is prime.
 * 
 * @param { integer } num - integer value that is being checked to see if it is prime.
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
 * @description calculates the factorial of a given integer `num`. It recursively
 * calls itself with the argument `num - 1` until it reaches the base case when `num
 * = 0`, returning the result as `1`.
 * 
 * @param { integer } num - number that is being factored into its factorial value,
 * and its value determines the calculation performed by the function.
 * 
 * @returns { integer } the value of the given integer `num` factorialized.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and returns its reversed version by splitting,
 * reversing, and joining the characters back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the original input.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating its elements.
 * 
 * @param { array } arr1 - 1st array to be merged with the 2nd array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, comparing adjacent elements and swapping
 * them if they are out of order based on their values.
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
     * @description creates an instance of a class by assigning values to its properties
     * 'name' and 'species'.
     * 
     * @param { string } name - name of the object being constructed and is assigned to
     * the `name` field of the constructor.
     * 
     * @param { string } species - species of the object being constructed in the
     * constructor, providing a value that determines the object's type or class.
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
