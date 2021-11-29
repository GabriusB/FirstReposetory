/*const arr = [1,4,1,5324,423,54,765,345,765]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 10)
}
*/

/*
for (let i = 0; i < 30; i++) {
    if (i > 20) {
        console.log(`cycle index is (CYCLE ID) ${i}`)
    }
}

 */
/*
let arrayOfBooleans = [true, false, false, true, true, true, false]
    console.log(arrayOfBooleans)

for (let i = 0; i < arrayOfBooleans.length; i++) {
    arrayOfBooleans[i] = !arrayOfBooleans[i]                                        ???
}
    console.log(arrayOfBooleans)
 */


// goe through array with for loop, if string is 'black mamba' console log
// "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"


/*
let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth']

for (let i = 0; i < getIndex.length; i++) {

    if(getIndex[i] === "black mamba"){
        console.log()${getIndex[i] is ${i}}


}

/////////////////////////////////////////



// create a functions which accepts array data as an argument,
// loops over all items in array and console logs each of them



let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']

function logItems(arr)   {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])

    }
}
logItems(arrayOfStrings)
logItems([123,321,123,432,543,2])


//////////////////////////////////////////////////////



// in function loop over numbers in array multiply each by 3
// console log answer



let arrayOfNumbers = [1, 2, 3, 4, 5, 6,7,8,9]
for (let i = 0; i < arrayOfNumbers; i++)

    function multi() {
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            console.log(arrayOfNumbers[i] * 3)
        }
    }
    
 */


// create function do this in it:
// with single for loop removes items from wagonsWIthCoal
// and append them to wagonsOfGasoline after this done
// check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// do the same with gasolineCargo key
// console log modified object
/*


let freightTrain = {
    wagonsWithCoal: [1,2,3,4,5],
    coalCargo: true,
    wagonsOfGasoline: [],
    gasolineCargo: false
}

function coal() {
    const dataLen = freightTrain.wagonsWithCoal.length

    for (let i = 0; i < dataLen; i++) {
        freightTrain.wagonsOfGasoline.push(freightTrain.wagonsWithCoal.shift())
        console.log(freightTrain.wagonsWithCoal)
    }


    if(freightTrain.wagonsWithCoal.length < 1) {
        freightTrain.coalCargo = !freightTrain.coalCargo
    }
    if(freightTrain.wagonsWithCoal.length < 1) {
        freightTrain.gasolineCargo = !freightTrain.gasolineCargo
    }
}


coal()
//////////////////////////////////////////////////



// crete a function which takes textObject.arrayWithWords as an argument
// goe through array with words using for loop
// take first letter of each word and add to aWord key in textObject
// console log aWord key after all is done



let textObject = {
    arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
    aWord: ''
}

function  doSome(arr) {
    for (let i = 0; i < arr.length; i++) {
        textObject.aWord += arr[i][0]
    }

}

doSome(textObject.arrayWithWords)

console.log(textObject)
 */


// Create a function that takes in a word and determines
// whether or not it is plural. A plural word is one that ends in "s".
/*
function isPlural(word){
    return word[ word.length - 1] === "s"
}


console.log(isPlural("changes"))
console.log(isPlural("change"))
console.log(isPlural("dudes"))
console.log(isPlural("magic"))



/////////////////////////////////////////////////



// Create a function that takes a string (a random name).
// If the last character of the name is an "n", return true, otherwise return false.
function isLastCharacterN(word){
    return word[word.length - 1 === "n"]
}

console.log(isLastCharacterN())

isLastCharacterN("Aiden")
isLastCharacterN("Piet")
isLastCharacterN("Bert")
isLastCharacterN("Dean")



//////////////////////////////////////////////



// A typical car can hold four passengers and one driver,
// allowing five people to travel around. Given n number of people,
// return how many cars are needed to seat everyone comfortably.

function carsNeeded(num) {
    const carsNeeded =Math.ceil(num / 5)

    //math.imul
    //round - i daugiau
    //ceil
    //floor





    console.log(math.round(carsNeeded))
}

carsNeeded(5)
carsNeeded(11)
carsNeeded(0)



///////////////////////////////////////////////



// Create a function that takes an array and a string as arguments and return the index of the string.

function findIndex(arr,str) {
    console.log(arr.indexOf(str))

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            console.log()
        }
    }
}

findIndex(["hi", "edabit", "fgh", "abc"], "fgh")
findIndex(["Red", "blue", "Blue", "Green"], "blue")
findIndex(["a", "g", "y", "d"], "d")
findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")

 */


