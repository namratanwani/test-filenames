/**
 * @description calculates the nth Fibonacci number given its argument `num`. It uses
 * a recursive approach where the function calls itself with arguments `num - 1` and
 * `num - 2` to compute the desired value.
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
 * @description checks whether a given number is prime by iteratively testing if it
 * can be divided by any integer from 2 to 6 without leaving a remainder. If such a
 * divisor is found, the function returns false; otherwise, it returns true.
 * 
 * @param { integer } num - 3-digit number to be checked for primality.
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
 * @description calculates the factorial of a given number recursively by multiplying
 * the result of the previous call with the input number minus 1.
 * 
 * @param { integer } num - base value for calculation of its factorial, with `0`
 * being a special case where the result is fixed at 1.
 * 
 * @returns { integer } the value of the given integer argument multiplied by the
 * factorial of the argument minus 1.
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
 * @returns { string } a string with the characters of the input string reversed.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating its elements.
 * 
 * @param { array } arr1 - 1st array to be merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the first array in the function.
 * 
 * @returns { array } a concatenation of `arr1` and `arr2`.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description iteratively compares adjacent elements of an array, swapping them if
 * they are out of order based on their values.
 * 
 * @param { array } arr - array that is being sorted by the `bubbleSort()` function.
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
     * @description establishes an object's properties based on user input, including
     * name and species, thus allowing for object initialization with relevant data.
     * 
     * @param { string } name - name of the entity for which the constructor is being
     * called, and it is assigned to the `this.name` attribute within the constructor function.
     * 
     * @param { string } species - animal's species in the constructor function of the
     * `Animal` class.
     */
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /**
     * @description consoles logs the string "Animal sound".
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
