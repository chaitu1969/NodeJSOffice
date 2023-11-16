const fs = require("fs");
const chalk = require("chalk");

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("notes added");
  } else console.log("title already has been taken");
};

const removeNote = function (title) {
  const notes = loadNotes();
  const noteToKeep = notes.filter(function (notes) {
    return notes.title !== title;
  });

  if (notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse('Note doesn"t exist'));
  }
  saveNotes(noteToKeep);
};

const getNotes = function () {
  return "my Notes....";
};

debugger;

const ReadNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((notes) => notes.title === title);

  if (note) {
    console.log(chalk.inverse("note"));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not available"));
  }
};

const listNodes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNodes: listNodes,
  readNote: ReadNote,
};
