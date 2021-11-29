
///////////////////////////////////////////////


/*
Write a function that stutters a word as if someone is
struggling to read it. The first two letters are
repeated twice with an ellipsis ...
and space after each, and then the word is pronounced with a question mark ?.
 */
/*
function stutter(str){
    console.log(`${str[0]+str[1]}... ${str[0]+str[1]...} ${str}?`)
}

stutter("incredible") //➞ "in... in... incredible?"
stutter("enthusiastic") //➞ "en... en... enthusiastic?"
stutter("outstanding") // ➞ "ou... ou... outstanding?"

 */


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

function relationToLuke(name) {
    if ("darth Vader" === name) {
        console.log("luke i am your father")
    }
    if ("Leia " === name) {
        console.log("Luke, I am your sister.")
    }
    if ("Han" === name) {
        console.log("Luke, I am your brother in law.")

    }
}

relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."


/////////////////////////////////////////////////////////////


// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2
    }
    console.log(arr)
    }


getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

 */



///////////////////////////////////////////////////////////////


// Create a function that takes an array of words and transforms it into an array of each word's length.


///////////////////////////////////////////////
/*
Write a function that stutters a word as if someone is
struggling to read it. The first two letters are
repeated twice with an ellipsis ...
and space after each, and then the word is pronounced with a question mark ?.
 */

//
// ///////////////////////////////////////////////////////////////
//
// // Create a function that takes an array of words and transforms it into an array of each word's length.
//
//
//
/*

function wordLengths(words) {
    const arr = []
    for (let i = 0; i < words.length; i++) {
        arr.push(words[i].length)
    }
    // console.log(arr)

    console.log( words.map(word => word.length) )
}

wordLengths(["hello", "world"])
wordLengths(["Halloween", "Thanksgiving", "Christmas"])
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])


*/
/*
function wordLengths(words){
const arr = []
for (let i = 0; i < words.length; i++)
arr.push(words[i].length)
    console.log(item(item.length-1))
}
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])

*/
/*
// Create a function that returns the string "Burp"
// with the amount of "r's" determined by the input parameters of the function.

function longBurp(num) {

    for (let i = 0; i < num; i++) {

        let word = "bu"
    }





}

longBurp(3) ➞ "Burrrp"
longBurp(5) ➞ "Burrrrrp"
longBurp(9) ➞ "Burrrrrrrrrp"



/////////////////////////////////////////////////////////////////////////////////////////////



// Create a function that takes a number and return an array
// of three numbers: half of the number, quarter of the number and an eighth of the number.
function halfQuarterEighth(num){
        console.log((num/2,num / 4, num /8))
}


halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]




////////////////////////////////////////////////////////



// For each of the 6 coffee cups I buy, I get a 7th cup free.
// In total, I get 7 cups. Create a function that takes n cups
// bought and return as an integer the total number of cups I would get.
function totalCups(num){
    console.log(`i would got ${num+ math.floor(num/6)}`)
}


totalCups(6) ➞ 7
totalCups(12) ➞ 14
totalCups(21.3) ➞ 248



//////////////////////////////////////////////////////////



// Create a function that takes a string and returns a string with spaces in between all of the characters.
/
function spaceMeOut(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        newStr += str[i] + " "
    }
}


spaceMeOut("space") ➞ "s p a c e"
spaceMeOut("far out") ➞ "f a r  o u t"
spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"




///////////////////////////////////////////////////////////


 */

/*
// Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
    let sum = 0
    let newArr = arr.map(x => sum += x)
    console.log(newArr)
}
getSumOfItems([2, 7, 4])
getSumOfItems([45, 3, 0])
getSumOfItems([-2, 84, 23])
/////////////////////////////////////////////////////////
// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).

function isInRange(num, obj) {
    if(obj.min <= num && obj.max >= num) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isInRange(4, { min: 0, max: 5 })
isInRange(4, { min: 4, max: 5 })
isInRange(4, { min: 6, max: 10 })
isInRange(5, { min: 5, max: 5 })
//
//
// ////////////////////////////////////////////////////////////
//
// //Create a function that returns an array of booleans from a
// // given number by iterating through the number one digit
// // at a time and appending true into the array if the digit is 1 and false otherwise.
function integerBoolean(str) {
    const arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i] === "1")
    }
    console.log(arr)
}
integerBoolean("100101")
// integerBoolean("10")
// integerBoolean("001")
//
// /////////////////////////////////////////////////////////
//
//
// // Create a function that returns the number of syllables in a
// // simple string. The string is made up of short repeated words
// // like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(str) {
    str = str.toLowerCase()
    const startEls = str[0]+str[1]
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] + str[i+1] === startEls) {
            counter++
        }
    }
    console.log(counter)
}

countSyllables("Hehehehehehe")
countSyllables("bobobobobobobobo")
countSyllables("NANANA")


 */
