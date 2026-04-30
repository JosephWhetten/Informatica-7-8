function coinflip(choice) {
        num = Math.floor(Math.random() * 2);
        console.log(num);



        if (num == 0) {
                document.querySelector("h2").innerHTML = "Heads";
                if (choice == 'heads') {
                        const para = document.createElement("p");
                        const node = document.createTextNode("You got it right!");

                        para.appendChild(node);
                        document.querySelector("body").appendChild(para);
                }
                else {
                        const para = document.createElement("p");
                        const node = document.createTextNode("You got it wrong...");

                        para.appendChild(node);
                        document.querySelector("body").appendChild(para);
                }


        }
        else {
                document.querySelector("h2").innerHTML = "Tails";
                if (choice == 'tails') {
                        const para = document.createElement("p");
                        const node = document.createTextNode("You got it right!");

                        para.appendChild(node);
                        document.querySelector("body").appendChild(para);
                }
                else {
                        const para = document.createElement("p");
                        const node = document.createTextNode("You got it wrong...");

                        para.appendChild(node);
                        document.querySelector("body").appendChild(para);
                }

        }
}
