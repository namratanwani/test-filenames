{"name":"#.js","path":"#.js","content":{"structured":{"description":"","items":[{"id":"c60947e1-a4b4-4817-997b-d980dc9414c6","ancestors":[],"type":"function","name":"fibonacci","location":{"offset":" ","indent":0,"start":1,"insert":1},"code":"function fibonacci(num) {\n    if (num <= 1) return num;\n    return fibonacci(num - 1) + fibonacci(num - 2);\n    \n}","params":[{"name":"num","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":5,"comment":{"description":"computes the nth Fibonacci number by recursively calling itself with arguments num - 1 and num - 2, then returning the result.","params":[{"name":"num","type":"integer","value":null,"description":"0-based index of the Fibonacci number to be computed in the function."}],"returns":{"type":"integer","description":"the nth Fibonacci number."}}},{"id":"7734fba2-8d1d-459f-b5d6-c513c1316c3b","ancestors":[],"type":"function","name":"isPrime","location":{"offset":" ","indent":0,"start":7,"insert":7},"code":"function isPrime(num) {\n    if (num <= 1) return false;\n    if (num <= 3) return true;\n    if (num % 2 === 0 || num % 3 === 0) return false;\n    let i = 5;\n    while (i * i <= num) {\n        if (num % i === 0 || num % (i + 2) === 0) return false;\n        i += 6;\n    }\n    return true;\n}","params":[{"name":"num","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":11,"comment":{"description":"determines whether a given number is prime or not by checking for divisibility by 2, 3, and consecutive integers from 5 to the square root of the number.","params":[{"name":"num","type":"integer","value":null,"description":"integer value that is being tested for primality using the provided algorithm."}],"returns":{"type":"boolean","description":"a boolean value indicating whether the input number is prime or not."}}},{"id":"9f81906d-a0a5-49e4-ae67-fe17cf266b98","ancestors":[],"type":"function","name":"factorial","location":{"offset":" ","indent":0,"start":19,"insert":19},"code":"function factorial(num) {\n    if (num === 0) return 1;\n    return num * factorial(num - 1);\n}","params":[{"name":"num","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":4,"comment":{"description":"calculates the factorial of a given number using recursion, returning the result in a single line of code.","params":[{"name":"num","type":"integer","value":null,"description":"integer value for which the factorial is calculated."}],"returns":{"type":"integer","description":"the value of the factorial of a given integer, calculated recursively."}}},{"id":"21a22c3b-4698-40d0-8552-7bd5214e3b2b","ancestors":[],"type":"function","name":"reverseString","location":{"offset":" ","indent":0,"start":24,"insert":24},"code":"function reverseString(str) {\n    return str.split(\"\").reverse().join(\"\");\n}","params":[{"name":"str","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":3,"comment":{"description":"takes a string as input and reverses its characters, joining them back into a string using the original string's separator.","params":[{"name":"str","type":"string","value":null,"description":"string to be reversed."}],"returns":{"type":"string","description":"a reversed string of the input given."}}},{"id":"8b26ebaa-f3e7-4691-b752-c1ecc8ca1424","ancestors":[],"type":"function","name":"mergeArrays","location":{"offset":" ","indent":0,"start":28,"insert":28},"code":"function mergeArrays(arr1, arr2) {\n    return [...arr1, ...arr2];\n}","params":[{"name":"arr1","value":null,"type":null},{"name":"arr2","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":3,"comment":{"description":"combines two arrays into a single array by concatenating their elements in a list-like manner.","params":[{"name":"arr1","type":"array","value":null,"description":"1st array to be merged with the 2nd array in the function."},{"name":"arr2","type":"array","value":null,"description":"2nd array to be merged with the elements of `arr1`."}],"returns":{"type":"array","description":"a new array that contains all elements of both input arrays concatenated together."}}},{"id":"0873403b-6c21-4e23-94b7-af85ca1accc9","ancestors":[],"type":"function","name":"bubbleSort","location":{"offset":" ","indent":0,"start":32,"insert":32},"code":"function bubbleSort(arr) {\n    const len = arr.length;\n    for (let i = 0; i < len; i++) {\n        for (let j = 0; j < len - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                const temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    return arr;\n}","params":[{"name":"arr","value":null,"type":null}],"returns":true,"skip":false,"jsx":false,"length":13,"comment":{"description":"sorts an array of numbers by repeatedly exchanging adjacent elements if they are in the wrong order, until no more swaps are needed.","params":[{"name":"arr","type":"array","value":null,"description":""}],"returns":{"type":"array","description":"a sorted array of values."}}},{"id":"a32d473d-e8b5-4b54-9d75-38d1dd4e36c7","ancestors":[],"type":"function","name":"constructor","location":{"offset":" ","indent":4,"start":47,"insert":47},"code":"constructor(name, species) {\n        this.name = name;\n        this.species = species;\n    }","params":[{"name":"name","value":null,"type":null},{"name":"species","value":null,"type":null}],"returns":false,"skip":false,"jsx":false,"length":4,"comment":{"description":"initializes an object with a `name` and `species` property.","params":[{"name":"name","type":"string","value":null,"description":"name of the entity for which the constructor is being defined."},{"name":"species","type":"string","value":null,"description":"species of the object being constructed in the constructor, providing a value to the `species` attribute of the object."}],"returns":null}},{"id":"3c743944-7b8d-4bfc-b058-768920d65d4d","ancestors":[],"type":"function","name":"makeSound","location":{"offset":" ","indent":4,"start":51,"insert":51},"code":"makeSound() {\n        console.log(\"Animal sound\");\n    }","params":[],"returns":false,"skip":false,"jsx":false,"length":3,"comment":{"description":"logs the string \"Animal sound\" to the console.","params":[],"returns":null}}]}}}