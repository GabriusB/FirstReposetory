let enemies = [
    {
        name: "Goblin",
        img: "https://i.imgur.com/yBh7Fn4.png",
        maxDamage: 12
    },
    {
        name: "Troll",
        img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
        maxDamage: 8
    },
    {
        name: "Witch",
        img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
        maxDamage: 15
    }
]

let weapons = {
    sword: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjeRzenAFh9nuqc0sexfw63azpjKmulkubHg&usqp=CAU",
        damage: 10,
        effect: 'gives player 25% chance to doge enemy attacks'
    },
    magicWand: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYLtdkk7fwbEwdjNpuL0Oo1ka5A7z0PhL34Q&usqp=CAU",
        damage: 12,
        effect: 'heals player on every enemy hit from 0 to 5 hit points'
    },
    bow: {
        img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
        damage: 7,
        effect: 'has a 50% chance to hit enemy two times in a row'
    },
    potion: {
        img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
        info: "can be bought from shop for 50 coins, recovers player health when bought",
    }
}


const button = document.querySelector(".Attack")
const images = document.querySelectorAll("img")
const computerHP = document.querySelector(".ComputerHHPP")
const power1 = document.querySelector(".P1")
const power2 = document.querySelector(".P2")
const power3 = document.querySelector(".P3")

//Player
const PlayerHP = document.querySelector(".PlayerHHPP")
let playerHp = 100
let playerMaxDamage = 13
let playerDead = false

let enemyHp = 100

//gold
const coinsShow = document.querySelector(".coins")
let coins = 0

function addgold() {
    coins += Math.round(Math.random()*6)+1
    coinsShow.innerText = `Coins: ${coins}`
    console.log(gold)
}

function attack() {
    if (playerHp > 0 && enemyHp >0){
        let enemyDamage = (MAth.round(Math.random() * playerMaxDamage) +1)
    }   if (enemyHp > enemyDamage) {
        enemyHp -= enemyDamage
        updateHp()
        addgold()
    }
}





const randomNum =(num) => {
    return Math.round(Math.random()*num)
}
button.onclick = () =>{
    const playerDamage = randomNum (93)
    const enemyDamage = randomNum(12)


    enemyHp -= playerDamage
    playerHp -= enemyDamage



    updateHp()
    changeEnemy()


}


function updateHp () {
    computerHP.style.width = enemyHp + "%"
    PlayerHP.style.width = playerHp + "%"
}
function changeEnemy() {
    if(enemyHp <= 0) {
        const randomEnemyIndex = randomNum(enemies.length)
        enemyHp = 100
        images[1].src = enemies[randomEnemyIndex].img
        updateHp()
    }
}
function changeGun () {
    if (power1) {}
}






























