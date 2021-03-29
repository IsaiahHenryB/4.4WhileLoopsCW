/**
 * Write a function that takes in a number parameter (greater than 0) and prints every integer from 
 * 1 to that number (inclusive). Use a while loop. Beware of infinite loops! Make sure
 * to increment your counter.
 */
const printNumbersUpTo = (num) => {
    // Write your code below
    let i = 1
    while(num>=i && num>0){
        console.log(i)
        i++
    }
    
}
printNumbersUpTo(9)
// printNumbersUpTo(10);


/** 
 * 2
 * Write a function that takes in a string parameter and prints every single character of 
 * the string to the console. Use a while loop. Beware of infinite loops! Make sure to 
 * increment your counter.
*/
const printString = (str) => {
    // Write your code below
    let i=0
    while(i < str.length){
        console.log(str[i])
        i++
    }
}
printString("puppies")


/** 
 * 3
 * Write a function that takes number parameters (start, end) and prints every even number
 * between the two parameters (inclusive). Assume the first parameter is always less than the 
 * second parameter. Use a while loop.
*/
const printEvenNumber = (start, end) => {
    // Write your code below
    while(start <= end){
        if(start %2 === 0){
        console.log(start)
        }
        start++
    }
}
printEvenNumber(8, 25);


/**
 * 4
 * Write a function that takes a number a parameter and returns true if the number is prime, 
 * otherwise returns false. A prime number is a positive integer that is only divisible by
 * 1 and itself. For example, 2, 3, 5, 7, and 11 are prime numbers. Use a while loop. 
 */
const checkForPrimeNumber = (num) => {
    // Write your code below
    if(num < 2){
        return false
    }

    let i = 2
    // ^^ This is since dividing by one gives no remainder so at least 2
    while(i<num){
        if(num % i === 0){
        return false
        }
        i++
    }
    return true
        
}
console.log(checkForPrimeNumber(1)) // False
console.log(checkForPrimeNumber(2)) // True
console.log(checkForPrimeNumber(3)) // True
console.log(checkForPrimeNumber(4)) // False
console.log(checkForPrimeNumber(5)) // True
console.log(checkForPrimeNumber(6)) // False
console.log(checkForPrimeNumber(7))  // True
console.log(checkForPrimeNumber(11)) // True


/**
 * 5 - BONUS 
 * Write a program that prints the numbers from 1 to 100. For numbers that are multiples of 3, print "Fizz"
 * instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers that are 
 * multiples of both 3 and 5, print "FizzBuzz". You may use any loop we've learned in this unit. 
 */
 const fizzBuzz = (start, end) => {
    // Write your code below
    while(start <= end){
        if(start %3 === 0 && start %5 === 0){
            console.log(`FizzBuzz`)
            }
        if(start %3 === 0){
            console.log(`Fizz`)
            }
        if(start %5 === 0){
        console.log(`Buzz`)
        }
        
        console.log(start)
        start++ 
    }
}
fizzBuzz(1, 100);