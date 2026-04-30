function play(item) {

    num = Math.floor(Math.random() * 3);

    if (num == 0) {
        document.querySelector("h3").innerHTML = "The bot chose Rock";
        console.log("Rock");
        if (item == 'rock') {
            document.querySelector("h2").innerHTML = "Tie";
        }
        else if (item == 'paper') {
            document.querySelector("h2").innerHTML = "You win";
        }
        else {
            document.querySelector("h2").innerHTML = "You lose";
        }
    }
    else if (num == 1) {
        document.querySelector("h3").innerHTML = "The bot chose Paper";
        console.log("Paper");
        if (item == 'paper') {
            document.querySelector("h2").innerHTML = "Tie";
        }
        else if (item == 'scissors') {
            document.querySelector("h2").innerHTML = "You win";
        }
        else {
            document.querySelector("h2").innerHTML = "You lose";
        }
    }
    else {
        document.querySelector("h3").innerHTML = "The bot chose Scissors";
        console.log("Scissors");
        if (item == 'scissors') {
            document.querySelector("h2").innerHTML = "Tie";
        }
        else if (item == 'rock') {
            document.querySelector("h2").innerHTML = "You win";
        }
        else {
            document.querySelector("h2").innerHTML = "You lose";
        }
    }

}
