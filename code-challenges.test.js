// ASSESSMENT 2: Coding Practical Questions with Jest

const { captureRejectionSymbol } = require("events")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided. 

    describe("multiplesOfThree", () => {
        it("returns values mulptipled by 3", () => {
            expect(multiplesOfThree([6, 7, 8, 9, 10])).toEqual([18, 21, 24, 27, 30])
            expect(multiplesOfThree([24, 27, 30, 33, 36])).toEqual([72, 81, 90, 99, 108])
        })
    })

const numbersArray1 = [6, 7, 8, 9, 10]

    const multiplesOfThree = (Array) => {
    return Array.map((number) => number * 3)
}
    console.log(multiplesOfThree(numbersArray1))

// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

console.log(multiplesOfThree(numbersArray2))

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

describe('DIVISIBLEBYTHREE', () => {
    it('takes an object as an argument and decides is the number inside it is evenly divisdible by three or not', () => {
        const object1 = { number: 15 };
        const object2 = { number: 0 };
        const object3 = { number: -7 };
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is divisible by three")
    })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const divisibleByThree = (object) => {
    if(object.number % 3 === 0) {
        return '${object.number} is divisible by three'
    }
}
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

describe('capArr', () => {
    it('takes an array and makes all words capital', () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        expect(capArr(randomNouns1)).toEqual(["streetlamp", "potato", "teeth", "conclusion", "nephew"])
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
        expect(capArr(randomNouns2)).toEqual (["temperature", "database", "chopsticks", "mango"])
     })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const capArr = (array) => {
    return array.map((value) => value.chart(0).toUppercase() + value.slice(1))
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

it('takes in a string and logs the index of the first vowel', () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    expect(first(vowelTester1)).toEqual(1)
    expect(first(vowelTester2)).toEqual(0)
    expect(first(vowelTester3)).toEqual(2)
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const firstV = (array) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < array.length; i++) {
        if(vowels.includes(array[i])) {
            return i
        }
    }
    return-1
}
