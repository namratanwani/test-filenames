/**
 * @description calculates the nth Fibonacci number by recursively calling itself
 * with arguments `num - 1` and `num - 2`.
 * 
 * @param { number } num - 0-based index of the Fibonacci sequence to be generated
 * by the function.
 * 
 * @returns { integer } a sequence of numbers that follows the Fibonacci sequence pattern.
 */
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @description tests whether a given number is prime by iteratively checking if it
 * has any factors other than 1 and itself, and returning `true` if none are found.
 * 
 * @param { number } num - 4-digit number being tested for primality.
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
 * @description calculates the factorial of a given integer `num`. It uses recursive
 * calculation to determine the factorial, starting with the base case of `num = 0`,
 * where the result is `1`. Otherwise, it multiplies `num` by the factorial of `num
 * - 1`.
 * 
 * @param { integer } num - 0-based integer value that is multiplied with its
 * pre-decremented 1-based factorial to produce the result of the `factorial()` function.
 * 
 * @returns { integer } the value of the factorial of a given integer `num`.
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/**
 * @description takes a string as input, splits it into individual characters, reverses
 * the order of those characters, and then recombines them into a new string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the string reversed without modifying it.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @description combines two arrays by concatenating them using the spread operator.
 * 
 * @param { array } arr1 - 1st array to be merged with `arr2`.
 * 
 * @param { array } arr2 - 2nd array to be merged with the 1st array in the function
 * `mergeArrays`.
 * 
 * @returns { array } a concatenation of the elements of both input arrays.
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @description sorts an array of values by comparing adjacent elements and swapping
 * them if they are out of order, repeating this process until no more swaps are needed.
 * 
 * @param { array } arr -
 * 
 * @returns { array } a sorted array of numbers.
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
     * @description defines an object's properties with two parameters: `name` and `species`.
     * 
     * @param { string } name - name of the creature.
     * 
     * @param { string } species - animal's species to which the constructed object belongs.
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
