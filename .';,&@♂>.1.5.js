/**
 * @description calculates the nth Fibonacci number by recursion, using the values
 * of the previous two numbers to compute the current one.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be computed and
 * is used to determine the appropriate recursive call in the function's calculation.
 * 
 * @returns { integer } a sequence of numbers that follow the Fibonacci sequence pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime or not by performing various
 * checks and iterations.
 * 
 * @param { integer } num - number being tested for primality.
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
 * @description calculates the factorial of a given number, recursively dividing it
 * by the previous factorial until reaching 0 or the starting value.
 * 
 * @param { integer } num - integer value for which the factorial is calculated.
 * 
 * @returns { integer } the value of the given integer `num` raised to the power of
 * its own factorial.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, joining them
 * back into a string using the originaldelimeter.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a string that is the reversed version of the input string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description merges two arrays by returning a new array that contains all elements
 * from both input arrays.
 * 
 * @param { array } arr1 - first array that will be merged with the second array `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the
 * `mergeArrays` function.
 * 
 * @returns { array } a new array that contains all the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of numbers by repeatedly swapping adjacent elements
 * until they are in ascending order, using a series of nested loops.
 * 
 * @param { array } arr - 2D array that is being sorted using the bubble sort algorithm.
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
     * @description initializes an object with name and species properties.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - animal species of the object being constructed, and
     * is used to determine the object's properties and behavior.
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
