//document.getElementById("count-el").innerText = 5;

// intialize the count as 0
let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

// listen for clicks on the increment button
// increment the count variable when the button is clicked
function increment() {
    count += 1;
    countEl.innerText = count;
}
increment();
// change the count-el in the HTML to reflect the new count

// 1. Create a function, save(), which logs out the count when it's called
 function save() {
     console.log(count);
 }
 save();


/// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
let name = " Arpita Roy";
let greeting = "Welcome back ";
console.log(greeting);
// and the greeting we want to render on the page
welcomeEl.innerText = greeting + name;
// Render the welcome message using welcomeEl.innerTexts

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
welcomeEl.innerText = welcomeEl.innerText + '👋';