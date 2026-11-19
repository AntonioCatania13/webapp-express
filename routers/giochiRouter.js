import express from 'express'

const giochi = express.Router();

//index g.
giochi.get('/', (req, res) => {
    res.send('lista dei giochi');
});

//show s.
giochi.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`gioco specifico id: ${id}`);
});

//store c.
giochi.post('/', (req, res) => {
    res.send('creazione di un nuovo gioco');
});

//update m.
giochi.patch('/:id', (req,res) => {
    const id = Number(req.params.id);
    res.send(`modifica di un gioco specifico id: ${id}`);
});

//destroy
giochi.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`eliminazione di un specifico gioco id: ${id}`);
});

export default giochi;