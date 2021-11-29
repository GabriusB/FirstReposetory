
const sizeInp = document.querySelectorAll(".size input")
const borderInput = document.querySelectorAll(".borderInputs input")
const borderRadius = document.querySelector(".borderRadius input")
const category = document.querySelector(".category input")
const subCategory = document.querySelector(".subCategory input")
const bgColor = document.querySelectorAll(".bgColor div")
const createButton = document.querySelector(".createButton")
const padding = document.querySelector(".padding input")
const margin = document.querySelector(".margin input")
const contentButton = document.querySelector(".contentButton")
const galleryButton = document.querySelector(".galleryButton")
const errorMessage = document.querySelector(".errorMessage")
const cardPreview = document.querySelector(".cardPreview")
const cardGallery = document.querySelector(".cardGallery")

let createdCard = null
let selectedColor = null

function selectColor(target) {
    bgColor.forEach(x => x.classList.remove('selected'))
    target.classList.add("selected")
}
function colorClicked(e) {
    const colorClass = e.target.classList[0]
    selectColor(e.target)
    selectedColor = colorClass
}

bgColor.forEach((x, i) => x.onclick = colorClicked)
createButton.addEventListener("click", appendCard)
function appendCard() {
    const card = document.createElement("div")
    if (selectedColor === "bgRed"){
        card.style.backgroundColor = "red"
    }else if (selectedColor === "bgBlue") {
        card.style.backgroundColor = "blue"
    }else if (selectedColor === "bgGreen") {
        card.style.backgroundColor = "green"
    }else if (selectedColor === "bgViolet") {
        card.style.backgroundColor = "violet"
    }
    card.style.height = sizeInp[0].value+"px"
    card.style.width = sizeInp[1].value+"px"
    card.style.border = `${borderInput[0].value}px`
    card.style.border = `${borderInput[0].value}px ${borderInput[1].value}`
    card.style.border = `${borderInput[0].value}px ${borderInput[1].value} ${borderInput[2].value}`
    card.style.borderRadius = `${borderRadius.value}%`
    card.style.padding = `${padding.value}px`
    card.style.margin = `${margin.value}px`
    card.style.overflow = "hidden"
    createdCard = card
    cardPreview.appendChild(card)
}

const host = `http://167.99.138.67:8281/random/`
contentButton.onclick = () => {
    errorMessage.innerText = ""

    fetch(host + category.value + "/" + subCategory.value + "/")
        .then(res => res.json())
        .then(data => {
            if (data.success === false) {
                errorMessage.innerText = data.message
            }
            if (data.item.includes("http")) {
                createdCard.innerHTML += `
                   <img class="cardImg" src="${data.item}" alt="">                
                    `
            }
            if (!data.item.includes("http")) {
                createdCard.innerHTML += `
                     <h3 class="d-flex">${data.item}</h3>
                     `
            }
        })

}

galleryButton.addEventListener("click", () => {
    cardGallery.appendChild(createdCard)
})

