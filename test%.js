/**
 * @description calculates the nth Fibonacci number by using a recursive approach,
 * where the input number is passed as an argument to the function and the result is
 * returned.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to compute and
 * determines the output value returned by the function.
 * 
 * @returns { integer } the nth Fibonacci number for a given integer `num`.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description determines whether a given number is prime by recursively checking
 * divisors up to and including the square root of the number, excluding 2 and 3, and
 * then checking if it is even or has any factors other than 1 and itself.
 * 
 * @param { integer } num - number that is being tested for primality.
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
 * @description calculates the value of a number's factorial, returning the result
 * from 1 to infinity as input increases.
 * 
 * @param { integer } num - input value for which the factorial is calculated.
 * 
 * @returns { integer } the value of the given number multiplied by its factorial
 * recursively calculated until reaching the base case of `num === 0`.
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
 * @returns { string } a reversed string of the original input argument.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description takes two arrays as input and returns a new array with the elements
 * of both arrays concatenated in a single list.
 * 
 * @param { array } arr1 -
 * 
 * @param { array } arr2 - 2nd array to be merged with `arr1`.
 * 
 * @returns { array } a new array that combines the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of integers by repeatedly comparing adjacent elements,
 * swapping them if they are out of order based on their values.
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
     * @description creates an object with two properties: `name` and `species`.
     * 
     * @param { string } name - name of the object being constructed and is assigned to
     * the `name` property of the object.
     * 
     * @param { string } species - species of the object being constructed in the constructor
     * function, and is used to assign the value of that parameter to the `species`
     * property of the resulting object.
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
