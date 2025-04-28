//These are small coding tasks
//First task is to reverse a string

function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString ("Kissa"));

//Second task is to find the largest number

function findTheLargestNumber(array) {
    return Math.max(...array);
    }
console.log(findTheLargestNumber([1, 5, 6, 200, 10]));

//Third taks is to check for a palindrome

function isPalindrome(string) {
    const reverse = string.split("").reverse().join("");
    return string === reverse;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("kissa"))

//Fourth task is to sum all the numbers in a array

function sumArray(array) {
    return array.reduce((sum , num) =>
    sum+num,0);
}
console.log(sumArray([1,2,3,4]))

//Fifth task is to check the second largest number

function secondLargest(array){
    const uniqueArray = [...new Set(array)]
    uniqueArray.sort((a,b) => b - a );
    return uniqueArray[1];
}
console.log(secondLargest([1,2,3,4,5]));

//Sixth task is to count how many vowels is in a string

function countVowels(string) {
    const vowels = "aeiou"
    return string.split("").filter(char => vowels.includes(char.toLowerCase())).length
}
console.log(countVowels("kissa"));

//Seventh task is to find the factorial of a nmber

function factorial(n){
    if (n===0) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));

//last task is to put this in github