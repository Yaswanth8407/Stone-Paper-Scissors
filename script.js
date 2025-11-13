const moveButtons = document.querySelector('.selectmove').querySelectorAll('button');
const tryagainbtn = document.querySelector('.tryagain');
const resetbtn = document.querySelector('.reset');
const popup = document.querySelector(".popup");
let yourscore = 0;
let botscore = 0;
let tie = 0;
let selection = "";
let botSelection = "";

function botReveal() {
    let botMove = Math.floor(Math.random() * 3);
    const botEl = document.querySelector(".bot");
    botEl.classList.remove("spin", "que");
    botEl.classList.add("eventclick");

    switch (botMove) {
        case 0:
            botEl.textContent = "✊";
            botSelection = "stone";
            break;
        case 1:
            botEl.textContent = "✋";
            botSelection = "paper";
            break;
        case 2:
            botEl.textContent = "✌️";
            botSelection = "scissors";
            break;
    }
}

moveButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        moveButtons.forEach(btn => btn.disabled = true);

        let youEl = document.querySelector(".you");
        let botEl = document.querySelector(".bot");

        let targetButton = event.currentTarget.className;
        youEl.classList.remove("que");
        youEl.classList.add("eventclick");

        switch (targetButton) {
            case "stone":
                youEl.textContent = "✊";
                selection = "stone";
                break;
            case "paper":
                youEl.textContent = "✋";
                selection = "paper";
                break;
            case "scissors":
                youEl.textContent = "✌️";
                selection = "scissors";
                break;
        }

        botEl.classList.remove("eventclick", "que");
        botEl.textContent = "🤔";
        botEl.classList.add("spin");

        const THINK_TIME = 1000;
        setTimeout(() => {
            botEl.classList.remove("spin");
            botReveal();

            setTimeout(() => {
                popup.style.display = "flex";
                popup.classList.add("show");
            }, 1000)


            if (selection === botSelection) {
                document.querySelector(".popup").style.border = "5px solid rgba(146, 51, 234, 0.65)";
                document.querySelector(".sentence").innerText = "(It's a tie!🤝)";
                tie++;
                document.querySelector(".tiecount").textContent = tie;
            } else if (
                (selection === "stone" && botSelection === "scissors") ||
                (selection === "paper" && botSelection === "stone") ||
                (selection === "scissors" && botSelection === "paper")
            ) {
                document.querySelector(".popup").style.border = "5px solid rgba(37, 99, 235, 0.65)";
                document.querySelector(".sentence").innerText = "(Flawless Victory!🏆⚔️)";
                yourscore++;
                document.querySelector(".wincount").textContent = yourscore;
            } else {
                document.querySelector(".popup").style.border = "5px solid rgba(220, 38, 38, 0.65)";
                document.querySelector(".sentence").innerText = "(Defeat accepted... or rematch?☠️)";
                botscore++;
                document.querySelector(".lostcount").textContent = botscore;
            }

        }, THINK_TIME);
    });
});




tryagainbtn.addEventListener("click", () => {
    moveButtons.forEach((btn) => {
        btn.disabled = false;
    })
    popup.classList.remove("show");
    popup.style.display = "none";


    document.querySelector(".you").textContent = "?";
    document.querySelector(".bot").textContent = "?";
    document.querySelector(".bot").classList.add("que");
    document.querySelector(".you").classList.add("que");
})

resetbtn.addEventListener("click", () => {
    moveButtons.forEach((btn) => {
        btn.disabled = false;
    })
    popup.classList.remove("show");
    popup.style.display = "none";
    yourscore = 0;
    botscore = 0;
    tie = 0;
    document.querySelector(".wincount").textContent = yourscore;
    document.querySelector(".lostcount").textContent = botscore;
    document.querySelector(".tiecount").textContent = tie;
    document.querySelector(".you").textContent = "?";
    document.querySelector(".bot").textContent = "?";
    document.querySelector(".bot").classList.add("que");
    document.querySelector(".you").classList.add("que");
})
