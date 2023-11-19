//Note: I added additional print statemnts so I would know what is what when I see it on the screen.

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //Created my array using literal notation
console.log("Ages array:");
console.log(ages);

/* a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed! */

console.log("Difference between last and first element in the array:");
console.log(ages[ages.length - 1] - ages[0]); /* The last element is the array's lengh minus 1, because array indexes start at 0, hence the 
index for the first element is 0. */

// b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(34); //aded a new age to the end of the array
console.log("Difference between last and first element in the array, after adding a new element:");
console.log(ages[ages.length - 1] - ages[0]);


// c. Use a loop to iterate through the array and calculate the average age.

let ageSum = 0; //declared variable to store the sum of the ages contained in the array

for (const age of ages) {
    ageSum += age;
};

console.log(`Average age ${ageSum / ages.length}`); //prints the average age by dividing the ages sum by the number of elements in the array

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //Created my array using literal notation
console.log("Array with names:");
console.log(names);

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

let numLetters = 0;
for (const name of names) {
    numLetters += name.length;
};

console.log("Average number of letters per name:");
console.log(numLetters / names.length);

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let nameConcat = '';

// Loop iterates through the names and concatenates them, and I added a check so as to not add a space after the 

for (let i = 0; i < names.length; i++) {
    // concatenates current name to nameConcat
    nameConcat += names[i];
    // Adds a space if it's not the last name of the array
    if (i < names.length - 1) {
        nameConcat += ' ';
    }
};

console.log("Concatenated names:");
console.log(nameConcat);

// 3. How do you access the last element of any array?

console.log("As I did above, I use length, and then subtract 1 from it, since the index starts at 0.");
console.log("Like this: arrayName[arrayName.length-1] if I used it in the names array I get:");
console.log(names[names.length - 1]);

// 4. How do you access the first element of any array?

console.log("The first element of any array is always the index 0. and the syntax is arrayName[0], the first element in the names array is:");
console.log(names[0]);

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the
nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */

let nameLengths = []; // array for storing each name length

//for loop that goes through each element of the names array
for (const name of names) {
    nameLengths.push(name.length); //adds the lenght of the name element to the end of the nameLengths array
};

console.log("Array with lengths from names array:");
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumElements=0; // variable to store the sum

// for loop that iterates over the nameLengths array
for (const num of nameLengths) {
    sumElements += num; // adds the length to the total
};

console.log("Sum of all elements in the array: ");
console.log(sumElements);

/* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
 (i.e.if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). */

 // Used arrow function to define it
 const concatWords = (word, n) => {
    // variable to control the loop and to store the string
    let i = 0;
    let wordConcat ='';
    // while loop that will run n number of times
    while (i<=n) {
        wordConcat += word; // this concatenates the word
        i++;
    }
    return wordConcat; //returns the concatenated string after the while loop ends
 };

console.log("When calling the concatWords function,  and passing the arguments Promineo and 7, it returns the following: ")
console.log(concatWords('Promineo', 7)); // prints the returned value from the function

/* 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.
 */

const fullName = (firstName, lastName) => firstName + " " + lastName; // arrow fuction that takes the two parameters and returns the concatenated arguments

console.log("When calling the fullName function, and passing the arguments Ana and de Rey, it returns the following:");
console.log(fullName('Ana','de Rey')); 

/* 9. Write a function that takes an array of numbers and returns true if the sum of all 
the numbers in the array is greater than 100. */

// used traditional function syntax
function sumGreaterHundred (numArray) {
    // declared variable for storing the sum
    let sumNums = 0;
    for(const num of numArray) {
        sumNums += num; // adds the number to the sum total, for loop goesthrough all elements of the array
    }

    return sumNums>100; //return statement checks the comparison and returns a boolean
};

console.log("Test for the sumGreaterHundred function with the array [18, 20, 15, 23, 16] which should return false:");
console.log(sumGreaterHundred([18, 20, 15, 23, 16]));

console.log("Test for the sumGreaterHundred function with the array [18, 16, 89] which should return true:");
console.log(sumGreaterHundred([18, 16, 89]));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function numAverage (numArray) {
    // declare variable to store the sum of the numbers in the array
    let sumNums = 0;
    //loop over all the elements in the array
    for (const num of numArray) {
        sumNums += num; // adds num to the total
    }
    return sumNums/numArray.length; //returns the average of all elements in the array
};

// created array to test: 

let dayNums = [23, 25, 16, 15, 18];

console.log("Testing the numAverage function with the dayNums array:");
console.log(numAverage(dayNums));

/* 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array
is greater than the average of the elements in the second array. */

// Used single line arrow function and reused previous function to get the averages of each argument
const greaterArray = (numArr1, numArr2) => numAverage(numArr1) > numAverage(numArr2); // operation checks if first argument is greated than the second, returns a boolean

console.log("Testing greaterArray with dayNums array as the first argument, and ages as the second, it should return false:");
console.log(greaterArray(dayNums, ages));

console.log("Testing greaterArray with ages array as the first argument, and dayNums as the second, it should return true:");
console.log(greaterArray(ages, dayNums));

/* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it 
is hot outside and if moneyInPocket is greater than 10.50. */

const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50; // Arrow function checks that both conditions are true

console.log("If I have $20 in my pocket and it's hot outside:");
console.log(willBuyDrink(true, 20));

console.log("If I have $20 in my pocket and it's not hot outside:");
console.log(willBuyDrink(false, 20));

console.log("If I have $3 in my pocket and it's hot outside:");
console.log(willBuyDrink(true, 3));

console.log("If I have $3 in my pocket and it's not hot outside:");
console.log(willBuyDrink(false, 3));