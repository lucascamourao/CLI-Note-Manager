// Implement all the logic 
// The only file to interact with notes.json

const fs = require('fs');
const notesJSON = fs.readFileSync('notes.json', 'utf8');

function addNote(title, body) {
    const newNote = {
      "id": 1,
      "title": title,
      "body": body,
      "createdAt": "2025-08-21T22:50:15.000-03:00"
    }

    const newNoteJSON = JSON.stringify(newNote, null, 2);

    fs.writeFileSync(newNoteJSON, notesJSON);

    console.log("Note {title} added successfully!")
    console.log('Content: ', newNote);
}

function listNotes() {
    console.log("Listing notes...");
}

function readNote(id) {
    console.log(`Reading note: ${id}`)
}

function updateNote(id) {
    console.log(`Updating note: ${id}`)
}

function removeNote(id) {
    console.log(`Removing note ${id}`)
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    updateNote,
    removeNote
};