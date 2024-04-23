/**
 * @description computes the nth Fibonacci number by recursively calling itself with
 * arguments `num - 1` and `num - 2`.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute, and
 * its value determines the output value of the function.
 * 
 * @returns { integer } the nth Fibonacci number for a given integer `num`.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime by checking for divisibility
 * by 2, 3, and any integer from 5 to the square root of the number. If none of these
 * conditions are met, the number is prime.
 * 
 * @param { integer } num - 3-digit integer value that is being tested for primality
 * using a series of logical checks and trial division.
 * 
 * @returns { boolean } a boolean indicating whether the input number is prime.
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
 * @description calculates the factorial of a given number, using recursion to compute
 * the result.
 * 
 * @param { integer } num - integer value that is multiplied with its preceding 
 * integers to calculate the  factorial of that number.
 * 
 * @returns { integer } the value of `num!`, computed using recursive multiplication.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input, splits it into individual characters, reverses
 * the order of those characters, and then reconstructs the original string by joining
 * them together again.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the input argument, without any additional
 * information or context.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating them
 * using the spread operator.
 * 
 * @param { array } arr1 - first array that will be merged with the second array
 * passed as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a new array that contains all the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, compares adjacent elements, and swaps them
 * if the second is greater than the first. This process continues until no more swaps
 * are needed.
 * 
 * @param { array } arr -
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
     * @description sets properties `name` and `species` for an object.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - animal's species in the constructor function of the
     * class `Animal`.
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
