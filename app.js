import express from 'express' //imp. server come, dove
import giochiRouter from './routers/giochiRouter.js';

const app = express()
const port = process.env.APP_PORT;

//abilitazione p.
app.use(express.json());

//rotta
app.get('/', (req, res) => {
    res.send('start server');
});

app.use('/giochi', giochiRouter);
//start server
app.listen(port, () => {
    console.log(`start server http://localhost:${port}`);
    
});
