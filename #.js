/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments `num - 1` and `num - 2`.
 * 
 * @param { number } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } the Fibonacci sequence of a given number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
    
}

/**
 * @description determines whether a given number is prime by iteratively checking
 * if it is divisible by any integer from 2 to sqrt(num). If none are found, it returns
 * true.
 * 
 * @param { integer } num - integer value that is being tested for primality using
 * the provided algorithm.
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
 * @description calculates the factorial of a given number using recursion.
 * 
 * @param { integer } num - number that is being factored, and it determines the value
 * returned by the `factorial()` function.
 * 
 * @returns { integer } the value of the factorial of a given integer, calculated recursively.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description reverses a given string by splitting it into individual characters,
 * reversing their order, and rebuilding the string using the joined array of characters.
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
 * using the `...` syntax.
 * 
 * @param { array } arr1 - 1st array that will be merged with the second array provided
 * as input.
 * 
 * @param { array } arr2 - 2nd array to be merged with the values of `arr1`.
 * 
 * @returns { array } a concatenation of the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, compares adjacent elements, and swaps them
 * if the second element is greater than the first. This process continues until no
 * more swaps are needed. The function returns the sorted array.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array.
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
     * @description sets properties of a newly created object, including its name and
     * species, based on input parameters.
     * 
     * @param { string } name - name of the creature.
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
