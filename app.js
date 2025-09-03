// Configure the CLI
// Utilise yargs package for defining and reading commands
// Call functions from notes.js

const fs = require('fs');
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
            type: 'string'
        }
    },
    handler(argv) {
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
            type: 'string'
        }
    },
    handler(argv) {
        notesModule.update(argv.id);
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
        notesModule.removeNote(argv.id);
    }
});


yargs.parse();
