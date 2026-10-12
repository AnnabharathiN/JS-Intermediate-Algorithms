//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
/* Step1: Initialize a variable sum to 0.
   Step2: Use a for loop that initializes a variable i to 200, checks if i is less than or equal to 2700, and increments i by 1 in each iteration.
   Step3: Inside the loop, use an if statement to check if the current number is divisible by 3 or 5 but not both. If true, add the current number to sum.  
    Step4: After the loop, use console.log() to print the final sum. */
    let sum = 0;
for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0) !== (i % 5 === 0)) {  
            sum += i;
    }
}   
console.log(`The final sum is: ${sum}`); 
//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
/* Step1: Define an array X with the given values.
   Step2: Use a for loop that initializes a variable i to 0, checks if i is less than half the length of the array, and increments i by 1 in each iteration.
   Step3: Inside the loop, define a variable temp with the value of the element at index i.
   Step4: Then the elements at index i assigned with index (length - 1 - i) 
   Step5: Next, assign the value of temp to the element at index (length - 1 - i).       
    Step4: After the loop, use console.log() to print the modified array. */
let X = [2, 1, 6, 4, -7];
for (let i = 0; i < Math.floor(X.length / 2); i++) {
    let temp = X[i];
    X[i] = X[X.length - 1 - i];
    X[X.length - 1 - i] = temp;
}
console.log(`The modified array is: [${X}]`);  
//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
//Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]
/* Step1: Initialize an empty array result.
   Step2: Use a for loop that initializes a variable i to 1, checks if i is less than or equal to 135, and increments i by 1 in each iteration.
   Step3: Inside the loop, use an if statement to check if the current number is divisible by both 3 and 5. If true, push "FizzBuzz" into the result array. 
    Step4: Use an else if statement to check if the current number is divisible by 3. If true, push "Fizz" into the result array.
    Step5: Use another else if statement to check if the current number is divisible by 5. If true, push "Buzz" into the result array.
    Step6: If none of the above conditions are met, push the current number(i) into the result array.
   Step7: After the loop, use console.log() to print the result array. */
let result = [];    
for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
    } else if (i % 3 === 0) {
        result.push("Fizz");
    }               
    else if (i % 5 === 0) {
        result.push("Buzz");
    } else {
        result.push(i);
    }           
}
console.log(result);    
//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
/* Step1: Initialize variables a to 0 , b to 1 and sum1 to 0.
   Step2: Use a while loop with the condition that b is less than 1,000,000 , if false go to console.log() to print the final sum1.
   Step3: Inside the loop, add the value of b to sum1.       
    Step4: Then, update the values of a and b to the next numbers in the Fibonacci sequence.
    Step5: After the loop, use console.log() to print the final sum1. */
let a = 0, b = 1, sum1 = 0;
while (b < 1000000) {
    sum1 += b;
    [a, b] = [b, a + b];
}
console.log(`The sum of Fibonacci numbers below 1,000,000 is: ${sum1}`);       


// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
/* Step1: Define an array X1 with the given values.
   Step2: Initialize an empty array result1.
   Step3: Use a for loop that initializes a variable i to 0, checks if i is less than the length of the array, and increments i by 1 in each iteration.
   Step4: Inside the loop, use an if statement to check if the current element is greater than or equal to 0. If true, push the current element into the result1 array.
   Step5: After the loop, use console.log() to print the result1 array. */
let X1 = [87, -26, 65, 91];
let result1 = [];
for (let i = 0; i < X1.length; i++) {
    if (X1[i] >= 0) {
        result1.push(X1[i]);
    }
}
console.log(`The array without negative numbers is: [${result1}]`);
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice
/* Step1: Define an array X with the given values.
   Step2: Use a for loop that initializes a variable i to 0, checks if i is less than the length of the array, and increments i by 1 in each iteration.
   Step3: Inside the loop, use an if statement to check if the current element is equal to the word "Program". If true, replace it with a string of asterisks (*) of the same length as the word.   
    Step4: After the loop, use console.log() to print the modified array. */

let X2 = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
for (let i = 0; i < X2.length; i++) {
    if (X2[i] === 'Program') {      
        X2[i] = '*'.repeat(X2[i].length);
    }
}       
console.log(`The modified array is: [${X2}]`);
