const express = require('express');
const notesRouter = require('./notes');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

const app = express();

// handles all routes that come in with /notes
app.use('/notes', notesRouter)

module.exports = app