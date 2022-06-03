const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

// Adding some commands to yargs
// Add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note boody',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        // console.log('Title: '+ argv.title+' , Body:'+argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        notes.removeNote(argv.title)
    }
})
// List command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing notes')
    }
})
// Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})
// console.log(yargs.argv)
yargs.parse()
