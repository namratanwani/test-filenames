/**
 * @description computes the nth Fibonacci number by recurrence relation, where the
 * initial values are 0 and 1.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be calculated
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively testing factors
 * until it finds a composite factor or determines that the number is prime.
 * 
 * @param { integer } num - 2-digit integer that the function checks for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is prime.
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
 * @description calculates the factorial of a given number using recursion.
 * 
 * @param { integer } num - 3-digit number for which the factorial is being calculated.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, joining them
 * back into a string in reverse order.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description takes two arrays as input and returns a new array that is the
 * concatenation of the two inputs.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, compares adjacent elements, and swaps them
 * if the second is greater than the first. This process continues until no more swaps
 * are needed. The function returns the sorted array.
 * 
 * @param { array } arr -
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
     * @description initializes an object's `name` and `species` properties with input
     * arguments `name` and `species`.
     * 
     * @param { string } name - name of the entity.
     * 
     * @param { string } species - animal's species in the constructor function of the
     * `Animal` class, and is used to set the `species` property of the newly created object.
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
