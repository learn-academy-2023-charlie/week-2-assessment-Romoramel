// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer: it will split all the characters 

// b) Verify and explain: since it is a string it plit the characters and seperated them

// [
//   'C', 'h', 'a', 'r',
//   'l', 'i', 'e', ' ',
//   '2', '0', '2', '3'
// ]


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: come kind of calling
// b) Verify and explain: an error popped up

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: this will call each element in the array and multiply them by 2
// b) Verify and explain: it multiplied each element in the array by 2

// [ 8, 10, 12, 14, 16 ]

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: this will call each element in the array and divide them by 2
// b) Verify and explain: i think it divided the array by 2

// [ 11, 13, 15 ]

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: it will log what is in "languages"
// b) Verify and explain:

// it logged "Javascript" but not "Ruby"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: ?
// b) Verify and explain: the output was all the callings?

Learn { student: 'George', cohort: 'Charlie', year: 2023 }