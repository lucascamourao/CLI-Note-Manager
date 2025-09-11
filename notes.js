// Implement all the logic 
// The only file to interact with notes.json

const fs = require('fs');

function addNote(title, body) {
    let notes = [];

    // Se já existe o arquivo, lê as notas
    if (fs.existsSync('notes.json')) {
      const notesJSON = fs.readFileSync('notes.json', 'utf8');
      try {
        notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // se for vazio, pega uma lista vazia

      } catch (e) {
        console.error('Erro ao fazer parsing do JSON existente:', e);
      }
    } 

    const newNote = {
      id: String(notes.length + 1),
      title: title,
      body: body,
      createdAt: new Date().toISOString()
    };

    notes.push(newNote); // puts the new note into the list

    const newNotes = JSON.stringify(notes, null, 2);

    fs.writeFileSync('notes.json', newNotes); // se o JSON não existir, aqui é criado normalmente

    console.log("Note {title} added successfully!")
    console.log('Content: ', newNote);
}

function listNotes() {
  let notes = [];

  console.log("Listing notes...");

  if (fs.existsSync('notes.json')) {
    const notesJSON = fs.readFileSync('notes.json', 'utf8');
    try {
      notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // se for vazio, pega uma lista vazia

    } catch (e) {
      console.error('Erro ao fazer parsing do JSON existente:', e);
    }
  }

  console.log(notes);
}

function readNote(id) {
  let notes = [];

  console.log(`Reading note: ${id}`);

  if (fs.existsSync('notes.json')) {
    const notesJSON = fs.readFileSync('notes.json', 'utf8');
    try {
      notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // se for vazio, pega uma lista vazia

    } catch (e) {
      console.error('Erro ao fazer parsing do JSON existente:', e);
    }
  }

  console.log(notes);

  while (i < length(notes)) {
    if (String(notes[i].id) == String(id)){
      console.log(notes[i]);
      break;
    }
    console.log("oi");
    i++;
  }
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