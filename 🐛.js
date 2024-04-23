/**
 * @description calculates the nth Fibonacci number given the integer `num`. It
 * recurringly calls itself with arguments `-1` and `-2` until reaching the base case
 * where `num` is less than or equal to `1`, returning the value directly. Otherwise,
 * it computes and returns the sum of the previous two Fibonacci numbers.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute, with
 * values less than or equal to 1 returned directly and larger values computed as the
 * sum of the two previous terms in the sequence.
 * 
 * @returns { integer } a sequence of numbers that follow the Fibonacci sequence pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisibility by 2, 3, and other numbers up to the square root of the input value.
 * If none of these checks reveal a composite nature, the function returns `True`.
 * 
 * @param { integer } num - 3-digit number to be tested for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is prime.
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
 * @description computes the factorial of a given number by recursively calling itself
 * with the input minus one until it reaches the base case of `num = 0`.
 * 
 * @param { number } num - 0-based index of the recursive call to calculate the
 * factorial value.
 * 
 * @returns { integer } the factorial of the given number.
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
 * @returns { string } the original string with its characters reversed and joined
 * back into a single string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates its two input arrays and returns the resulting array.
 * 
 * @param { array } arr1 - first array to be merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with `arr1`.
 * 
 * @returns { array } a new array that contains all the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of values by comparing adjacent elements and swapping
 * them if they are out of order, recursively applying the same process until no more
 * swaps are needed.
 * 
 * @param { array } arr - 1D array to be sorted by the bubble sort algorithm implemented
 * in the function.
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
     * @description creates an object with properties `name` and `species`.
     * 
     * @param { string } name - name of the entity being constructed and is stored as a
     * property of the constructor object.
     * 
     * @param { string } species - species of the object being constructed in the constructor
     * function, and is assigned to the `species` field of the object.
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
