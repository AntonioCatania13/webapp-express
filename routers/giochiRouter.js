import express from 'express'

const giochi = express.Router();

//index
giochi.get('/', (req, res) => {
    res.send('lista dei giochi');
});

export default giochi;