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


let name = 'Arpita Roy';
let age = 25;
let myAge = " my age is "
let greeting = "Hi, my name is "
let myGreeting = greeting + name + ',' + myAge + age + '.';
console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints = '410'

console.log(4 + 5) // 9
console.log("2" + "4")//24
console.log("5" + 1)//51
console.log(100 + "100")//100100
