/**
 * @description computes the nth Fibonacci number using a recursive approach, where
 * the first two numbers are 0 and 1, and subsequent numbers are computed as the sum
 * of the preceding ones.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence that the function
 * will compute, with values less than or equal to 1 returned directly and values
 * greater than 1 computed as the sum of the two preceding Fibonacci numbers.
 * 
 * @returns { integer } the nth Fibonacci number, where `num` is the input argument.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisibility by 2 and 3, as well as by iteratively testing for divisibility by
 * numbers between 5 and the square root of the input number.
 * 
 * @param { integer } num - number being tested for primality.
 * 
 * @returns { boolean } a boolean indicating whether the input number is prime or not.
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
 * @description calculates the factorial of a given number, recursively multiplying
 * the number by its predecessor until reaching 0 or the base case of 1.
 * 
 * @param { integer } num - integer value that is being factored, and it is used to
 * determine the result of the computation performed by the function.
 * 
 * @returns { integer } the value of `num` raised to the power of `num - 1`.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input, splits it into individual characters, reverses
 * their order, and joins them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the string reversed lexicographically, without any leading or
 * trailing whitespace.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description takes two arrays as input and returns a new array that is the
 * concatenation of the elements of both inputs.
 * 
 * @param { array } arr1 - 1st array that will be merged with the second array passed
 * as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a concatenation of `arr1` and `arr2`.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, swapping adjacent elements if they are in
 * the wrong order (ascending). It repeats this process until no more swaps are needed.
 * 
 * @param { array } arr - 2D array to be sorted by the bubble sort algorithm.
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
     * @description creates a new object by setting its `name` and `species` properties
     * to the input arguments.
     * 
     * @param { string } name - name of the entity being constructed, and is assigned to
     * the `name` property of the constructor's object.
     * 
     * @param { string } species - species of the object being constructed and is assigned
     * to the `species` property of the constructor object.
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
