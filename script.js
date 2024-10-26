console.log ("hello world");

// name.length = shows lenght of the string
// name.toUpperCase = shows the string in upperCase
// name.toLowerCase = shows the string in lowerCase
// name.charAt(0) = shows the first character of the string
// name.charAt(name.length-1) = shows the last character of the string
// "" + "" = shows the string together
// 1 + 2 = shows the sum of the numbers
// 1 - 2 = shows the difference of the numbers
// 1 * 2 = shows the product of the numbers
// 1 / 2 = shows the quotient of the numbers
// 1 % 2 = shows the remainder of the numbers
// !true = shows the boolean value - false
// !false = shows the boolean value - true
// true && true = shows the boolean value - true
// true && false = shows the boolean value - false
// true || true = shows the boolean value - true
// true || false = shows the boolean value - true
// true == true = shows the boolean value - true
// true == false = shows the boolean value - false
// true != true = shows the boolean value - false
// true != false = shows the boolean value - true
// 123 === "123" = shows the boolean value - false
// 123 == "123" = shows the boolean value - true

const person = {
        name: "John",
        age: 30,
        address: {
            city: "Brisbane",
            state: "QLD"
            },
        }
    
console.log(person);

// person shows the object
// person.age shows the age of the object
// person.address shows the address of the object
// person.address.city shows the city of the address of the object
// person.address.state shows the state of the address of the object
// arr arr (3) ['Luke', 30, 4000]
// arr[1] will show the second element of the array - 30
// arr.length will show the length of the array - 3
// arr.include() will show the boolean value - true or false
// arr.push() will add an element to the end of the array
// arr.pop() will remove an element from the end of the array
// arr.shift() will remove an element from the start of the array
// arr.unshift() will add an element to the start of the array
// arr.splice() will remove an element from the array


// if conditions:
// if (condition) {
//     code
// } else if (condition) {
//     code
// } else {
//     code
// }

// while (condition) {
//     code
// }

// let (coinflip == "heads")

// if (coinflip == "heads") {
//     console.log("Heads")
// } else {
//     console.log("Tails")
// }

// if (true) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// == are values on both side the same even if different data types
// === are values on both side the same & the same data type
// < is less than
// > is greater than
// <= is less than or equal to
// >= is greater than or equal to
// != is not equal to
// !== is not equal to
// && is and
// || is or
// ! is not
// + is addition
// - is subtraction
// * is multiplication
// / is division
// % is modulus
// ** is exponentiation
// = is assignment
// += is addition assignment
// -= is subtraction assignment
// *= is multiplication assignment
// /= is division assignment
// %= is modulus assignment
// **= is exponentiation assignment


// else statements:
let password = "password123";
let submittedPassword = "password1";

if (password == submittedPassword) {
    console.log("User submitted the correct password");
} else {
    console.log("User submitted the wrong password");
}

// else if statements:
let newPassword = "Password123";

if (newPassword[0] != newPassword.toUpperCase()[0]) {
    console.log("Password must start with an uppercase letter");
} else if (newPassword.toLowerCase().includes("password")) {
    console.log("Password should not use an easy to guess word");
} else {
    console.log("Password accepted");
}

// switch statements:
let day = "sunday";

switch (day) {
    case "monday":
        console.log("Monday");
        break;
    case "tuesday":
        console.log("Tuesday");
        break;  
    case "wednesday":
        console.log("Wednesday");    
        break;
    case "thursday":    
        console.log("Thursday");
        break;  
    case "friday":
        console.log("Friday");  
        break;          
    case "saturday":
        console.log("Saturday");
        break;  
    case "sunday":
        console.log("Sunday");  
        break;
    default:
        console.log("Invalid day");
}


// for loops:

// for (let i = 0; i < 10; i++) { this will run the code 10 times
//     console.log(i) this will print 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }

// for (let i = 0; i < 10; i++) { this will run the code 10 times
//     if (i == 5) { 
//         break - this will stop the loop
//     }
//     console.log(i) this will print 0, 1, 2, 3, 4
// }

// for (let i = 0; i < 10; i++) { this will run the code 10 times
//     if (i == 5) { this will stop the loop
//         continue  - this will skip the loop
//     }
//     console.log(i) this will print 0, 1, 2, 3, 4
// }

// var storedPassword = "password123";

// for (let attemptsRemaining = 5; attemptsRemaining > 0;) {
//     let userInput = prompt("Enter your password");
//     if (userInput == storedPassword) {
//         console.log("Password accepted");
//         break;
//     } else {
//         attemptsRemaining--;
//         console.log("Incorrect password, you have " + attemptsRemaining + " attempts remaining");
//     }
// }
// the above code will check for a password and give you 5 attempts

// while loops:
let olympicMedals = 0;

while (olympicMedals < 5) {
    olympicMedals++;
    console.log("You have won " + olympicMedals + " olympic medals");
}

console.log("You have 5, thats enough for one day!");

// for each loops:
let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainbowColours.forEach(colour => {
    console.log(`This fancy colour ${colour} is in the rainbow!`);
});

// forEach vs map:
// forEach runs an operation and has access to a specific index
// map runs an operation and returns a new array