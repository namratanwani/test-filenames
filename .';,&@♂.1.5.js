/**
 * @description calculates the nth Fibonacci number using a recursive approach, where
 * the function calls itself twice with input values decremented by 1, and then returns
 * the sum of the two results.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute, and
 * its value determines the output of the function.
 * 
 * @returns { integer } the nth Fibonacci number.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by exhaustively searching for
 * factors up to the square root of the number. It returns `true` if the number is
 * prime and `false` otherwise.
 * 
 * @param { integer } num - 2-digit integer to be tested for primality.
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
 * it by the factorial of the previous number until reaching 0 or the starting value.
 * 
 * @param { integer } num - 3-argument recursive function, determining its result
 * based on its value.
 * 
 * @returns { integer } the value of the factorial of the input number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, then joins them
 * back into a string using the original delimeter.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the original input.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description concatenates two arrays by adding their elements to a new array,
 * resulting in a single, larger array.
 * 
 * @param { array } arr1 - first array to be merged with the second array in the function.
 * 
 * @param { object } arr2 - 2nd array to be merged with `arr1`.
 * 
 * @returns { array } a new array that contains the elements of both input arrays
 * concatenated together.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iterates through an array, compares adjacent elements, and swaps them
 * if the second is greater than the first. This process continues until no more swaps
 * are needed, then the function returns the sorted array.
 * 
 * @param { array } arr - 1D array that is being sorted by the bubble sort algorithm.
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
     * @description sets properties `name` and `species` for an object.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - animal species of the object being constructed, and
     * is used to store that information as a property of the object.
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
