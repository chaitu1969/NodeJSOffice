const validator = require("validator");
const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: "note title",
    demandOption: true,
    type: "string",
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
    // console.log("removing a note!");
  },
});

// List command

yargs.command({
  command: "list",
  describe: "Listing commnad is used",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of node",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title :", argv.title);
    console.log("body :", argv.body);
  },
});

// read commnad

yargs.command({
  command: "read",
  describe: "reading description",
  handler: function () {
    console.log("Reading the lind from the read command");
  },
});
// console.log(process.argv);

// List Nodes
yargs.command({
  command: "list",
  describe: "Listing your note",
  handler() {
    notes.listNodes();
  },
});

// read Note
yargs.command({
  command: "readNote",
  describe: "reading a note",
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();

// const command = process.argv[2];

// if(command === 'add'){

//     console.log('Adding note!')

// }else {
//     console.log('Command not matched')
// }
