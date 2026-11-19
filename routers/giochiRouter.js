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

export default giochi;