//document.getElementById("count-el").innerText = 5;

// intialize the count as 0
let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

// listen for clicks on the increment button
// increment the count variable when the button is clicked
function increment() {
    count += 1;
    countEl.textContent = count;
}
increment();

 // 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let preEntries = count + ' - ';
    saveEl.textContent += preEntries;
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
save();
