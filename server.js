const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 8080;

let notes = [
    { id: 1, text: 'Text a', color: 'green' },
    { id: 2, text: 'Text b', color: 'blue' },
    { id: 3, text: 'Text c', color: 'red' },
];

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const newNote = { ...req.body, id: Date.now() };
    notes.push(newNote);
    res.json(newNote);
});

app.put('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const updatedText = req.body.text;

    notes = notes.map(note => note.id == id ? { ...note, text: updatedText } : note);
    res.json(notes.find(note => note.id == id));
});

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter(note => note.id != id);
    res.sendStatus(204); // אין תוכן מוחזר עבור מחיקה מוצלחת
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
