// Main divs
const menu = document.querySelector("#menu")
const game = document.querySelector("#game")
const shop = document.querySelector("#shop")
// Buttons in divs
const startGameButton = document.querySelector("#startButton")
const shopButton = document.querySelector("#shopButton")
const backFromShopButton = document.querySelector("#backFromShopButton")
// cookie img and points div
const cookie = document.querySelector("img")
const pointsDiv = document.querySelector("h1")
// Upgrade buttons
const upgradeButtons = document.querySelectorAll(".upgrade")

let pointsCounter = 1000
let pointsToAdd = 1

const helpers = {
    backToGameWindow: () => {
        game.style.display = "flex"
        shop.style.display = "none"
    },
    updatePoints: () => {
        pointsDiv.innerText = `Points: ${pointsCounter}`
    }
}

startGameButton.onclick = () => {
    menu.style.display = "none"
    game.style.display = "flex"
}
shopButton.onclick = () => {
    game.style.display = "none"
    shop.style.display = "block"
}

backFromShopButton.onclick = helpers.backToGameWindow

cookie.onclick = () => {
    pointsCounter += pointsToAdd
    helpers.updatePoints()
}

upgradeButtons[0].onclick = () => {
    if (pointsCounter >= 100) {
        pointsCounter -= 100
        pointsToAdd += 2
        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}

upgradeButtons[1].onclick = () => {
    if (pointsCounter >= 500) {
        pointsCounter -= 500
        pointsToAdd = 5
        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}

upgradeButtons[2].onclick = () => {
    if (pointsCounter >= 1000) {
        pointsCounter -= 1000
        pointsToAdd = 10
        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}

upgradeButtons[3].onclick = () => {
    if(pointsCounter >= 300) {
        pointsCounter -= 300
        game.style.backgroundColor = "#fff9e0"
        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}

upgradeButtons[4].onclick = () => {
    if(pointsCounter >= 200) {
        pointsCounter -= 200
        cookie.src = "https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png"
        helpers.backToGameWindow()
        helpers.updatePoints()
    }

}

upgradeButtons[5].onclick = () => {
    if(pointsCounter >= 400) {
        pointsCounter -= 400
        cookie.classList.add("spinAnimation")
        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}


upgradeButtons[6].onclick = () => {
    if(pointsCounter >= 600) {
        pointsCounter -= 600

        setInterval(() => {
            pointsCounter++
            helpers.updatePoints()
        }, 1000)

        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}





