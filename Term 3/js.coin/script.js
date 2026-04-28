function coinflip() {
    num = Math.floor(Math.random() * 2);
    console.log(num);



    if (num == 0) {
        document.querySelector("h2").innerHTML = "Heads";
        const para = document.createElement("p");
        const node = document.createTextNode("Heads");

        para.appendChild(node);
        document.querySelector("body").appendChild(para);
    }
    else {
        document.querySelector("h2").innerHTML = "Tails";
        const para = document.createElement("p");
        const node = document.createTextNode("Tails");

        para.appendChild(node);
        document.querySelector("body").appendChild(para);

    }
}
