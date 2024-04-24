{"name":"🐛.js","path":"🐛.js","content":{"structured":{"description":"","items":[{"id":"cb4cdc94-0af5-4a98-a397-c14365447b51","ancestors":[],"type":"function","name":"fibonacci","location":{"offset":" ","indent":0,"start":1,"insert":1},"code":"function fibonacci(num) {\n    if (num <= 1) return num;\n    return fibonacci(num - 1) + fibonacci(num - 2);\n}","params":[{"name":"num","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":4,"comment":{"description":"calculates the nth Fibonacci number by recursively calling itself with arguments num-1 and num-2, then returning the result.","params":[{"name":"num","type":"integer","value":null,"description":"0-based index of the Fibonacci number to be computed."}],"returns":{"type":"`int`.","description":"the nth Fibonacci number.\n\n\t1. If `num` is equal to or less than 1, the function returns `num` directly without any calculation. This means that the first few terms in the Fibonacci sequence can be computed directly without calling the function again.\n\t2. For any positive integer `num`, the function returns the sum of the previous two terms in the Fibonacci sequence. This means that the function recursively calls itself until it reaches the base case, where it stops calling itself and returns the final term directly.\n\t3. The function always returns an integer, regardless of the input value. This ensures that the output is always a whole number, which is important in many applications of the Fibonacci sequence.\n\t4. The function is terminating, meaning that it will eventually stop calling itself and return a final term when `num` is sufficiently large. This makes it easier to work with large inputs without encountering infinite loops or other issues.\n"}}},{"id":"186f6ec2-f4dc-4f21-9bd1-61200e0b2569","ancestors":[],"type":"function","name":"isPrime","location":{"offset":" ","indent":0,"start":6,"insert":6},"code":"function isPrime(num) {\n    if (num <= 1) return false;\n    if (num <= 3) return true;\n    if (num % 2 === 0 || num % 3 === 0) return false;\n    let i = 5;\n    while (i * i <= num) {\n        if (num % i === 0 || num % (i + 2) === 0) return false;\n        i += 6;\n    }\n    return true;\n}","params":[{"name":"num","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":11,"comment":{"description":"verifies whether a given number is prime by testing for divisibility by 2, 3, and subsequent prime numbers up to and including the square root of the number. If no divisors are found, the function returns `true`.","params":[{"name":"num","type":"integer","value":null,"description":"integer value that is being tested for primality."}],"returns":{"type":"boolean","description":"a boolean value indicating whether the input number is prime or not."}}},{"id":"46e3dbd3-cb75-46eb-89d3-92b822a4dd45","ancestors":[],"type":"function","name":"factorial","location":{"offset":" ","indent":0,"start":18,"insert":18},"code":"function factorial(num) {\n    if (num === 0) return 1;\n    return num * factorial(num - 1);\n}","params":[{"name":"num","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":4,"comment":{"description":"computes the factorial of a given integer `num`. It recursively calls itself until reaching 0, then returns the result.","params":[{"name":"num","type":"integer","value":null,"description":""}],"returns":{"type":"integer","description":"the factorial of the input number."}}},{"id":"317aa2fb-11ef-44d4-b9ef-1bb939e56ec3","ancestors":[],"type":"function","name":"reverseString","location":{"offset":" ","indent":0,"start":23,"insert":23},"code":"function reverseString(str) {\n    return str.split(\"\").reverse().join(\"\");\n}","params":[{"name":"str","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":3,"comment":{"description":"takes a string as input and reverses its characters, then rejoins them to produce the original string in reverse order.","params":[{"name":"str","type":"string","value":null,"description":"string to be reversed."}],"returns":{"type":"string","description":"a reversed string of characters."}}},{"id":"3376fcd2-2b42-4b8f-ba40-623a74e8eed4","ancestors":[],"type":"function","name":"mergeArrays","location":{"offset":" ","indent":0,"start":27,"insert":27},"code":"function mergeArrays(arr1, arr2) {\n    return [...arr1, ...arr2];\n}","params":[{"name":"arr1","value":null,"type":null},{"name":"arr2","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":3,"comment":{"description":"combines two input arrays into a single array by concatenating them in a shallow manner, resulting in an array that contains all elements from both original arrays.","params":[{"name":"arr1","type":"array","value":null,"description":"1st array that will be merged with the 2nd array."},{"name":"arr2","type":"array","value":null,"description":"2nd array to be merged with the elements of the first array, `arr1, in the function `mergeArrays`."}],"returns":{"type":"array","description":"a concatenated array of the input arrays."}}},{"id":"61c88905-c45c-448a-a886-ea323dc7abc5","ancestors":[],"type":"function","name":"bubbleSort","location":{"offset":" ","indent":0,"start":31,"insert":31},"code":"function bubbleSort(arr) {\n    const len = arr.length;\n    for (let i = 0; i < len; i++) {\n        for (let j = 0; j < len - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                const temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    return arr;\n}","params":[{"name":"arr","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":13,"comment":{"description":"sorts an array of integers by repeatedly comparing adjacent elements and swapping them if they are out of order based on their values.","params":[{"name":"arr","type":"array","value":null,"description":""}],"returns":{"type":"array","description":"a sorted array of the original input."}}},{"id":"9511e49b-83ad-4079-a83d-82c079d89f40","ancestors":[],"type":"function","name":"constructor","location":{"offset":" ","indent":4,"start":46,"insert":46},"code":"constructor(name, species) {\n        this.name = name;\n        this.species = species;\n    }","params":[{"name":"name","value":null,"type":null},{"name":"species","value":null,"type":null}],"returns":false,"skip":false,"jsx":false,"length":4,"comment":{"description":"initializes an object's properties with given values: `name` and `species`.","params":[{"name":"name","type":"string","value":null,"description":"name of the entity to which the constructor belongs."},{"name":"species","type":"string","value":null,"description":"animal's species in the constructor function."}],"returns":null}},{"id":"6cbd5438-592b-47a7-9137-6fc370093358","ancestors":[],"type":"function","name":"makeSound","location":{"offset":" ","indent":4,"start":50,"insert":50},"code":"makeSound() {\n        console.log(\"Animal sound\");\n    }","params":[],"returns":false,"skip":false,"jsx":false,"length":3,"comment":{"description":"logs the string \"Animal sound\" to the console.","params":[],"returns":null}}]}}}