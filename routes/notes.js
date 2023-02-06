const router = require('express').Router();
// uuid creates unique id field for new entries from the front end
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET routes for /api/notes
router.get('/', (req, res) => {
    console.log('this is the GET /api/notes route')

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// POST routes /api/post
router.post('/', (req, res) => {
    console.log('POST route for /api/notes')

    const { title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            // adds unique id for each new note entry
            id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');
        res.json('Note was added successfully')
    } else {
        res.error('Error adding note')
    }
})

//exports router.get for /notes 
module.exports = router