let selection = ["ROCK", "PAPER", "SCISSORS"];
let trigger = document.getElementsByClassName("button");
let roundWinner = document.getElementById("winner");
let playerScore = 0
let computerScore = 0

let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
const reset = document.getElementById("reset");
reset.addEventListener("click", reserter)

function reserter() {
  playerScore = 0;
  computerScore = 0;
  sp1.innerHTML = "Player";
  sp2.innerHTML = "Computer";

}

function getComputerSelection() {
    return  selection[ Math.floor( Math.random() * 3 ) ]  
}

const triggerButtons = Array.from(trigger)

triggerButtons.forEach(button => {
    button.onclick = function (event) {
        console.log("event", event)
      const userSelection = event.target.parentElement.getAttribute("id");
      const computerSelection = getComputerSelection();
        
        console.log("selections",userSelection, computerSelection)
        playground(computerSelection, userSelection)
        console.log("player score",playerScore)
        console.log("computer score", computerScore)

        sp1.textContent = playerScore
        sp2.textContent = computerScore
      

        if (computerScore === 5) {
            roundWinner.textContent = 'Winner is computer'
            //alert("Game ended")
          sp2.innerHTML = "5"
          setTimeout(() => {
            reserter();
          }, 3000);
         
            return
          } else if (playerScore === 5) {
            roundWinner.textContent = 'Winner is Player'
            //alert("Game ended")
            sp1.innerHTML = "5"
            setTimeout(() => {
              reserter();
            }, 3000);
            return
          }
    }
})

function playground ( computerSelection, userSelection ) {
    if (computerSelection === userSelection) {
      }


    if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK')
        ) {
         playerScore++
      }

    if (
        (computerSelection === 'ROCK' && userSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && userSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && userSelection === 'ROCK')
        ) {
        computerScore++
      }
}
