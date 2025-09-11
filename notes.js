// Implement all the logic 
// The only file to interact with notes.json

const fs = require('fs');
const { title } = require('process');

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
      id: notes.length + 1,
      title: title,
      body: body,
      createdAt: new Date().toISOString()
    };

    notes.push(newNote); // puts the new note into the list

    const newNotes = JSON.stringify(notes, null, 2);

    fs.writeFileSync('notes.json', newNotes); // se o JSON não existir, aqui é criado normalmente

    console.log(`Note ${title} added successfully!`);
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

  if (fs.existsSync('notes.json')) {
    const notesJSON = fs.readFileSync('notes.json', 'utf8');
    try {
      notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // se for vazio, pega uma lista vazia

    } catch (e) {
      console.error('Erro ao fazer parsing do JSON existente:', e);
    }
  }

  const note = notes.find(n => Number(n.id) === Number(id));

  if (note) {
    console.log(note);
  } else {
    console.log(`Couldn't find note with id ${id}`);
  }
}

function updateNote(id) {
  console.log(`Updating note: ${id}`)

  let notes = [];

  if (fs.existsSync('notes.json')) {
    const notesJSON = fs.readFileSync('notes.json', 'utf8');
  try {
    notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // se for vazio, pega uma lista vazia

  } catch (e) {
    console.error('Erro ao fazer parsing do JSON existente:', e);
    }
  }

  const note = notes.find(n => Number(n.id) === Number(id));

  if (note) {
    note.title = title;
    note.body = body;
  } else {
    console.log(`Couldn't find note with id ${id}`);
  }

}

function removeNote(id) {
  console.log(`Removing note ${id}`)

  let notes = [];

  if (fs.existsSync('notes.json')) {
    const notesJSON = fs.readFileSync('notes.json', 'utf8');
  try {
    notes = notesJSON.trim() === "" ? [] : JSON.parse(notesJSON); // se for vazio, pega uma lista vazia

  } catch (e) {
    console.error('Erro ao fazer parsing do JSON existente:', e);
    }
  }

  const note = notes.find(n => Number(n.id) === Number(id));

  if (note) {
    for (let n_id = 0; n_id < notes.length; n_id++) {
      if (notes[n_id].id === id){
        let deletedNote = notes.splice(n_id, 1);

        console.log('Note removed successfully!');
        console.log('Content: ', deletedNote);
      }
    }
  } else {
    console.log(`Couldn't find note with id ${n_id}`);
  }

  const newNotes = JSON.stringify(notes, null, 2);

  fs.writeFileSync('notes.json', newNotes); // se o JSON não existir, aqui é criado normalmente
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    updateNote,
    removeNote
};