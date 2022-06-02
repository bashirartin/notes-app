const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

yargs.version('1.1.0')

// Adding some commands to yargs
// Add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function(){
        console.log('Adding a note')
    }
})
// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
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
console.log(yargs.argv)