//Create a function which returns the length of a string, WITHOUT using String.length property.
/*
function length (str){
    str = str.toLowerCase()
    const starEls = str[0]
    let counter = 0
    for (let i = 0; i < str[i]; i++) {
        if (str[i] === startEls){
            counetr++
        }

    }
}



length("Hello World") //➞ 11



length("Edabit") //➞ 6



length("wash your hands!") //➞ 16



//////////////////////////////////////////////////////////



// Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):



//"one"        1
//"two"        2
//"three"    3
//"four"    4
//"five"    5
//"six"        6
//"seven"    7
//"eight"    8
//"nine"    9
//"zero"    0

function word (str) {
    const arr = ["one","two","three", "four", "five", "six", "seven", "eight", "nine", "zero"]
    console.log(arr.indexOf(str))
}


word("one") //➞ 1



word("two") //➞ 2



word("nine") //➞ 9




///////////////////////////////////////////////////////////



//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr){
arr.map(x =>{
    if(Number.isInteger(x)) {
        numbers.push(x)
    }
    })
    console.log(numbers)
}


filterArray([1, 2, 3, "a", "b", 4]) //➞ [1, 2, 3, 4]



filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //➞ [0, 1729]



filterArray(["Nothing", "here"]) //➞ []



///////////////////////////////////////////////////////////



// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function go(num) {

    if (num > 1)
    let str = ""

    for (let i = 0; i < num; i++) {
        str = "-"
    }
    console.log(str)
}


Go(1) //➞ "-"



Go(5) //➞ "-----"



Go(3) //➞ "---"



//////////////////////////////////////////////////////////



// Create a function that adds a string ending to each member in an array.
function addEnding(arr){
    //for (let i = 0; i < arr.length; i++) {
    //    arr[i] = arr[i] + ending
    //}


    const result = arr.map(word => word+ending)
    console.log(result)
}


addEnding(["clever", "meek", "hurried", "nice"], "ly")
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]



addEnding(["new", "pander", "scoop"], "er")
//➞ ["newer", "panderer", "scooper"]



addEnding(["bend", "sharpen", "mean"], "ing")
//➞ ["bending", "sharpening", "meaning"]



 */


/////////////////////////////////////////////////////////

/*


//Create a function to multiply all of the values in an array by the amount of values in the given array.
function multiplyByLength (arr){
let  sum = 0
let newArr = arr.map(x=> sum *= x)
    console.log(newArr)
    }



multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]
multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])
multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞  [7, 0, 21, 21, 49, 14, 7]
multiplyByLength([0]) //➞ ([0])



/////////////////////////////////////////////////////////



// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
function countdown(num) {
    if(num >= 1 && num <= 5) {
        let str = ""
        for (let i = 0; i < num; i++) {
            str += number
        }
        console.log(str)
    } else {
        console.log("BAND NUMBER")
    }

}





countdown(5) //➞ [5, 4, 3, 2, 1, 0]

countdown(1) //➞ [1, 0]

countdown(0) //➞ [0]



///////////////////////////////////////////////////////





// Create a function that takes two arguments (item, times). The first argument (item) is the item
// that needs repeating while the second argument (times) is the number of times the item is
// to be repeated. Return the result in an array.

function repeat(str,x){
    let newarr = [];
    for (let i = 0; i <x ; i++) {
        newarr.push(str)
    }
    console.log(newarr)
}

repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]

repeat(13, 5) //➞ [13, 13, 13, 13, 13]

repeat("7", 2) //➞ ["7", "7"]

repeat(0, 0) //➞ []



////////////////////////////////////////////////////


*/
//In this exercise you will have to:





//Take a list of names.
//Add "Hello" to every name.
//Make one big string with all greetings.
//The solution should be one string with a comma in between every "Hello (Name)".
function greetPeople (arr){
    const result = arr.map(word => "Hello MATHER FUCKER OHHHH " + word)

    console.log(result)
}


greetPeople(["Joe"]) //➞ "Hello Joe"

greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"

greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"









