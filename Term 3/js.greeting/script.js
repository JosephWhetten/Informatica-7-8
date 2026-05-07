document.addEventListener("DOMContentLoaded", function() {          // Waits until the website has loaded
    document.querySelector("form").onsubmit = function() {          // Waits until the form is submitted

    let name = document.querySelector("#name").value;               // the variable 'name' is the value of the form with the id '#name'
    document.querySelector("h1").innerHTML = "Hello "+name;         // Edits the h1 element in the document

    let date = new Date();
    console.log(date);

    console.log(date.getHours());
    if (date.getHours() < 12) {
        document.querySelector("#time").innerHTML = "🌄Good Morning";
    }
    else if (12 < date.getHours() < 18) {
        document.querySelector("#time").innerHTML = "🔆Good Afternoon";
    }
    else {document.querySelector("#time").innerHTML = "🌇Good Evening";}

    let day = date.getDay();
    console.log(day);
    if (day == 0) {document.querySelector("#day").innerHTML = "Today is Sunday"}
    else if (day == 1) {document.querySelector("#day").innerHTML = "Today is Monday"}
    else if (day == 2) {document.querySelector("#day").innerHTML = "Today is Tuesday"}
    else if (day == 3) {document.querySelector("#day").innerHTML = "Today is Wednesday"}
    else if (day == 4) {document.querySelector("#day").innerHTML = "Today is Thursday"}
    else if (day == 5) {document.querySelector("#day").innerHTML = "Today is Friday"}
    else if (day == 6) {document.querySelector("#day").innerHTML = "Today is Saturday"}

    let friday = document.querySelector("#friday")
    if (1 < day < 5) {friday.innerHTML = "Not Friday, yet!"}
    else if (day == 5) {friday.innerHTML = "Finally Fridaaaaaay! 🕺"}
    else {friday.innerHTML = "Just enjoy your weekend 🙌"}


    return false;   // Prevents website from reloading
}
})

