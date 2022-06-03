const fs = require('fs')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note added!")
    } else {
        console.log("Note title taken!")
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    const newNotes = notes.filter(function(note){
        return note.title !== title
    })
    if(newNotes.length === notes.length){
        console.log('Note does not exist!')
    }else {
        saveNotes(newNotes)
        console.log("Note Removed!")
    }
    
}

const saveNotes = function (notes) {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes = function () {
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
    removeNote: removeNote
}