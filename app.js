// const add = require('./utils')
// const sum = add(4, -1)
// console.log(sum)

// const validator = require('validator')
// const chalk = require('chalk')
// const getNotes = require('./notes')
// const yargs = require('yargs')
// const { describe } = require('yargs')

// const msg = getNotes()
// console.log(msg)

// // console.log(validator.isURL('sagar.ninja'))
// console.log(chalk.bgRed('I am Cyan'))

// const command = process.argv[2]

// if (command === 'add') {
//     console.log("Adding Notes...")
// } else if (command === 'remove') {
//     console.log("Deleting note.....")
// }

// console.log(process.argv)

// yargs.command ({
//     command: 'add',
//     describe: 'Adda a new note',
//     handler: function () {
//         console.log("Adding a new note")
//     }
// })


// console.log(yargs.argv)

const { describe } = require('yargs')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command ({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: "Notes title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note')
    }

})

yargs.command ({
    command: 'list',
    describe: 'List out all the notes',
    handler: function () {
        console.log('Listing out all the notes')
    }
})

yargs.command ({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Reading out all the notes')
    }

})

yargs.parse()
