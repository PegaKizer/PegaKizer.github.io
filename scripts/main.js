//Task 1 
//Print the first 10 square numbers (1*1 = 1, 2*2 = 4,)
console.log("task 1");
for (let i = 0; i < 10; i++) {
    let squared = i * i;
    console.log(squared);
}
//Task 2
//Count down from 5 to 1 then say "Blastoff!"
console.log("task 2");
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log("Blastoff!")
// Task 3
// Print the even numbers from 1 to 50 (including 50)
console.log("task 3")
for (let i = 2; i <= 50; i = i + 2) {
    console.log(i)
}

//task 4
//Print the sum of 1 through 100.
console.log("task 4");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
// 5
//  Print the first 10 factorials. The factorial of a number n is n multiplied by each integer less than it, down to 1, written as n!
// 1! = 1
console.log("task 5");
let factorial = 1
for (let i = 1; i <= 10; i++) {
    factorial *= i;
    console.log(factorial);
}
//6
// Add the array arr with the same values as above, and write a loop to log each element to the console.
console.log("Task 6")
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


// 7
// Using a normal forward for-loop (for (let i = 0; i < arr.length; i++)), use .at() to log each element of arr in reverse order (i.e. 5, 1, 4, 1, 3)
console.log("Task 7")
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr.at(i));
}

//8
console.log("Task 8");
let cubeNumbers = [];
for (let i = 1; i <= 10; i++) {
    cubeNumbers.push(i ** 3);
}
console.log(cubeNumbers);

//9 
console.log("Task 9");
let fibonacciNumbers = [];
fibonacciNumbers[0] = 0;
fibonacciNumbers[1] = 1;
for (let i = 2; i < 10; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
}
console.log(fibonacciNumbers);

//10
console.log("Task 10");
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log(reversedArr);