//////////////////////////////////////////////
/*


// Create a function to concatenate two integer arrays.

function concat(num, num2){
    console.log(num.concat(num2))
}

concat([1, 3, 5], [2, 6, 8])
concat([7, 8], [10, 9, 1, 1, 2])
concat([4, 5, 1], [3, 3, 3, 3, 3])



//////////////////////////////////////////////////



// Write a function to check if an array contains a particular number.

function check(arr,num){
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === num){
            counter = counter + 1;
        }
    }
    console.log(`skaicius ${num} kartojasi ${counter} `)
}

check([1, 2, 3, 4, 5], 3)
check([1, 1, 2, 1, 1], 3)
check([5, 5, 5, 6], 5)
check([], 5)



///////////////////////////////////////////////



// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.

function search(arr,num) {
    for (let i = 0; i < arr.length; i=i+1) {
        if (arr[i] === num) {
            console.log(i)
        }
    }
}

search([1, 2, 3, 4], 3)
search([2, 4, 6, 8, 10], 8)
search([1, 3, 5, 7, 9], 11)

/////////////////////////////////////////////////

// Create a function that returns true if a string contains any spaces.


function hasSpaces(str) {
    console.log(str.includes(" "))
}
hasSpaces("hello")
hasSpaces("hello, world")
hasSpaces(" ")
hasSpaces("")
hasSpaces(",./!@#")
// ///////////////////////////////////////////////////////
//
// // Given two arrays, which represent two sandwiches, return whether
// // both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

function hasSameBread(arr1, arr2) {
    if(arr1[0] === arr2[0] && arr1[2] === arr2[2] && arr1[0] === arr1[2]) {
        console.log("SUTAMPA")
    } else {
        console.log("NESUTAMPA")
    }
}
hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
)
hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
)
hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
)
//
// //////////////////////////////////////////////////////
//
// /*
//
// Create a function that takes an object
// as an argument and returns a string with facts about
// the city. The city facts will need to be extracted
// from the object's three properties:
//
// name
// population
// continent
//
// The string should have the following format:
// X has a population of Y and is
// situated in Z (where X is the city name,
// Y is the population and Z is the continent the city is situated in).
//
//  */
/*
function cityFacts(obj) {
    console.log(`${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`)
}
cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
})
cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
})
//
// //////////////////////////////////////////////////////
//
// //Creates a function that takes a string and returns the concatenated first and last character.
function firstLast(str) {
    console.log(str[0] + str[str.length-1])
}
firstLast("ganesh")
firstLast("kali")
firstLast("shiva")
firstLast("vishnu")
firstLast("durga")
*/


// write a function which takes obj.numbers as an argument, gets fourth number in numbers array with for loop
// rounds it to Ceil and puts to obj.roundedCeil, rounds it to floor and puts to obj.roundedFloor
/*

function take(numbs) {
    obj.roundedFloor = math.floor(numers[3])
    {
        for (let i = 0; i < numbs.length; i++) {
            if (i === 3) {
                obj.roundedCeil = math.ceil(num[i])
                obj.roundedFloor = math.floor(num[i])
            }
        }
    }

}

take(obj.numbers)
console.log(obj)


let obj = {
    numbers: [1.1, 5.3, 6.68, 3, 2.5, 10.1],
    roundedCeil: null,
    roundedFloor: null
}


///////////////////////////////////////////


// check if stringVariable includes word 'doing' if yes create a function
// which takes stringVariable as an argument and counts how many spaces it has
// call that function


let stringVariable = "Hello people, how are you doing ?"

if (stringVariable.includes("doing")) {
    function doSome() {
        let counter = 0

        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ") {
                counter++
            }
        }
    }

    console.log(counter)
}

doSome(stringVariable)


///////////////////////////////////////////


// create a function which goes through array rounds all numbers to Ceil and returns array
// with rounded numbers

let arrayOfNumbers = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]


function roundThem(arr) {
    const arr = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        arr.push(math.ceil(arrayOfNumbers[i]))
    }
    console.log(arr)
}

roundThem(arrayOfNumbers)
//////////////////////////////////////////////


// create function which takes objectWithKeys as argument ant check which key includes
// word 'actually' in array, make function to return string "{key name} has actually in array"


let objectWithKeys = {
    firstOne: ['hi', 'what', 'is', 'good'],
    second: ['im', 'doing', 'pretty', 'well'],
    third: ['me', 'too', 'actually']

/*
    function start(obj)
{
    if (obj.firstOne.includes(`actually`)) {
        console.log(`forstOne has actually on array`)
    }
    if (obj.firstOne.includes(`actually`)) {
        console.log(`forstOne has actually on array`)
    }
    if (obj.firstOne.includes(`actually`)) {
        console.log(`forstOne has actually on array`)
    }
}
}

 */

/*
start(objectWithKeys)









function  start(obj)
{


    const Keys = object.keys(obj)

    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]].includes(`actally`)) {
            console.log(`${keys[i]} has actually in array`)
        }
    }

}

 */






///////////////////////////////////////////////



/*
Write a function that stutters a word as if someone is
struggling to read it. The first two letters are
repeated twice with an ellipsis ...
and space after each, and then the word is pronounced with a question mark ?.
 */

/*

stutter("incredible") ➞ "in... in... incredible?"
stutter("enthusiastic") ➞ "en... en... enthusiastic?"
stutter("outstanding") ➞ "ou... ou... outstanding?"




///////////////////////////////////////////////////////////



// Luke Skywalker has family and friends. Help him remind them who is who.
// Given a string with a name, return the relation of that person to Luke.



/*



Person               Relation
Darth Vader    father
Leia            sister
Han            brother in law
R2D2            droid



 */
/*


relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."




 */
/////////////////////////////////////////////////////////////



// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

/*
function getMultipliedArr (num){
    console.log(num * 2)

}


getMultipliedArr([2, 5, 3])
getMultipliedArr([1, 86, -5])
getMultipliedArr([5, 382, 0])




///////////////////////////////////////////////////////////////


/*
// Create a function that takes an array of words and transforms it into an array of each word's length.



wordLengths(["hello", "world"]) ➞ [5, 5]
wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

//*
