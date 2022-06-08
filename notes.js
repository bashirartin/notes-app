const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes = function () {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter(note => note.title !== title)
    if(newNotes.length === notes.length){
        console.log(chalk.red.inverse('Note does not exist!'))
    }else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse("Note Removed!"))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.green.inverse('Your notes...'))
        notes.forEach(note => console.log(chalk.yellow.inverse.underline(note.title+': '+ note.body)))
    } else {
        console.log(chalk.red.inverse.bold.underline('There is no note in your list!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const read = notes.find(note => note.title === title)

    if (read) {
        console.log(chalk.inverse('Your note '))
        console.log(chalk.blue.inverse(read.title+': '+read.body))
    } else {
        console.log(chalk.red.inverse('There is no such note! '))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}