function bot() {
    let botMove = Math.floor(Math.random() * 3);
    
    
    if (botMove === 0) {
        document.querySelector("#bot").classList.add("result-stone");
        return "stone";
    } else if (botMove === 1) {
        document.querySelector("#bot").classList.add("result-paper");
        return "paper";
    } else {
        document.querySelector("#bot").classList.add("result-scissors");
        return "scissors";
    }
}
const moveButtons = document.querySelector('.selectmove').querySelectorAll('button');

moveButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let targetButton = event.currentTarget.className;
        if (targetButton == "stone") {
            document.querySelector("#you").classList.add("result-stone");
            // button.removeEventListener("click", handleMoveClick)
            bot();
            return "stone";
        }
        else if (targetButton == "paper"){
            document.querySelector("#you").classList.add("result-paper");
            // button.removeEventListener("click", handleMoveClick)
            bot();
            return "paper";
        } 
        else {
            document.querySelector("#you").classList.add("result-scissors");
            // button.removeEventListener("click", handleMoveClick)
            bot();
            return "scissors";
        }
    });
});