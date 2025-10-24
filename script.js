const moveButtons = document.querySelector('.selectmove').querySelectorAll('button');
let selection = "";
let botSelection = "";

function bot() {
    let botMove = Math.floor(Math.random() * 3);

switch (botMove) {
    case 0:
        document.querySelector("#bot").classList.add("result-stone");
        botSelection = "stone";
        break;

    case 1:
        document.querySelector("#bot").classList.add("result-paper");
        botSelection = "paper";
        break;

    case 2:
        document.querySelector("#bot").classList.add("result-scissors");
        botSelection = "scissors";
        break;
}
}

moveButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        moveButtons.forEach(btn => btn.disabled = true);
        let targetButton = event.currentTarget.className;
        switch (targetButton) {
            case "stone":
                document.querySelector("#you").classList.add("result-stone");
                bot();
                selection = "stone";
                break;

            case "paper":
                document.querySelector("#you").classList.add("result-paper");
                bot();
                selection = "paper";
                break;

            case "scissors":
                document.querySelector("#you").classList.add("result-scissors");
                bot();
                selection = "scissors";
                break;
        }

        
        setTimeout(() => {
        const popupDiv = document.createElement("div");
        popupDiv.className = "popup";
        const scriptTag = document.querySelector("body > script");
        scriptTag.parentNode.insertBefore(popupDiv, scriptTag);
        document.querySelector(".imp-for-bg").classList.add("popup-need");


        if (selection === botSelection) {
            document.querySelector(".popup").innerText = "It's a tie!";
        } 
        else if ((selection === "stone" && botSelection === "scissors") ||
           (selection === "paper" && botSelection === "stone") ||
           (selection === "scissors" && botSelection === "paper")) {
            document.querySelector(".popup").innerText = "You win!";
        } 
        else {
            document.querySelector(".popup").innerText = "You lose!";
        }
        }, 1000);
    })
    });

