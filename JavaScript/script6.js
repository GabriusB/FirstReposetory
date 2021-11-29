/*
//const heading = document.getElementById("text")
//const button = document.querySelector("#myButton")

//1
//button.addEventListener("click", buttonClicked)
//function buttonClicked(){
//    console.log("paspaustas")
//}



//arba                                                          //javascript events

//2
//button.onclick = () => {
//    console.log("paspaustas")

//}
const head1 = document.querySelector("#L1")
const head2 = document.querySelector ("#L2")
const head3 = document.querySelector ( "#L3")
const x1 = document.querySelector("#FirstButton")
const x121 = document.getElementById("SecondButton1")
const x122 = document.getElementById("SecondButton2")
const x123 = document.getElementById("SecondButton3")
const x13 = document.getElementsByClassName("TherdButton")


/*
x1.onclick = () => {
    head1.innerText = "HEllo dude"
head1.style.color = "#9a2d0a"
}

 */

//x121.onclick = () => {
//    head1.innerText = "L"
//    head1.style.color = "#ce2f36"
//}
//x122.onclick = () => {
//    head2.innerText = "B"
//    head2.style.color = "#5cd90e"
//}
//x123.onclick = () => {
//    head3.innerText = "S"
//    head3.style.color = "#0e30d9"
//}
/*
x13[0].onclick = () => {
    head3.innerText = "Good"
    head3.style.color = "#8400ff"

}


 */
/*
const cookie = document.getElementById("cookie")
const pp = document.querySelector("#pp")
const overlay = document.querySelector(".overlay")
const start = document.getElementById("start")
const shop = document.querySelector(".shop")

start.addEventListener("click", () => {
    overlay.style.display = "none"
    cookie.style.display = "block"
    points.style.display = "block"
    shop.style.display = "block"
})

let counter = 0;
cookie.onclick = () =>{
    counter++;
    pp.innerHTML = counter;
}

let trigger = true

shop.addEventListener("click", () =>{
    trigger = !trigger

    if (trigger){
        overlay.style.display = "none"
        cookie.style.display = "block"
        points.style.display = "block"
        shop.innerHTML = "<h1>Shop</h1>"
        shop.style.marginLeft = "950px"
    }else {
        cookie.style.display = "none"
        points.style.display = "none"
        shop.innerHTML = "<h1> Back </h1>"
        shop.style.backgroundColor = "#e0b1a0"
        shop.style.width = "200px"
        shop.style.height = "200px"


    }

})

 */
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
const upgradebox = document.querySelector(".upgradebox")
const openupgrades = document.querySelector(".openupgrades")
const newbackround = document.querySelector ("#newbackround")





let pointsCounter =10000
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
    upgradebox.style.display = "none"

}
openupgrades.onclick = () => {
    upgradebox.style.display = "block"
    openupgrades.style.display = "none"
    shop.style.display = "block"
    newbackround.style.display = "none"
}
shopButton.onclick = () => {
    game.style.display = "none"
    shop.style.display = "block"
    upgradebox.style.display = "none"
    openupgrades.style.display = "block"
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
        upgradeButtons.style.display = "none"

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
    if (pointsCounter >= 1000) {
        pointsCounter -= 1000
    game.style.backgroundColor = "#a42e2e"
    helpers.backToGameWindow()
    helpers.updatePoints()
}
}

upgradeButtons[4].onclick = () => {
    if (pointsCounter >= 1000) {
        pointsCounter -= 1000
            coockie.src = ""
        }
}

upgradeButtons[5].onclick = () => {
    if (pointsCounter >= 1000) {
        pointsCounter -= 1000
cookie.classList.add("spinAnimation")
        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}
upgradeButtons[5].onclick = () => {
    if (pointsCounter >= 1000) {
        pointsCounter -= 1000
        setInterval(() => {
           pointsCounter++
        }, 1000)

        helpers.backToGameWindow()
        helpers.updatePoints()
    }
}
//setInterval(() => {
 //   console.log("labas")
//}, 1000)