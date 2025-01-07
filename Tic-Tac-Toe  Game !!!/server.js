const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Ensure this matches with your intended port number



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use(express.static(path.join(__dirname, 'public2')));

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public2', 'game.html'));
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
