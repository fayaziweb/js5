// Find all the odd numbers from 61 to 100.
// Find all the even numbers from 78 to 98.
// Display sum of all the odd numbers from 81 to 131.
// Display sum of all the even numbers from 206 to 311.
function findOddNumbers(start, end) {
    let oddNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}


function findEvenNumbers(start, end) {
    let evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}


function sumOddNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}


function sumEvenNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

// As Nayeem is learning now, he wants to explore more and more. Tell Nayeem to generate a multiplication table for number 5

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }




    // 4. Implement a countdown timer that counts down from 21 to 15.
    function countdownTimer() {
        let count = 21; 
        
       
        let timer = setInterval(function() {
            console.log(count);  
            count--;  
            
            
            if (count < 15) {
                clearInterval(timer); 
                console.log("Countdown finished!");
            }
        }, 1000); 
    }
    
    
    countdownTimer();


//Write a JavaScript program to find the value  divisible by 3 and 5 in 500. and sum those value.


    let sum = 0;
    
    
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) { 
            console.log(i);  
            sum += i;       
        }
    }
    
    
    return sum;


    // "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

    
function displayMessage() {
    let message = "I will invest at least 6 hrs every single day for next 60 days!";
    
   
    for (let i = 1; i <= 60; i++) {
        console.log(message);
    }
}


