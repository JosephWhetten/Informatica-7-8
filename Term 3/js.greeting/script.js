document.addEventListener("DOMContentLoaded", function() {          // Waits until the website has loaded
    document.querySelector("form").onsubmit = function() {          // Waits until the form is submitted
    let name = document.querySelector("#name").value;               // the variable 'name' is the value of the form with the id '#name'
    console.log("Hi "+name);

    document.querySelector("h1").innerHTML = "Hello "+name;         // Edits the h1 element in the document

    return false; // Prevents website from reloading
}
})

