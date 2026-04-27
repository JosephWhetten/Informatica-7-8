function coinflip() {
    num = Math.floor(Math.random() * 2);
    console.log(num);
    if (num == 0) {
        document.querySelector("h2").innerHTML = "Heads";
    }
    else {
        document.querySelector("h2").innerHTML = "Tails";
    }
}
