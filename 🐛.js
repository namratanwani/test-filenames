/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments num-1 and num-2, then returning the result.
 * 
 * @param { integer } num - 0-based index of the Fibonacci number to be computed.
 * 
 * @returns { `int`. } the nth Fibonacci number.
 * 
 * 	1/ If `num` is equal to or less than 1, the function returns `num` directly without
 * any calculation. This means that the first few terms in the Fibonacci sequence can
 * be computed directly without calling the function again.
 * 	2/ For any positive integer `num`, the function returns the sum of the previous
 * two terms in the Fibonacci sequence. This means that the function recursively calls
 * itself until it reaches the base case, where it stops calling itself and returns
 * the final term directly.
 * 	3/ The function always returns an integer, regardless of the input value. This
 * ensures that the output is always a whole number, which is important in many
 * applications of the Fibonacci sequence.
 * 	4/ The function is terminating, meaning that it will eventually stop calling
 * itself and return a final term when `num` is sufficiently large. This makes it
 * easier to work with large inputs without encountering infinite loops or other issues.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description verifies whether a given number is prime by testing for divisibility
 * by 2, 3, and subsequent prime numbers up to and including the square root of the
 * number. If no divisors are found, the function returns `true`.
 * 
 * @param { integer } num - integer value that is being tested for primality.
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
 * @description computes the factorial of a given integer `num`. It recursively calls
 * itself until reaching 0, then returns the result.
 * 
 * @param { integer } num -
 * 
 * @returns { integer } the factorial of the input number.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input and reverses its characters, then rejoins
 * them to produce the original string in reverse order.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of characters.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two input arrays into a single array by concatenating them
 * in a shallow manner, resulting in an array that contains all elements from both
 * original arrays.
 * 
 * @param { array } arr1 - 1st array that will be merged with the 2nd array.
 * 
 * @param { array } arr2 - 2nd array to be merged with the elements of the first
 * array, `arr1, in the function `mergeArrays`.
 * 
 * @returns { array } a concatenated array of the input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of integers by repeatedly comparing adjacent elements
 * and swapping them if they are out of order based on their values.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of the original input.
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
     * @description initializes an object's properties with given values: `name` and `species`.
     * 
     * @param { string } name - name of the entity to which the constructor belongs.
     * 
     * @param { string } species - animal's species in the constructor function.
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
