let timer;
const alarm = new Audio("bruh.mp3");

function time() {
    if (timer > 0) {
        timer--;
        if (timer > 9) {
            document.querySelector("h1").innerHTML = "00:" + timer;
        }
        else {
            document.querySelector("h1").innerHTML = "00:0" + timer;
        }

    }
    if (timer == 0) {
        alarm.play();
        timer--;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#start").disabled = true;

    document.querySelector("#thirty").onclick = function(){
        timer=30;
        document.querySelector("h1").innerHTML = "00:30";
        document.querySelector("#start").disabled = false;
    }

    document.querySelector("#sixty").onclick = function(){
        timer=60;
        document.querySelector("h1").innerHTML = "00:60";
        document.querySelector("#start").disabled = false;
    }

    document.querySelector("#fivem").onclick = function(){
        timer=300;
        document.querySelector("h1").innerHTML = "05:00";
        document.querySelector("#start").disabled = false;
    }

    document.querySelector("#start").onclick = function(){
        setInterval(time, 1000);    // Executes the function "time()" every 1000 milliseconds
        document.querySelector("#start").disabled = true;
        document.querySelector("#thirty").disabled = true;
        document.querySelector("#sixty").disabled = true;
        document.querySelector("#fivem").disabled = true;
    };
})
