const express = require('express');
const path = require('path');
// all routes are configured in seperate folder and files and imported back into server.js 
const api = require('./routes/index');

// for heroku deployment use a heroku port or default to 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'))

// GETS /notes returns the notes.html file
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

//GET * is a wildcard returns the index.html file that isn't /notes
app.get ('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
