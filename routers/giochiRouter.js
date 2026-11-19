import express from 'express'

const giochi = express.Router();

//index
giochi.get('/', (req, res) => {
    res.send('lista dei giochi');
});

//show
giochi.get('/:id', (req, res) => {
    res.send('gioco specifico');
});

//store
giochi.post('/', (req, res) => {
    res.send('creazione di un nuovo gioco');
});

export default giochi;