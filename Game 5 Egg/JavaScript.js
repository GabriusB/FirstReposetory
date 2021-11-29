const button = document.querySelector(".button123")
const moneyDiv = document.querySelector("h1")
const bigBox = document.querySelector(".bigBox")
const wait30sec = document.querySelector(".egg2")

let icons =
    [
        "fas fa-cat fa-5x style=color:#0c078f",
        "fas fa-dragon fa-5x style=color:#0c078f",
        "fas fa-hippo fa-5x style=color:#0c078f",
        "fas fa-horse fa-5x style=color:#0c078f",
        "fas fa-spider fa-5x style=color:#0c078f",
        "fas fa-dog fa-5x style=color:#0c078f",
        "fas fa-dove fa-5x style=color:#0c078f",
        "fas fa-fish fa-5x style=color:#0c078f",
        "fas fa-kiwi-bird fa-5x style=color:#0c078f"
    ]

let prices = []
let money = 300
let selecteditem = null
let iconsPrice = 60
let sellPrice = 50
let buttonArr = []
let iconsArr = []

button.onclick = () => {

    let iconsR=Math.round(Math.random()*9)
    // console.log(icons)
        if (money >= iconsPrice) {
            money -= iconsPrice
            moneyDiv.innerHTML = `Money  ${money}`
            bigBox.innerHTML += `<i class="${icons[iconsR]}"></i> <button id="sellButton">Sell</button>`
iconsArr.push(icons[iconsR])
        }
buttonArr = document.querySelectorAll("#sellButton")
    // console.log(iconsArr)
    aaa()
// const sellButton = document.getElementById("sellButton")

}
// const sellButton = document.getElementById("sellButton")

function aaa(){

    for (let i = 0; i < buttonArr.length ; i++) {
        buttonArr[i].onclick = () => {

            money += sellPrice
            moneyDiv.innerHTML = `Money ${money}`
            // bigBox.innerHTML = ``
            delete iconsArr[i]
            iconsArr = iconsArr.filter(n => n)
            console.log(iconsArr)
            bigBox.innerHTML = ''
            for (let j = 0; j <  iconsArr.length; j++) {
                bigBox.innerHTML += `<i class="${iconsArr[j]}"></i> <button id="sellButton">Sell</button>`

            }
                 }
    }
}