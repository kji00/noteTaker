const app = require('express');
const notesRouter = require('./notes');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');


const app = express();

app.Request('/notes', notesRouter)

module.exports = app