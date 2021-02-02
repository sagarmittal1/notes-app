// const add = require('./utils')
// const sum = add(4, -1)
// console.log(sum)

const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')
const yargs = require('yargs')

// const msg = getNotes()
// console.log(msg)

// // console.log(validator.isURL('sagar.ninja'))
// console.log(chalk.bgRed('I am Cyan'))

const command = process.argv[2]

// if (command === 'add') {
//     console.log("Adding Notes...")
// } else if (command === 'remove') {
//     console.log("Deleting note.....")
// }

console.log(process.argv)
console.log(yargs.argv)