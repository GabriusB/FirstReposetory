const gameElements = document.querySelectorAll(".icon")
const playButton = document.getElementById("play-game")
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
let selected = null;
let playerNumber = 0
let computerNumber = 0
for (let i = 3; i <= 5; i++) {
    gameElements[i].onclick= () =>{
        gameElements.forEach(x => x.style.border = "none")
        gameElements[i].style.border = "2px solid green"
        selected = i
        console.log(selected)
    }
}

playButton.onclick = () =>{
    if (selected !== null){
        const x = Math.round(Math.random()*2)
        gameElements[x].style.border = "2px solid green"
        if(selected === 3 && x === 0){
            console.log("you won")
            playerNumber++;
        }
        else if(selected === 3 && x === 1){
            console.log("you lost")
            computerNumber++;
        }
        else if(selected === 4 && x === 0){
            console.log("you lost")
            computerNumber++;
        }
        else if(selected === 4 && x === 2){
            console.log("you won")
            playerNumber++;
        }
        else if(selected === 5 && x === 1){
            console.log("you won")
            playerNumber++;
        }
        else if(selected === 5 && x === 2){
            console.log("you lost")
            computerNumber++;
        }
        else{
            console.log("draw")
        }
        playerScore.innerHTML = `Player score: ${playerNumber}`
        computerScore.innerHTML = `Computer score: ${computerNumber}`
        setTimeout(() =>{
            gameElements.forEach(x => x.style.border = "none")
        },1300)
    }
}