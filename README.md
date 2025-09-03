# Note Manager - CLI

A simple yet powerful command-line interface (CLI) application for managing personal notes, built with Node.js. This project consolidates key concepts such as file system manipulation (`fs`), data structuring (`JSON`), modular code (`require`/`module.exports`), and handling command-line arguments with external NPM packages like `yargs`.

---

## ✨ Features

* ✒️ **Add:** Creates a new note with a unique ID, title, body, and creation timestamp.
* 📖 **List:** Displays the ID, title, and creation date of all saved notes.
* 🔍 **Read:** Shows the full content of a specific note by its ID.
* 🔄 **Update:** Modifies the title or body of an existing note by its ID.
* 🗑️ **Remove:** Deletes a note from your collection by its ID.

## 🛠️ Tech Stack

* **Node.js**: JavaScript runtime environment.
* **Yargs**: A library for building interactive command-line tools.
* **Luxon** (or other): A library for handling dates and times.

## 🚀 Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following tools installed:
* [Node.js and npm](https://nodejs.org/en/)
* [Git](https://git-scm.com/) (optional, for cloning)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/notes-cli.git](https://github.com/your-username/notes-cli.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd notes-cli
    ```
3.  **Install the NPM dependencies:**
    ```bash
    npm install
    ```

## ✍️ Usage

All commands are run from the terminal in the project's root directory.

#### Adding a New Note
Use the `add` command with `--title` and `--body` options.

```bash
node app.js add --title="Shopping List" --body="Milk, Bread, Eggs"
```

**Output:** 
```bash
Note 'Shopping List' added successfully!
```

#### Listing All Notes
Use the `list` command to view the ID, creation date, and title of all notes.

```bash
node app.js list
```

**Output:** 
```bash
Your Notes:
[ID: 1] (Created on: 2025-09-02) Shopping List
```

#### Reading a Specific Note
Use the `read` command with the `--id option` to see the full content of a note.

```bash
node app.js read --id=1
```

#### Updating an Existing Note
Use the `update` command, identifying the note with `--id` and providing either `--newTitle` or `--newBody`.

```bash
node app.js update --id=1 --newBody="Milk, Bread, Eggs, and Butter"
```

#### Removing a Note
Use the `remove` command with the `--id` option to delete a note.

```bash
node app.js remove --id=1
```

## 🏗️ Project Structure

The application logic is separated into modules for better organization:

* **`app.js`**: The application's entry point. Responsible for setting up `yargs` and managing the command-line interface.
* **`notes.js`**: A module containing all the core business logic for manipulating notes (the CRUD functions).
* **`notes.json`**: A simple file-based database that stores the notes as a JSON array.

## 📄 License

This project is licensed under the MIT License.
