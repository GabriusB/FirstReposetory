const shopmenu = document.querySelector(".shopenu")
const shopcard = document.querySelector(".shopcard")

function appenddComments(arr){
    arr.map(x => {
        shopcard.innerHTML += `
        <div class="post" id="${x.id}">
                <h1>${x.title}</h1>
                <h2>${x.image}</h2>
                <h2>${x.price}</h2>
            </div>
        `
    })
}

async function getData(link) {
    const res = await fetch(link)
    return await res.json()
}

fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=>console.log(json))

async function getComments() {
    const id = localStorage.getItem(`postId`)
    appenddComments(id)
}

function appendPost(x) {
    container.innerHTML = `
            <div class="post" id="${x.id}">
                <h1>${x.title}</h1>
                <h2>${x.image}</h2>
                <h2>${x.price}</h2>
            </div>
        `
    const button = document.querySelector(`button`)
    button.onclick = getComments
}

