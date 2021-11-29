

const gameScreen = document.getElementsByClassName("container")
const shopScreen = document.getElementsByClassName("shopContainer")

//Priesas
const enemyarr = [
    {
        name: "Kyle",
        img: "http://pm1.narvii.com/7218/2646bec55687e10453f2c713da6b3a277a5ad7e4r1-513-595v2_uhq.jpg",
        maxDamage: 12
    },
    {
        name: "Troll",
        img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
        maxDamage: 8
    },
    {
        name: "Witch",
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-02/4/11/enhanced/webdr02/enhanced-17159-1423068265-32.jpg?output-quality=auto&output-format=auto&downsize=640:*",
        maxDamage: 15
    }
]
const enemyImg = document.getElementById("enemyImg")
const enemyName = document.getElementById("enemyName")
const enemyHp = document.getElementById("enemyHp")
let enemyHpValue = 100
let enemyCounter = 0
let enemyMaxDamage = null
let enemyDead = false

//Playeris
const playerHp = document.getElementById("playerHp")
let playerHpValue = 100
let playerMaxDamage = 13
let playerDead = false

//buttoonai
const attackButton = document.getElementById("attack")
const toshopButton = document.getElementById("shop")
const backToGameButton = document.getElementById("backToGame")

//Ginklai
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
const weaponBox = document.querySelectorAll(".weaponBox")
weaponBox[0].style.backgroundImage = `url("${weapons.sword.img}")`
weaponBox[1].style.backgroundImage = `url("${weapons.magicWand.img}")`
weaponBox[2].style.backgroundImage = `url("${weapons.bow.img}")`
let equiped = null

//gold
const goldShow = document.getElementsByClassName("gold")
let gold = 0

//Potion
const itemBox = document.getElementById("itemBox")
const potionButton = document.querySelector(".potion")
let havePotion = false




toshopButton.onclick = () =>{
    gameScreen[0].style.display = "none"
    shopScreen[0].style.display = "flex"
}
backToGameButton.onclick = () =>{
    shopScreen[0].style.display = "none"
    gameScreen[0].style.display = "flex"
}

potionButton.onclick = () =>{
    if (havePotion === false && gold >= 50){
        gold -= 50
        havePotion = true
        itemBox.style.backgroundImage = `url("${weapons.potion.img}")`
        potionButton.style.display = "none";
        goldShow[0].innerText = `Gold: ${gold}`
        goldShow[1].innerText = `Gold: ${gold}`

    }
}
itemBox.onclick = () =>{
    if (havePotion === true){
        havePotion = false
        itemBox.style.backgroundImage = "none";
        potionButton.style.display = "block";
        playerHpValue = 100;
        updateHp()
    }
}

function reset() {
    playerDead = false
    enemyDead = false
}
function updateHp(){
    enemyHp.style.width = `${enemyHpValue}%`
    playerHp.style.width = `${playerHpValue}%`
}

function addenemy() {
    enemyCounter = Math.floor(Math.random()*enemyarr.length)
    enemyHpValue = 100;
    enemyImg.style.backgroundImage = `url("${enemyarr[enemyCounter].img}")`
    enemyName.innerText = `${enemyarr[enemyCounter].name}`
    enemyHp.style.width = `${enemyHpValue}%`
    enemyMaxDamage = enemyarr[enemyCounter].maxDamage
    enemyCounter++
}
function addgold(){
    gold += Math.round(Math.random()*6)+1
    goldShow[0].innerText = `Gold: ${gold}`
    goldShow[1].innerText = `Gold: ${gold}`
    console.log(gold)
}

for (let i = 0; i < weaponBox.length; i++) {
    weaponBox[i].onclick = () =>{
        weaponBox.forEach(x => x.style.border = "1px solid black")
        weaponBox[i].style.border = "3px solid green"
        if(i === 0){equiped = 0}
        else if(i === 1){equiped = 1}
        else if(i === 2){equiped = 2}
        console.log(equiped)
    }
}
function swordEffect(){
    let chance = Math.round(Math.random()*3)+1
    console.log(chance)
    if (chance === 4){
        console.log("dodge")
    }else{
        counter();

    }
}
function wandEffect(){
    let chance = Math.floor(Math.random()*5)+1
    console.log(chance)
    setTimeout(() =>{
        playerHpValue+= chance
        updateHp()
    },400)
}
function bowEffect(){
    let chance = Math.floor(Math.random()*2)+1
    if (chance === 2){
        attack()
        setTimeout(attack, 500)
        console.log("double Attack man!")
    }else{
        attack()
    }
}
attackButton.onclick = () => {
    if (equiped === 0){// sword
        setTimeout(attack, 50)
        setTimeout(swordEffect,300)
    }
    else if (equiped === 1){
        setTimeout(attack, 50)
        setTimeout(counter, 300 )
    }
    else if (equiped === 2){
        bowEffect()
        setTimeout(counter, 600 )
    }
    else{
        setTimeout(attack, 50)
        setTimeout(counter, 300 )
    }
}

function attack(){
    if (playerHpValue > 0 && enemyHpValue > 0){
        let damageByPlayer = (Math.round(Math.random() * playerMaxDamage) + 1)
        if (enemyHpValue > damageByPlayer) {
            enemyHpValue -= damageByPlayer
            updateHp()
            addgold()
        } else {
            enemyHpValue = 0
            enemyHp.style.width = `0%`
            console.log(enemyDead)
            addenemy()
            reset()
        }
    }
}

function counter(){
    if (playerHpValue > 0 && enemyHpValue > 0){
        let damageByEnemy = (Math.round(Math.random() * enemyMaxDamage) + 1)
        if (playerHpValue > damageByEnemy) {
            if (equiped === 1){
                wandEffect()
            }
            playerHpValue -= damageByEnemy
            updateHp()
        } else {
            playerHpValue = 0
            playerHp.style.width = `0%`
            console.log(playerDead)
        }
    }


}

addenemy()