//Funkcijos
/*
//function sayHello() {
    console.log(`Hello`)
}

//const fun = () => function (){         --- anon function
    console.log(`asdasd`)
}
*/
/*
function name () {
    console.log(`Gabrielius`)
}

name()

function city () {
    console.log(`Vilnius`)
}
city()


function age () {
    console.log(`28`)
}
age()
*/

/*
function sayName (Name, City, Color) {
    console.log(Name, City, Color)
}
sayName(`Gabrielius`, `Vilnius`, `red`)

sayName(`Tomas`, `Kaunas`, `blue`)

sayName(`Dovile`, `Klaupeda`, `yeallow`)
*/
/*
function count (num) {
    console.log(num * 77)
}

count(25)
count(55)
 */
/*
function argunment(text){
    console.log(text.length / 3)
}

argunment (`asdasdasdasddasdassda`)
argunment (`dvcxsadsadsadss`)

 */
/*
const arr = []
function  addToArr(smth) {
    arr.unshift(smth)
}
addToArr(`name`)
addToArr(`lol`)
addToArr(`Popit`)
console.log(arr)
 */

/////////////////////// FUNCTIONS //////////////////////////////////////////
/*
function  addition(smth,smd){
    console.log(smth + smd)
}

addition(3, 2)
addition(-3, -6)
addition(7, 3)
*/



////////////////////////////////////////////////////////

/*

    function addition (smth) {
        console.log(smth + 1)
    }
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2

*/

////////////////////////////////////////////////////////


/*
function getFirstValue(smone) {
    console.log(smone[0])
}
getFirstValue([1, 2, 3])
getFirstValue([80, 5, 100])
getFirstValue([-500, 0, 50])
*/


/////////////////////////////////////////////////////////

/*
function howManySeconds (sm) {
    console.log(sm * 60 * 60)
}
howManySeconds(2)
howManySeconds(10)
howManySeconds(24)
*/


//Write a function that returns the string "something" joined with a space " " and the given argument a.
/*
function giveMeSomething (sm) {
    console.log("something " + sm)
}
function giveMeSomething1 (sm) {
    console.log("something " + sm)
}
function giveMeSomething2 (sm) {
    console.log("something " + sm)
}

giveMeSomething("is better than nothing")// ➞ "something is better than nothing"
giveMeSomething1("Bob Jane")// ➞ "something Bob Jane"
giveMeSomething2("something")// ➞ "something something"
*/


/////////////////////////////////////////////////////////



//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
/*
function lessThanOrEqualToZero (sm){
if (sm <=0){                                                console.log(sm <=0)
    console.log(true)
} else{
    console.log(false)}
}


lessThanOrEqualToZero(5) //➞ false
lessThanOrEqualToZero(0)// ➞ true
lessThanOrEqualToZero(-2) //➞ true

*/


////////////////////////////////////////////////////////



//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
/*
function lessThan100 (sm, st){
    if (sm + st <100){
        console.log(true)
    } else{
        console.log(false)}
}

lessThan100(22, 15) ➞ true
lessThan100(83, 34) ➞ false
lessThan100(3, 77) ➞ true
*/




////////////////////////////////////////////////////

/*

//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1,num2) {
    if(num1 === num2) {
        console.log(true)
    }else {
        console.log(false)
    }
}


isSameNum(4, 8) ➞ false
isSameNum(2, 2) ➞  true
isSameNum(2, "2") ➞ false
*/


//////////////////////////////////////////////////



//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
/*
function footballPoints (win, draw, loss) {
    let result = 0
    result += win * 3
    result += draw

    console.log(result)
}

    wins get 3 points
draws get 1 point
losses get 0 points



footballPoints(3, 4, 2)
footballPoints(5, 0, 2)
footballPoints(0, 0, 1)
*/




//////////////////////////////////
// from inside the function change persons name age and add one interest
// variable "person" should stay outside the function
/*
let person = {
    name: "Andy",
    surname: 'Dandy',
    interests: ['sports', 'pc']
}
function change(){
    person.name ="Dudist"
    person.age = 25
person.interests.push(`Swimming`)
}




/////////////////////////////////////

let information = {
    jobTitle: "taxi driver",
    location: "London",
    marriedTo: "John",
    amountOfKids: '12'
}
function tellFortune(info) {
    console.log(`You will be a ${info.jobTitle} in ${info.location}, and married to ${info.marriedTo} with ${info.amountOfKids} kids.`)
}

tellFortune(information)



// pass information object to function tellFortune as argument,
// outputs your fortune to the console like so: "You will be a X in Y, and married to Z with N kids."

//////////////////////////////////////
let data = ['data1', 'data2', 'data3', 'data4']

function multi(arr){
    if (arr.length > 3) {
        console.log(arr.length * 8)
    }
}


multi(data)



// create a function which takes data as an argument, checks if data has more than 3 items
// in array, if yes multiply data array length by 8 and return the answer
///////////////////////////////
// create a function which checks if numbers (and types) are equal, return true or false
console.log(isSameNum(2,2))
console.log(isSameNum(8,21))
console.log(isSameNum(9,"9"))

function isSameNum(num1,num2 ) {
        console.log(typeof  num1)
}
 */

/*
//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert (num1,num2) {
    console.log((num1*60*60) + (num2 * 60))
}
console.log(convert(1, 3))
console.log(convert(2, 0))
console.log(convert(0, 0))



///////////////////////////////////
function calculateDogAge(age){
    console.log(`your dog will have age ${age*7}`)
}
calculateDogAge(3)
calculateDogAge(8)
calculateDogAge(12)
// write function named calculateDogAge that:
// takes 1 argumentL you puppy's age.
// calculates your dog's age based on conversion rate of 1 human year to 7 dog years.
// outputs the result to console log like so "Your doggie is (AGE) years old in dog years"
// call the function three times with different sets of values - 3, 8, 12




////////////////////////////////





//In this challenge, a farmer is asking you
//to tell him how many legs can be counted among all his animals. The farmer breeds three species:

function chickens(legs1){
    console.log(`hey dude, your animals will have legs ${legs*2} on chicken`)
}
function cows(legs2){
    console.log(`${legs*4} on cows`)
}
function pingwins(legs3){
    console.log(`${legs*2} on pingwins`)
}
chickens (2)
cows (4)
pingwins (2)

console.log(chickens()*2 + cows() *4 +pingwins() *2)


//The farmer has counted his animals and he gives you a subtotal
//for each species. You have to implement a function that returns the total number of legs of all the animals.



//Don't forget to return the result.
//The order of animals passed is animals(chickens, cows, pigs).
//Remember that the farmer wants to know the total number of legs and not the total number of animals.






function animals(chickens(), cows(), pingwins()){
    return ((chickens*2) (cows*4) + (pingwins(*2)))

}


console.log(animals(2, 3, 5))
console.log(animals(1, 2, 3))
console.log(animals(5, 2, 8))




/////////////////////////////////



*/
//Create a function that takes three arguments prob, prize, pay
// and returns true if prob * prize > pay; otherwise return false.
/*
function profitableGamble (prob, prize, pay) {
    if (prob * prize > pay)
        return "true"
}

console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0.9, 3, 2))

 */
