const express = require('express');
const notesRouter = require('./notes');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

const app = express();

app.use('/notes', notesRouter)

module.exports = app