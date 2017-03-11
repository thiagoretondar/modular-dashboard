import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World :)');
});

// starting server
app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}.`);
});
