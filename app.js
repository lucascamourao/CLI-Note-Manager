// Configure the CLI
// Utilise yargs package for defining and reading commands
// Call functions from notes.js

const yargs = require('yargs')
const notesModule = require('./notes.js');

// Defines "add" command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesModule.addNote(argv.title, argv.body);
    }
});

// Defines "list" command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler(argv) {
        notesModule.listNotes();
    }

});

// Defines "read" command
yargs.command({
    command: 'read',
    builder: {
        id: {
            describe: 'Note ID',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        if (isNaN(argv.id)) {
            console.log('Invalid note ID');
            return;
        }
        notesModule.readNote(argv.id);
    }
});

// Defines "update" command
yargs.command({
    command: 'update',
    builder: {
        id: {
            describe: 'Note ID',
            demandOption: true,
            type: 'number'
        },
        title: {
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv) {
        const noteId = Number(argv.id);
        if (isNaN(noteId)) {
            console.log('Invalid note ID');
            return;
        }
        notesModule.updateNote(noteId, argv.title, argv.body);
    }
});

// Defines "remove" command
yargs.command({
    command: 'remove',
    builder: {
        id: {
            describe: 'Note ID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const noteId = Number(argv.id);
        if (isNaN(noteId)) {
            console.log('Invalid note ID');
            return;
        }
        notesModule.removeNote(noteId);
    }
});

yargs.parse();