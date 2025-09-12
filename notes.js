// Implement all the logic 
// The only file to interact with notes.json

const fs = require('fs');

// Auxiliary function for loading the notes from the JSON file
function loadNotes() {
  // Reads the notes if notes.json exists
  if (fs.existsSync('notes.json')) {
    const notesJSON = fs.readFileSync('notes.json', 'utf8');
    try {
      notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // gets an empty list if there is nothing
      return notes;
    } catch (e) {
      console.error('Error while parsing the existing JSON:', e);
    }
  } else {
    return [];
  }
}

function addNote(title, body) {
  let notes = loadNotes(); 

  // Copies the original list of notes and pops (removes and returns) the last element
  let notesAux = [...notes]; // spread operator
  
  let currId = 0;
  if (notesAux > 0) {
    let currLastElement = notesAux.pop();
    currId = currLastElement.id;
  } 

  // Making sure the ids are UNIQUE
  const newNote = {
    id: currId + 1,
    title: title,
    body: body,
    createdAt: new Date().toLocaleString('pt-BR')
  };

  notes.push(newNote); // puts the new note into the list

  const newNotes = JSON.stringify(notes, null, 2);

  fs.writeFileSync('notes.json', newNotes); // JSON is created if it doesnt already exist

  console.log(`Note ${title} added successfully!`);
  console.log('Content: ', newNote);
}

function listNotes() {
  let notes = loadNotes();

  if (notes.length > 0) {
    console.log("Listing notes...");
    console.log(notes);
  } else {
    console.log('There are no notes registered.');
  }
}

function readNote(id) {
  let notes = loadNotes(); 

  const note = notes.find(n => Number(n.id) === Number(id));

  if (note) {
    console.log('Reading note...');
    console.log(note);
  } else {
    console.log(`Couldn't find note with id ${id}`);
  }
}

function updateNote(id, title, body) {
  console.log(`Updating note: ${id}`)

  let notes = loadNotes(); 

  const note = notes.find(n => Number(n.id) === Number(id));

  // Checks if the following (optional) arguments have been passed
  if (note) {
    if (typeof(title) != 'undefined') {
      note.title = title;
    }

    if (typeof(body) != 'undefined'){
      note.body = body;
    }

    console.log(`Note has been updated!`);
    console.log(note);

    const newNotes = JSON.stringify(notes, null, 2);

    fs.writeFileSync('notes.json', newNotes); 

  } else {
    console.log(`Couldn't find note with id ${id}`);
  }
}

function removeNote(id) {
  let notes = loadNotes(); 

  const note = notes.find(n => Number(n.id) === Number(id));

  if (note) {
    for (let n_id = 0; n_id < notes.length; n_id++) {
      if (notes[n_id].id === id){
        let deletedNote = notes.splice(n_id, 1);
        console.log(`Removing note ${id}`)
        console.log('Note removed successfully!');
        console.log('Content: ', deletedNote);
      }
    }
  } else {
    console.log(`Couldn't find note with id ${id}`);
  }

  const newNotes = JSON.stringify(notes, null, 2);

  fs.writeFileSync('notes.json', newNotes); // JSON is created if it doesnt already exist
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    updateNote,
    removeNote
};