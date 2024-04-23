/**
 * @description calculates the nth Fibonacci number using a recursive approach, where
 * the function calls itself with arguments num - 1 and num - 2 to generate the
 * previous numbers in the sequence.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
    
}

/**
 * @description determines whether a given number is prime or not by checking for
 * divisors, including factor pairs and trios, and then iterating until no factors
 * are found.
 * 
 * @param { integer } num - 3-digit number to be tested for primality.
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
 * @description computes the factorial of a given integer value using recursion, with
 * base case handling zero input and recursive case multiplying previous result by
 * input value.
 * 
 * @param { integer } num - for which the factorial is being calculated, and its value
 * determines the result returned by the function.
 * 
 * @returns { integer } the value of the factorial of a given integer, calculated recursively.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description transforms a given string by reversing its characters and reassembling
 * them into a new string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string with the letters of the original input reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating the elements
 * of both arrays.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array passed as `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
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
 * @param { array } arr - 2D array to be sorted by the bubble sort algorithm.
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
     * @description creates an instance of a class by setting properties `name` and `species`.
     * 
     * @param { string } name - name of the entity being constructed and is stored as a
     * property of the entity object.
     * 
     * @param { string } species - species of the object being constructed and is assigned
     * to the `species` field of the constructor's return value.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description logs an animal sound to the console.
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
