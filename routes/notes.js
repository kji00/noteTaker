const router = require('express').Router()
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')

// GET routes for /api/notes
router.get('/', (req, res) => {
    console.log('this is the GET /api/notes route')

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// POST routes /api/post
router.post('/', (req, res) => {
    console.log('POST route for /api/notes')

    
})