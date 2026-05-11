// let counter = 0;

// function count() {
//     counter++;
//     document.querySelector('h1').innerHTML = counter;
// }

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').onclick = function(){
//         setInterval(count, 1000);   // Adds another number to the counter every 1000 milliseconds
//         document.querySelector('button').disabled = true;
//     };
// });

let timer = 60;
const alarm = new Audio("alarm.mp3");

function time() {
    if (timer != 58) {
        timer--;
        document.querySelector("h1").innerHTML = timer;
    }
    if (timer == 58) {
        alarm.play();
    }

}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").onclick = function(){
        setInterval(time, 1000);
        document.querySelector("button").disabled = true;
    };
})


