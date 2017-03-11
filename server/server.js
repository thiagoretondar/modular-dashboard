import express from 'express';

const PORT = 3000;

const app = express();

// setting view
app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    console.log('Returning index');
    return res.render('index', { name: 'Thiago' });
});

// starting server
app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}.`);
});
