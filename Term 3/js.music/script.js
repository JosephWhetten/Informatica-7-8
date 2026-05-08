document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const snare = new Audio("sounds/snare.wav");
    const tom = new Audio("sounds/tom.wav");
    const bruh = new Audio("sounds/bruh.mp3");
    const oof = new Audio("sounds/steveoof.mp3");
    const clap = new Audio("sounds/clap.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const openhat = new Audio("sounds/openhat.wav");

    const kickDiv = document.querySelector("#kick");
    const snareDiv = document.querySelector("#snare");
    const tomDiv = document.querySelector("#tom");
    const bruhDiv = document.querySelector("#bruh");
    const oofDiv = document.querySelector("#oof");
    const clapDiv = document.querySelector("#clap");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#openhat");


    window.addEventListener("keydown", function(event) {
        if (event.key == "a") {
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        }
        if (event.key == "s") {
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        }
        if (event.key == "d") {
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");
        }
        if (event.key == "b") {
            bruh.currentTime = 0.1;
            bruh.play();
            bruhDiv.classList.add("active");
        }
        if (event.key == "o") {
            oof.currentTime = 0.15;
            oof.play();
            oofDiv.classList.add("active");
        }
        if (event.key == "f") {
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        }
        if (event.key == "g") {
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        }
        if (event.key == "h") {
            openhat.currentTime = 0;
            openhat.play()
            openhatDiv.classList.add("active");
        }
    })

    window.addEventListener("keyup", function (event) {
        if (event.key == "a") {
            kickDiv.classList.remove("active");
        }
        if (event.key == "s") {
            snareDiv.classList.remove("active");
        }
        if (event.key == "d") {
            tomDiv.classList.remove("active");
        }
        if (event.key == "b") {
            bruhDiv.classList.remove("active");
        }
        if (event.key == "f") {
            clapDiv.classList.remove("active");
        }
        if (event.key == "o") {
            oofDiv.classList.remove("active");
        }
        if (event.key == "g") {
            hihatDiv.classList.remove("active");
        }
        if (event.key =="h") {
            openhatDiv.classList.remove("active");
        }
    })
    return false;
})
