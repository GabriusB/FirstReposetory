const shop = document.querySelector(".shop")
const buyIcon = document.querySelector('button')
const moneyDiv = document.querySelector("h2")
const inventory = document.querySelector(".inventory")

let icons = [
    "fas fa-trailer",
    "fas fa-taxi",
    "fas fa-shuttle-van",
    "fas fa-motorcycle",
    "fas fa-truck-pickup",
    "fas fa-truck-monster",
    "fas fa-truck",
    "fas fa-caravan",
    "fas fa-ambulance",
    "fas fa-bus",
    "fas fa-car"
]
let prices = []
const boughtIcons = []
let money = 500
let selectedItem = null

buyIcon.onclick = () => {

    if (selectedItem !== null) {
        const iconPrice = prices[selectedItem]

        if (money >= iconPrice) {
            money -= iconPrice
            moneyDiv.innerHTML = "Money: " + money
            boughtIcons.push(icons[selectedItem])

            icons = icons.filter((x, i) => i !== Number(selectedItem))
            prices = prices.filter((x, i) => i !== Number(selectedItem))

            appendIcons(icons, false)
            appendInventory(boughtIcons)
        }

    }

}


function selectItem(target) {
    const items = document.querySelectorAll('.item')
    items.forEach(x => x.classList.remove('selected'))
    target.classList.add("selected")
}

function itemClicked(e) {
    const itemIndex = e.target.id
    selectItem(e.target)
    selectedItem = itemIndex
}

function appendInventory(arr) {
    inventory.innerHTML = ""
    arr.map(x => {
        inventory.innerHTML += `
                 <div class="item"">
                   <i class="${x}"></i>
                 </div>`
    })
}

function appendIcons(arr, generatePrice) {

    shop.innerHTML = ""

    arr.map((x, index) => {
        if (generatePrice) {
            prices[index] = Math.round(Math.random() * 80) + 20
        }

        shop.innerHTML += `
          <div class="item" id="${index}">
                <i class="${x}"></i>
                <p>${prices[index]}$</p>
            </div>`
    })

    const items = document.querySelectorAll('.item')
    items.forEach((x, i) => x.onclick = itemClicked)
}

appendIcons(icons, true)