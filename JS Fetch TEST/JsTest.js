const rdmColor = document.getElementById(`randomColor`)
const resultcard = document.getElementById(`resultCard`)
const color = document.querySelectorAll(`.color`)
const addContent = document.querySelector(".addcontent")
const appendCard = document.querySelector(".appendcard")
const btnGenerateCard = document.querySelector(".generate")
const allCards = document.querySelector(".All-Card")
const previewPlace = document.querySelector(".resultCard")
const cardBasis = document.createElement("div")


let backcolor = ""
const server = "167.99.138.67:8281"

const cardArray = []

function generateCard() {

    color.forEach((x, index) =>
        x.onclick = (e) => {

            for (i = 0; i < color.length; i++) color[i].style.border = "1px solid black"
            x.style.border = "2px red black"
            backcolor = getComputedStyle(x).backgroundColor

        }
    )

    btnGenerateCard.onclick = () => {
        previewPlace.innerHTML = ""
        cardBasis.innerHTML = ""
        cardBasis.style = null


        if (input[0].value == 0 || !input[0].value || input[1].value == 0 || !input[1].value) {
            error.innerHTML = `No card without height or width`
            return
        }
        error.innerHTML = `&nbsp`

// ** susidedam kortele

        cardBasis.style.backgroundColor = backcolor
        cardBasis.style.height = `${input[0].value}px`
        cardBasis.style.width = `${input[1].value}px`
        cardBasis.style.border = `${input[2].value}px ${input[3].value} ${input[4].value}`
        cardBasis.style.borderRadius = `${input[5].value}px`
        cardBasis.style.padding = `${input[6].value}px`
        cardBasis.style.margin = `${input[7].value}px`
        cardBasis.style.overflow = "hidden"

        previewPlace.appendChild(cardBasis)

        appendContent()

    }

}

function appendContent() {
    addContent.onclick = () => {
        let category = input[8].value
        let subcategory = input[9].value
        if (!category || !subcategory) {
            error.innerHTML = "You need input category <br>and subcategory values"
            return
        }
        fetch(`http://${server}/random/${category}/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                error.innerHTML = `&nbsp`

                if (!data.success) {
                    error.innerText = data.message
                    return
                }
                if (data.item.includes("http")) {
                    cardBasis.innerHTML += `<img src="${data.item}" alt="no image"> <br>`
                    //console.log ("paveiksliukas")
                } else {
                    //console.log ("tekstukas")
                    cardBasis.innerHTML += data.item + "<br>"
                }

            })
        appendCardFunction()
    }
}

function appendCardFunction() {
    appendCard.onclick = () => {

        cardArray.push(cardBasis.cloneNode(true)) // korteles noda reikia klonuoti (kad liktu abiejuose div'uose), nes kitaip su appendChild() sokineja tarp div'u
        allCards.innerHTML = ""
        cardArray.map(x => {
            allCards.appendChild(x)

        })

    }

}

generateCard()

clearButton.onclick = () => {

    previewPlace.innerHTML = ""
    cardBasis.innerHTML = ""
    backcolor = ""
    cardBasis.style = null
    for (i = 0; i < btnColor.length; i++) btnColor[i].style.border = "1px black solid" // nusiimam mygtuko paspaudimo zymekli
    input.forEach(x => x.value = "")

}
