//document.getElementById("count-el").innerText = 5;

// intialize the count as 0
let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

// listen for clicks on the increment button
// increment the count variable when the button is clicked
function increment() {
    count = count + 1;
    countEl.innerText = count;
}
increment();
// change the count-el in the HTML to reflect the new count

// 1. Create a function, save(), which logs out the count when it's called
 function save() {
     console.log(count);
 }
 save();
 //Strings
 let username = "Arpita"
 console.log(username);

// Create a variable, message, that stores the string: "You have tree new notifications"
let message = 'you have three new notifications '
console.log(message);
console.log(message + username + "!");
// Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ', ' + username + '!' ;
console.log(messageToUser);
