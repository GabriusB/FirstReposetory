const startGame = document.getElementById("startGame")
const game = document.getElementById("game")
const resultGame = document.getElementById("result")

const gameBox = document.getElementById("gameBox")

const startGameButton = document.getElementById("startGameButton")
const newGameButton = document.getElementById("newGame")

const gameElementArray=[]

const score = document.getElementById("score")

let counter = 0

//Displays
startGameButton.onclick = () =>{
    startGame.style.display = "none"
    game.style.display = "block"
}

//Generate cubes
function generateBombs() {
    for (let i = 0; i < 30; i++) {
        if ((Math.floor(Math.random() * 10) === 0)) {
            gameElementArray.push(true)
        } else {
            gameElementArray.push(false)
        }
    }
}
generateBombs()


function generateGameObjects () {
    for (let i = 0; i < gameElementArray.length; i++) {
        if (gameElementArray[i] === true) {
            gameBox.innerHTML += `
    <div class="gameElement bomb"></div>
    `
        } else {
            gameBox.innerHTML += `
      <div class="gameElement"></div>
      `
        }
    }

    const gameElement = document.querySelectorAll(".gameElement")
    const bombs = document.querySelectorAll(".bomb")
    const pointsNeeded =  gameElement.length - bombs.length
    console.log(pointsNeeded)

//Pressing
    for (let i = 0; i < gameElementArray.length; i++) {

        gameElement[i].onclick = () => {
            if (gameElementArray[i] === false) {
                counter = counter + 1;
                score.innerText = "Score:" + counter
                if (pointsNeeded === counter){
                    for (let k = 0; k < bombs.length; k++) {
                        bombs[k].style.backgroundColor = "indianred"
                    }
                    for (let j = 0; j < 30; j++) {
                        gameElement[j].style.pointerEvents = 'none';
                    }
                    score.innerText = "You won man!!"
                    newGameButton.style.display = "block";
                }
                gameElement[i].style.backgroundColor = "green"
                gameElement[i].style.pointerEvents = 'none';
            } else {
                for (let j = 0; j < bombs.length; j++) {
                    bombs[j].style.backgroundColor = "red"
                }
                bombs.map
                for (let j = 0; j < 30; j++) {
                    gameElement[j].style.pointerEvents = 'none';
                }
                score.innerText = `Game lost, score: ${counter}`
                newGameButton.style.display = "block";
            }
        }
    }
}

generateGameObjects()

//New game
newGameButton.onclick = () => {
    counter = 0;
    for (let i = 0; i <= 30; i++) {
        gameElementArray.pop();
    }
    gameBox.innerHTML = "";
    generateBombs()
    generateGameObjects()
    score.innerText = "Score:"
    newGameButton.style.display = "none"
}