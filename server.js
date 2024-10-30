const express = require('express');
const cors = require('cors');
const app = express();

const port = 8080;

let notes = [
    { id: 1, text: 'Text a', color: 'green' },
    { id: 2, text: 'Text b', color: 'blue' },
    // ...
];

app.use(cors());

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.post('/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(notes);
});

// ... (טיפול בבקשות PUT ו-DELETE)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});