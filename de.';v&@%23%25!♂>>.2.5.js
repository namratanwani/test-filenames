/**
 * @description calculates the nth Fibonacci number by recurrently adding the previous
 * two numbers, stopping when the input value is below 1.
 * 
 * @param { integer } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } the nth Fibonacci number, calculated recursively.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description checks whether a given number is prime by iteratively testing for
 * factors using trial division and checking for divisibility by 2 and 3.
 * 
 * @param { integer } num - number being tested for primality.
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
 * @description calculates the factorial of a given number by recursively calling
 * itself with the input reduced by 1 until reaching 0, returning the final result.
 * 
 * @param { integer } num - value that is being factored, and its value determines
 * the number of times the recursive call to `factorial()` is made.
 * 
 * @returns { integer } the value of the given number raised to the power of its factorial.
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
 * @returns { string } a reversed string of characters.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays into a single array by concatenating them using
 * the spread operator....
 * 
 * @param { array } arr1 - 1st array to be merged with the second array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of `arr1`.
 * 
 * @returns { array } a concatenation of the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description performs a bubble sort on an array of values, swapping adjacent
 * elements if they are out of order based on their value.
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
     * @description initializes an object with properties `name` and `species`.
     * 
     * @param { string } name - name of the entity.
     * 
     * @param { string } species - animal's species within the constructor function of
     * the class.
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
