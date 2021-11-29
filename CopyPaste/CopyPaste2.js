const container = document.querySelector(".container")
const comments = document.querySelector(".comments")

function appendComments(arr) {
    arr.map(x => {
        comments.innerHTML += `
            <div class="post" id="${x.id}">
                <h1>${x.name}</h1>
                <h3>${x.email}</h3>
                <p>${x.body}</p>
            </div>
        `
    })
}

async function getData(link) {
    const res = await fetch(link)
    return await res.json()
}

fetch("https://jsonplaceholder.typicode.com/posts/comments")
    .then(res => res.json())
    .then(data => {

    })

async function getComments() {
    const id = localStorage.getItem('postId')
    const data = await getData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    appendComments(data)
}

function appendPost(x) {
    container.innerHTML = `
            <div class="post" id="${x.id}">
                <h1>${x.title}</h1>
                <p>${x.body}</p>
                <button>Get Comments</button>
            </div>
        `
    const button = document.querySelector('button')
    button.onclick = getComments
}

async function start() {
    const id = localStorage.getItem('postId')
    const data = await getData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    appendPost(data)
}

start()